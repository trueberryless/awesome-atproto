import { promises as fs } from "node:fs";
import path from "node:path";
import pc from "picocolors";
import { TerminalDashboard } from "./terminal.ts";

interface GithubTask {
  type: "github";
  id: string;
  query: string;
  limit: number;
}

interface AtstoreTask {
  type: "atstore";
  id: string;
  minReviews: number;
  minRating: number;
}

type TaskConfig = GithubTask | AtstoreTask;

interface FetchedItem {
  name: string;
  url: string;
  description: string;
  stars?: number;
}

const CONCURRENCY = 3;
const MIN_GROUP_SIZE = 3;
const README_PATH = path.join(process.cwd(), "README.md");
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
  console.error(pc.red("✖ Error: GITHUB_TOKEN environment variable is required."));
  process.exit(1);
}

const TASKS: TaskConfig[] = [
  { type: "atstore", id: "clients", minReviews: 2, minRating: 3.5 },
  { type: "github", id: "starter_kits", query: "topic:atproto starter OR template OR boilerplate", limit: 8 },
  { type: "github", id: "sdks_ts", query: "topic:atproto language:typescript sdk OR library OR api OR client", limit: 12 },
  { type: "github", id: "sdks_go", query: "topic:atproto language:go sdk OR library OR api OR client", limit: 10 },
  { type: "github", id: "sdks_python", query: "topic:atproto language:python sdk OR library OR api OR client", limit: 10 },
  { type: "github", id: "sdks_rust", query: "topic:atproto language:rust sdk OR library OR api OR client", limit: 10 },
  { type: "github", id: "sdks_ruby", query: "topic:atproto language:ruby sdk OR library OR api OR client", limit: 10 },
  { type: "github", id: "tools_cli", query: "topic:atproto cli OR tool OR utility", limit: 10 },
  { type: "github", id: "ozone", query: "topic:atproto ozone OR labeler OR moderation OR safety", limit: 8 },
  { type: "github", id: "lexicons", query: "topic:atproto lexicon OR codegen", limit: 8 },
  { type: "github", id: "infrastructure", query: "topic:atproto pds OR relay OR appview OR bgs OR infrastructure", limit: 10 },
  { type: "github", id: "firehose", query: "topic:atproto firehose OR jetstream OR stream OR indexing", limit: 10 },
  { type: "github", id: "bots_feeds", query: "topic:atproto bot OR feed OR algorithm", limit: 12 },
];

function truncateDescription(desc: string): string {
  if (!desc) return "No description provided.";
  const clean = desc.trim().replace(/[\r\n]+/g, " ");
  if (clean.length > 200) {
    return `${clean.substring(0, 197)}...`;
  }
  return clean;
}

function toTitleCase(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function getNormalizedUrl(url: string): string {
  return url.toLowerCase().replace(/\/$/, "");
}

function isUrlCurated(url: string, curatedUrls: Set<string>): boolean {
  const normalized = getNormalizedUrl(url);
  for (const cur of curatedUrls) {
    if (cur === normalized || cur.includes(normalized) || normalized.includes(cur)) {
      return true;
    }
  }
  return false;
}

async function checkUrl(url: string): Promise<boolean> {
  if (!url || url === "#") return false;
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(url, {
      method: "GET",
      headers: { "User-Agent": "Awesome-ATProto-Link-Validator/1.0" },
      signal: controller.signal,
    });
    clearTimeout(id);
    return (res.status >= 200 && res.status < 400) || res.status === 403 || res.status === 429;
  } catch {
    return false;
  }
}

