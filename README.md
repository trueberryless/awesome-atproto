# Awesome AT Protocol 🌐

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated, automatically updating list of awesome resources, libraries, tools, and applications for the **Authenticated Transfer Protocol (AT Protocol / atproto)**.

> **For Newcomers:** What is atproto? 
> It's the federated, open-source protocol that powers [Bluesky](https://bsky.app). Unlike traditional centralized platforms, atproto separates your identity, your data, and the application interface. Unlike Web3, it doesn't use blockchains. Unlike ActivityPub (Mastodon), it relies on a global firehose, account portability, and highly composable schemas called "Lexicons." It is designed for massive scale, algorithmic choice, and genuine user ownership.

## 📖 Table of Contents

- [🧠 Mental Models & Explanations](#-mental-models--explanations)
- [📚 Core Specifications](#-core-specifications)
- [✍️ Blogs & Articles](#-blogs--articles)
- [🚀 Starter Kits & Templates](#-starter-kits--templates)
- [💻 SDKs & Libraries](#-sdks--libraries)
- [🛠 Developer Tools & CLIs](#-developer-tools--clis)
- [🛡️ Trust, Safety & Ozone](#-trust-safety--ozone)
- [📜 Lexicons & Tooling](#-lexicons--tooling)
- [🏗 Infrastructure & Self-Hosting](#-infrastructure--self-hosting)
- [🌊 Firehose & Data Indexing](#-firehose--data-indexing)
- [🤖 Bots & Feed Generators](#-bots--feed-generators)
- [🆔 Identity & Authentication](#-identity--authentication)
- [📱 Apps & Clients](#-apps--clients)
- [🌍 Community & Ecosystem](#-community--ecosystem)

## 🧠 Mental Models & Explanations

Conceptual guides and high-level overviews to help you understand the architecture and philosophy behind the AT Protocol.

- [The AT Protocol Official Docs](https://atproto.com/) - The single source of truth for the protocol architecture.
- [Atproto for distributed systems engineers](https://atproto.com/articles/atproto-for-distsys-engineers) - A visual breakdown of how servers talk to each other without losing state.
- [The AT Stack](https://atproto.com/guides/the-at-stack) - Components of the AT Protocol Stack
- [Data Repositories & MSTs](https://atproto.com/specs/repository) - Readable specification of repositories and the Merkle Search Trees that make account portability possible.

## 📚 Core Specifications

The foundational technical documents and data structures that define how the protocol operates under the hood.

- [atproto/repo](https://atproto.com/specs/repository) - Data structure for user repositories.
- [atproto/sync](https://atproto.com/specs/sync) - How to synchronize data between a PDS and a Relay.
- [atproto/identity](https://atproto.com/specs/did) - DID (Decentralized Identifier) implementation details (`did:plc` and `did:web`).
- [atproto/lexicon](https://atproto.com/specs/lexicon) - The schema language definitions.

## ✍️ Blogs & Articles

- [Bluesky Blog](https://bsky.social/about/blog) - The latest from Bluesky
- [ATproto Blog](https://atproto.com/blog) - News, updates, and insights from the AT Protocol team
- [Daniel's Leaflets](https://dholms.leaflet.pub/) - Blog posts by the head of protocol @ bsky

## 🚀 Starter Kits & Templates

Ready-to-use boilerplates and reference implementations to kickstart your next AT Protocol project.

- [bluesky-social/feed-generator](https://github.com/bluesky-social/feed-generator) - Official TS starter for building custom algorithmic feeds.
  <!-- AUTOGENERATION_START: starter_kits -->
- *No items found during the last update.*
  <!-- AUTOGENERATION_END: starter_kits -->

## 💻 SDKs & Libraries

Official and community-maintained client libraries for building applications across various programming languages.

### TypeScript / JavaScript

- [@atproto/api](https://github.com/bluesky-social/atproto/tree/main/packages/api) - Official TypeScript client for interacting with PDS and AppView instances.
- [@atproto/oauth-client-browser](https://github.com/bluesky-social/atproto/tree/main/packages/oauth/oauth-client-browser) - Official library for implementing AT Protocol OAuth in the browser.
  <!-- AUTOGENERATION_START: sdks_ts -->
- *No items found during the last update.*
  <!-- AUTOGENERATION_END: sdks_ts -->

### Go

- [bluesky-social/indigo](https://github.com/bluesky-social/indigo) - Official Go implementation of atproto (used for the core Relay/PDS).
  <!-- AUTOGENERATION_START: sdks_go -->
- *No items found during the last update.*
  <!-- AUTOGENERATION_END: sdks_go -->

### Python

- [MarshalX/atproto](https://github.com/MarshalX/atproto) - Comprehensive, community-led Python SDK (synchronous and asynchronous).
  <!-- AUTOGENERATION_START: sdks_python -->
- *No items found during the last update.*
  <!-- AUTOGENERATION_END: sdks_python -->

### Rust

- [atrium-rs/atrium](https://github.com/atrium-rs/atrium) - Rust libraries for Bluesky's AT Protocol services.
  <!-- AUTOGENERATION_START: sdks_rust -->
- *No items found during the last update.*
  <!-- AUTOGENERATION_END: sdks_rust -->

### Ruby

- [ATproto Ruby SDK](https://ruby.sdk.blue/) - A set of Ruby gems for interacting with and building on the Bluesky APIs and the AT Protocol
  <!-- AUTOGENERATION_START: sdks_ruby -->
- *No items found during the last update.*
  <!-- AUTOGENERATION_END: sdks_ruby -->

## 🛠 Developer Tools & CLIs

Command-line interfaces, debuggers, and utilities to streamline your development workflow and interact with the network.

- [jazware/atproto.tools](https://github.com/jazware/atproto.tools) - A looking glass for the AT Proto Firehose
- [mary-ext/boat](https://github.com/mary-ext/boat) - handy online tools for AT Protocol
  <!-- AUTOGENERATION_START: tools_cli -->
- *No items found during the last update.*
  <!-- AUTOGENERATION_END: tools_cli -->

## 🛡️ Trust, Safety & Ozone

The AT Protocol relies heavily on composable moderation. Instead of a single central authority, users and communities can subscribe to labelers and moderation services that fit their preferences.

- [bluesky-social/ozone](https://github.com/bluesky-social/ozone) - Official collaborative moderation tool and labeling service for the AT Protocol.
- [blacksky-algorithms/rsky](https://github.com/blacksky-algorithms/rsky) - An AT Protocol implementation prioritizing community safety and self-governance, written in Rust.
  <!-- AUTOGENERATION_START: ozone -->
- *No items found during the last update.*
  <!-- AUTOGENERATION_END: ozone -->

## 📜 Lexicons & Tooling

Lexicons are the schema language of the AT Protocol (similar to OpenAPI for a federated graph). These tools help you compile, validate, and build with them.

- [Lexicon Specification](https://atproto.com/specs/lexicon) - The official documentation for the Lexicon schema language.
  <!-- AUTOGENERATION_START: lexicons -->
- *No items found during the last update.*
  <!-- AUTOGENERATION_END: lexicons -->

## 🏗 Infrastructure & Self-Hosting

Resources and implementations for running your own Personal Data Server (PDS), Relays, and AppViews.

- [bluesky-social/pds](https://github.com/bluesky-social/pds) - Official PDS (Personal Data Server) container image, compose file, and documentation.
- [atproto-relay-node](https://github.com/bluesky-social/indigo/blob/main/cmd/relay/README.md) - Documentation on how to run a full network relay (BGS).
  <!-- AUTOGENERATION_START: infrastructure -->
- *No items found during the last update.*
  <!-- AUTOGENERATION_END: infrastructure -->

## 🌊 Firehose & Data Indexing

Tools for tapping into the global stream of AT Protocol events and building custom data indexes.

- [bluesky-social/jetstream](https://github.com/bluesky-social/jetstream) - The official, lightweight JSON firehose proxy. Essential for most app developers.
  <!-- AUTOGENERATION_START: firehose -->
- *No items found during the last update.*
  <!-- AUTOGENERATION_END: firehose -->

## 🤖 Bots & Feed Generators

Automated agents, custom algorithm builders, and services to curate content and enhance the user experience.

- [SkyFeed](https://skyfeed.app/) - A powerful UI for visually building your own custom feeds without coding.
  <!-- AUTOGENERATION_START: bots_feeds -->
- *No items found during the last update.*
  <!-- AUTOGENERATION_END: bots_feeds -->

## 🆔 Identity & Authentication

Documentation and tools for managing Decentralized Identifiers (DIDs), handles, and OAuth integrations.

- [atproto OAuth Spec](https://atproto.com/specs/oauth) - How to implement 3rd-party logins without handling user passwords.
- [did:web Setup Guide](https://atproto.com/guides/identity) - How to use your own domain directly as your network identity.
- [Plc-Operations-Builder](https://github.com/did-method-plc/did-method-plc) - Cryptographic tooling for rotating PDS hosting keys in your PLC document.
- [plc.directory](https://web.plc.directory) - The official registry and resolution server for `did:plc` identities, used to map DIDs to their current handles, public keys, and PDS endpoints.

## 📱 Apps & Clients

A diverse ecosystem of social clients, utilities, games, and platforms built on top of the AT Protocol.

  <!-- AUTOGENERATION_START: clients -->
### Community

- [ATlas](https://atls.city) - Bringing the ATmosphere together
- [Blacksky](https://blackskyweb.xyz) - Decentralized social media built for community power, culture, and collective freedom.
- [lichen.wiki](https://lichen.wiki) - Collaborative knowledge platform on AT Proto

### Creative

- [Blento](https://blento.app) - Create your own website, the fun way
- [Lexidraw](https://lexidraw.app) - Lexidraw, an Excalidraw fork where your drawings follow you
- [rpg.actor](https://rpg.actor) - Build your character on rpg.actor and have fun playing in many worlds!

### Developer

- [Airglow](https://airglow.run) - Automations for the AT Protocol.
- [ATCR](https://atcr.io) - Push and pull Docker images on the AT Protocol.
- [co/core](https://cocore.dev) - co/core is a cooperative for AI inference — people pooling the Macs they already own to run open models for each other.
- [comail](https://comail.at) - Cooperative email for atproto
- [Marque](https://marque.at) - Claim your name on the open web
- [npmx](https://npmx.dev) - a fast, modern browser for the npm registry. Search, browse, and explore packages with a modern interface.
- [Tangled](https://tangled.org) - a git collaboration platform, built on atproto
- [userstyles.club](https://userstyles.club) - The club for sharing, discovering, and installing userstyles.
- [wisp.place](https://wisp.place) - Somewhere to put your stuff. A folder becomes a website

### Games

- [AT Mot](https://atmot.herve.bzh) - Guess the 5-letter word in 6 tries!
- [math.r](https://mathr.app) - Mathr is a brain building game to improve your math calculation skills. Practice arithmetic and level up!
- [Postgame](https://postgame.at) - Manage your video game library
- [Puzzmo](https://puzzmo.com) - The new place for thoughtful puzzles.
- [Skyrdle](https://skyrdle.com) - Daily word puzzle on AT Protocol.

### News

- [Mu](https://mu.social) - Proper Cringe™
- [Sill](https://sill.social) - Sill streamlines your Bluesky and Mastodon feeds to give you a clear picture of what's happening.
- [Skyreader](https://skyreader.app) - Read everything from everywhere. Make sense of it all.

### Personal Page

- [Keytrace](https://keytrace.dev) - Link GitHub, domains, and other accounts to your internet handle.
- [Linkat](https://linkat.blue) - Linkat is an ATProto service for creating a "Link in Bio" for Bluesky. Your links are saved in your PDS.
- [Pronouns](https://pronouns.blue) - Share your names and pronouns on ATproto
- [Sifa ID](https://sifa.id) - Professional identity on the AT Protocol

### Photo

- [Currents](https://currents.is) - Save inspiration and curate personalized visual feeds.
- [Flashes](https://flashes.blue) - A Photo & Video App for Bluesky
- [Grain](https://grain.social) - Photography focused photo sharing platform
- [Zeens](https://zeens.app) - A photography community built on ATProtocol.

### Publishing

- [Leaflet](https://leaflet.pub) - Read and publish on the Atmosphere — social blogs, one-off posts, and more
- [Offprint](https://offprint.app) - Publishing infrastructure for the open web.
- [Standard Reader](https://standard-reader.app) - Fresh writing from the publications you follow, every day.
- [writizzy](https://writizzy.com) - The web deserves more independent publishing

### Social

- [Bridgy Fed](https://ap.brid.gy) - Bridging the new social internet
- [Flushes](https://flushes.app) - The world's first decentralized social media app for sharing the most universal human experience.
- [Spark](https://sprk.so) - Real Moments, Shared Together
- [You & Me](https://youandme.at) - Connect with people around you on the AT Protocol.

### Other

- [Anisota](https://anisota.net) - A radical yet peaceful user interface for Bluesky, ATProto, and ATmosphere-based social media
- [Ask Everything](https://askeverything.app) - Ask, answer, & explore questions about everything.
- [atpr.to](https://atpr.to) - AT Protocol URL shortener — links stored in your own PDS.
- [ATStore](https://atstore.fyi) - Find your next favorite app.
- [Beacon Bits](https://beaconbits.app) - Put your posts on the map
- [BookHive](https://bookhive.buzz) - The social platform for book lovers
- [Boost Blue](https://boostblue.bsky.social) - Boost your Bluesky experience
- [Cartes.app](https://cartes.app) - Open source map with AT place reviews
- [Colibri](https://colibri.social) - Colibri is an open source chat platform built on the ATprotocol for communities big and small.
- [favs.blue](https://favs.blue) - See any Bluesky account's most popular posts.
- [Flux](https://fluxapp.blue) - A calm, beautiful Bluesky client app for iOS
- [GainForest](https://gainforest.earth) - Protecting and restoring Earth's forests with transparent conservation data.
- [Germ Network](https://germnetwork.com) - Share what you want to, when you need to, on Germ DM.
- [Graze](https://graze.social) - Build custom social feeds. Grow your audience. Keep the revenue. No code required.
- [Kimbia](https://kimbia.app) - Your training journal. Yours, forever.
- [kipclip](https://kipclip.com) - Save and organize your bookmarks. Free, open, and your data stays yours.
- [Margin](https://margin.at) - Write in the margins of the web. Annotate any URL with AT Protocol.
- [Open Market](https://openmkt.app) - Browse local listings on Open Market. Find great deals on items for sale in your area without fees or middlemen.
- [pckt.blog](https://pckt.blog) - A distraction-free space to write and share your story. Just you, and your words.
- [PDS MOOver](https://pds.dad) - ATProto tools for PDS migrations and backups
- [PDSls](https://pds.ls) - Browse the public data on atproto
- [plyr.fm](https://plyr.fm) - audio streaming app
- [Semble](https://semble.so) - Social knowledge network for your research trails
- [Squire](https://squire.guide) - the task-sorting assistant for the modern adventuring knight
- [Stream.place](https://stream.place) - Open Source Livestreaming on the AT Protocol
- [Tracker - Manager for Bluesky](https://blueskytracker.app) - Track & Manage in real time your network. The must have companion app for Bluesky.
- [Winesky](https://winesky.app) - Your personal AI sommelier and wine cellar manager.
- [Witchsky](https://witchsky.app) - Bluesky app with some witchin' additions 💫
  <!-- AUTOGENERATION_END: clients -->

## 🌍 Community & Ecosystem

Forums, discussion boards, and social accounts where developers and enthusiasts gather to shape the future of the protocol.

- [Bluesky Developer GitHub Discussions](https://github.com/bluesky-social/atproto/discussions) - Core protocol decisions and Q&A.
- [@atproto.com (Bluesky)](https://bsky.app/profile/atproto.com) - The official protocol account for announcements.
- [Fediverse vs Atproto Bridging](https://fed.brid.gy/) - Community forums discussing ActivityPub interoperability.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. 

This repository uses a hybrid approach:

- **Curated Top Picks:** Essential, official, or highly notable projects are manually added above the automated sections.
- **Automated Ecosystem:** The broader ecosystem is discovered via GitHub topics and App Store metadata, updating daily.

**How to add your project:**

- If you believe your project belongs in the manual **Curated Top Picks**, submit a Pull Request modifying the static text in `README.md`.
- To be included in the **Automated Ecosystem**, ensure your GitHub repository has the `atproto` topic (or relevant language tags) and a valid description. It will automatically be picked up in the next run!

## 📄 License

Made with ❤️ by Felix  
[License MIT](./LICENSE)
