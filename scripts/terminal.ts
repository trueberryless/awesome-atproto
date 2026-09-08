import readline from "node:readline";
import pc from "picocolors";

export class TerminalDashboard {
  private workers: string[] = [];
  private total = 0;
  private completed = 0;
  private linesRendered = 0;
  private startTime = Date.now();
  private isCI =
    !process.stdout.isTTY || process.env.CI === "true" || process.env.GITHUB_ACTIONS === "true";
  private timer: NodeJS.Timeout | null = null;

  constructor(concurrency: number, total: number) {
    this.total = total;
    if (!this.isCI) {
      this.workers = Array(concurrency).fill(pc.gray("Idle..."));
      this.timer = setInterval(() => this.render(), 100);
    }
  }

  updateWorker(index: number, repoName: string, status: string, colorFn: (s: string) => string) {
    const formattedRepo = colorFn(`[${repoName}]`);
    if (this.isCI) {
      console.log(`${pc.gray(`[Thread ${index + 1}]`)} ${formattedRepo} ${status}`);
    } else {
      this.workers[index] = `${formattedRepo} ${status}`;
      this.render();
    }
  }

  logMessage(message: string) {
    if (this.isCI) {
      console.log(message);
    } else {
      if (this.linesRendered > 0) {
        readline.moveCursor(process.stdout, 0, -this.linesRendered);
        readline.clearScreenDown(process.stdout);
      }
      console.log(message);
      this.linesRendered = 0;
      this.render();
    }
  }

  incrementCompleted() {
    this.completed++;
    if (!this.isCI) this.render();
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      this.render();
    }
  }

  private render() {
    if (this.isCI) return;

    if (this.linesRendered > 0) {
      readline.moveCursor(process.stdout, 0, -this.linesRendered);
      readline.clearScreenDown(process.stdout);
    }

    let output = "\n";
    const percent = this.total === 0 ? 1 : this.completed / this.total;
    const barLength = 40;
    const filled = Math.round(barLength * percent);
    const empty = barLength - filled;
    const bar = pc.green("█".repeat(filled)) + pc.gray("░".repeat(empty));
    const timeElapsed = ((Date.now() - this.startTime) / 1000).toFixed(1);

    output += `  ${pc.bold("Global Progress:")} [${bar}] ${this.completed}/${this.total} Tasks (${timeElapsed}s)\n\n`;

    for (let i = 0; i < this.workers.length; i++) {
      output += `  ${pc.bold(`Thread ${i + 1}`)} │ ${this.workers[i]}\n`;
    }

    process.stdout.write(output);
    this.linesRendered = this.workers.length + 3;
  }
}