async function fetchGithubRepositories(query: string, limit: number, curatedUrls: Set<string>): Promise<string> {
  const url = new URL("https://api.github.com/search/repositories");
  url.searchParams.append("q", `${query} fork:false`);
  url.searchParams.append("sort", "stars");
  url.searchParams.append("order", "desc");
  url.searchParams.append("per_page", (limit * 3).toString());

  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Awesome-ATProto-Updater",
    Authorization: `token ${GITHUB_TOKEN}`,
  };

  const response = await fetch(url.toString(), { headers });

  if (!response.ok) {
    throw new Error(`GitHub API Error: ${response.status}${response.statusText}`);
  }

  const data = await response.json();

  if (!data || !Array.isArray(data.items)) {
    throw new Error("Invalid GitHub response format.");
  }

  const validItems: FetchedItem[] = [];

  for (const item of data.items) {
    if (!item.description) continue;

    const descLower = item.description.trim().toLowerCase();
    if (descLower === "no description provided." || descLower === "no description") continue;
    if (item.name.toLowerCase().includes("mirror")) continue;
    if (isUrlCurated(item.html_url, curatedUrls)) continue;

    const isUrlValid = await checkUrl(item.html_url);
    if (!isUrlValid) continue;

    validItems.push({
      name: item.full_name,
      url: item.html_url,
      description: item.description,
      stars: item.stargazers_count || 0,
    });

    if (validItems.length >= limit) break;
  }

  if (validItems.length === 0) {
    return "- *No items found during the last update.*\n";
  }

  const sorted = validItems.sort((a, b) => a.name.localeCompare(b.name));
  return (
    sorted
      .map((item) => `- [${item.name}](${item.url}) - ${truncateDescription(item.description)}`)
      .join("\n") + "\n"
  );
}

async function fetchAtstoreListings(minReviews: number, minRating: number, curatedUrls: Set<string>): Promise<string> {
  const allListings: any[] = [];
  let cursor: string | undefined = undefined;

  for (let i = 0; i < 5; i++) {
    const url = new URL("https://atstore.fyi/xrpc/fyi.atstore.directory.searchListings");
    url.searchParams.append("limit", "100");
    if (cursor) {
      url.searchParams.append("cursor", cursor);
    }

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`ATStore API Error: ${response.status}${response.statusText}`);
    }

    const data = await response.json();
    if (!data.listings || !Array.isArray(data.listings)) {
      throw new Error("Invalid ATStore response format.");
    }

    allListings.push(...data.listings);
    cursor = data.cursor;

    if (!cursor) {
      break;
    }
  }

  const validApps = allListings.filter(
    (app) =>
      app.reviewCount !== undefined &&
      app.reviewCount >= minReviews &&
      app.rating !== undefined &&
      parseFloat(app.rating) >= minRating
  );

  const appsWithLinks: any[] = [];

  for (const app of validApps) {
    let appUrl = app.productAccountHandle ? `https://${app.productAccountHandle}` : "#";

    if (appUrl === "#" || isUrlCurated(appUrl, curatedUrls)) continue;

    let isValid = await checkUrl(appUrl);

    if (!isValid) {
      appUrl = `https://bsky.app/profile/${app.productAccountHandle}`;
      if (isUrlCurated(appUrl, curatedUrls)) continue;
      isValid = true;
    }

    if (isValid) {
      app.validatedUrl = appUrl;
      appsWithLinks.push(app);
    }
  }

  const initialGroups: Record<string, any[]> = {};

  for (const app of appsWithLinks) {
    const primaryTag =
      app.appTags && app.appTags.length > 0 ? toTitleCase(app.appTags[0]) : "Other";

    if (!initialGroups[primaryTag]) {
      initialGroups[primaryTag] = [];
    }
    initialGroups[primaryTag].push(app);
  }

  const consolidatedGroups: Record<string, any[]> = { Other: initialGroups["Other"] || [] };
  delete initialGroups["Other"];

  for (const [tag, apps] of Object.entries(initialGroups)) {
    if (apps.length < MIN_GROUP_SIZE) {
      consolidatedGroups["Other"].push(...apps);
    } else {
      consolidatedGroups[tag] = apps;
    }
  }

  if (consolidatedGroups["Other"].length === 0) {
    delete consolidatedGroups["Other"];
  }

  const sortedKeys = Object.keys(consolidatedGroups)
    .filter((key) => key !== "Other")
    .sort();

  if (consolidatedGroups["Other"]) {
    sortedKeys.push("Other");
  }

  let markdown = "";

  for (const key of sortedKeys) {
    markdown += `### ${key}\n\n`;
    const appsInGroup = consolidatedGroups[key].sort((a, b) => a.name.localeCompare(b.name));

    for (const app of appsInGroup) {
      const desc = truncateDescription(app.tagline || app.description);
      markdown += `- [${app.name}](${app.validatedUrl}) - ${desc}\n`;
    }
    markdown += "\n";
  }

  return markdown ? markdown.trimEnd() + "\n" : "- *No apps found during the last update.*\n";
}

let readmeWriteLock = Promise.resolve();

async function updateReadmeContent(taskId: string, newContent: string) {
  const previousLock = readmeWriteLock;
  let releaseLock!: () => void;

  readmeWriteLock = new Promise((resolve) => {
    releaseLock = resolve;
  });

  await previousLock;

  try {
    const content = await fs.readFile(README_PATH, "utf-8");
    const regex = new RegExp(
      `([ \\t]*<!-- AUTOGENERATION_START: ${taskId} -->\\r?\\n)(?:[\\s\\S]*?)([ \\t]*<!-- AUTOGENERATION_END: ${taskId} -->)`,
      "g"
    );

    if (!regex.test(content)) {
      throw new Error(`Could not find AUTOGEN tags for ${taskId}`);
    }

    const updatedContent = content.replace(regex, `$1${newContent}$2`);
    await fs.writeFile(README_PATH, updatedContent, "utf-8");
  } catch (error) {
    throw new Error(
      `Failed to write to README: ${error instanceof Error ? error.message : String(error)}`
    );
  } finally {
    releaseLock();
  }
}

async function processTask(
  task: TaskConfig,
  workerId: number,
  dashboard: TerminalDashboard,
  curatedUrls: Set<string>
): Promise<void> {
  dashboard.updateWorker(workerId, task.id, "Fetching data...", pc.blue);

  try {
    let markdown = "";

    if (task.type === "github") {
      markdown = await fetchGithubRepositories(task.query, task.limit, curatedUrls);
    } else if (task.type === "atstore") {
      markdown = await fetchAtstoreListings(task.minReviews, task.minRating, curatedUrls);
    }

    dashboard.updateWorker(workerId, task.id, "Formatting and writing...", pc.yellow);
    await updateReadmeContent(task.id, markdown);

    dashboard.updateWorker(workerId, task.id, "Completed successfully.", pc.green);
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    dashboard.updateWorker(workerId, task.id, `Failed: ${msg}`, pc.red);
  } finally {
    dashboard.incrementCompleted();
  }
}

async function run() {
  const dashboard = new TerminalDashboard(CONCURRENCY, TASKS.length);

  const content = await fs.readFile(README_PATH, "utf-8");
  const strippedContent = content.replace(/<!-- AUTOGENERATION_START: [\s\S]*?AUTOGENERATION_END: .*? -->/g, "");
  const urlRegex = /\[.+?\]\((https?:\/\/[^)]+)\)/g;
  const curatedUrls = new Set<string>();
  let match;
  while ((match = urlRegex.exec(strippedContent)) !== null) {
    curatedUrls.add(getNormalizedUrl(match[1]));
  }

  const queue = [...TASKS];
  const activeWorkers: Promise<void>[] = [];

  for (let i = 0; i < CONCURRENCY; i++) {
    const worker = async (workerId: number) => {
      while (queue.length > 0) {
        const task = queue.shift();
        if (task) {
          await processTask(task, workerId, dashboard, curatedUrls);
          await new Promise((res) => setTimeout(res, 1000));
        }
      }
    };
    activeWorkers.push(worker(i));
  }

  await Promise.all(activeWorkers);
  dashboard.stop();
  dashboard.logMessage(pc.green("\n✨ README.md update process finished."));
}

run().catch((error) => {
  console.error(pc.red("Fatal execution error:"), error);
  process.exit(1);
});
