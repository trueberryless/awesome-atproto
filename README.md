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
- [FiloSottile/bsky-backup-template](https://github.com/FiloSottile/bsky-backup-template) - Template repository for setting up a new ATProto repository backup using GitHub Actions.
- [indicaindependent/dispatch-line](https://github.com/indicaindependent/dispatch-line) - Autonomous prose-first one-post-a-day architecture for Bluesky — a daily self-contained conversation-starter that coins a named concept, built on measured engagement data (no engagement-bait styling).
- [pirmax/bluesky-oauth-nextjs](https://github.com/pirmax/bluesky-oauth-nextjs) - A modern, full-stack boilerplate for building web applications with Bluesky OAuth authentication using Next.js, Prisma, and PostgreSQL.
- [rdmurphy/atproto-starter-kit-deno](https://github.com/rdmurphy/atproto-starter-kit-deno) - A basic setup for interacting with Bluesky via ATProtocol written in TypeScript and Deno.
- [Spirallex/rust-pds-cloudflare](https://github.com/Spirallex/rust-pds-cloudflare) - GitHub template: deploy a Rust AT Protocol PDS (stelyph-core) to Cloudflare Workers.
  <!-- AUTOGENERATION_END: starter_kits -->

## 💻 SDKs & Libraries

Official and community-maintained client libraries for building applications across various programming languages.

### TypeScript / JavaScript

- [@atproto/api](https://github.com/bluesky-social/atproto/tree/main/packages/api) - Official TypeScript client for interacting with PDS and AppView instances.
- [@atproto/oauth-client-browser](https://github.com/bluesky-social/atproto/tree/main/packages/oauth/oauth-client-browser) - Official library for implementing AT Protocol OAuth in the browser.
  <!-- AUTOGENERATION_START: sdks_ts -->
- [atproto-os/client](https://github.com/atproto-os/client) - Bluesky & AT Protocol Web Desktop Suite based on Open Web Desktop
- [callmearta/kite](https://github.com/callmearta/kite) - a BlueSky web client
- [cameronrye/atproto-mcp](https://github.com/cameronrye/atproto-mcp) - A MCP server that gives LLMs direct access to the AT Protocol ecosystem, enabling seamless interaction with Bluesky and other AT Protocol-based social networks.
- [harveyrandall/bsky-cli](https://github.com/harveyrandall/bsky-cli) - A command-line client for Bluesky
- [lucid-softworks/akari](https://github.com/lucid-softworks/akari) - an atproto client for ios, android, and web — the next version of akari.blue
- [nDimensional/atproto-oauth-client-cloudflare-workers](https://github.com/nDimensional/atproto-oauth-client-cloudflare-workers) - ATProto OAuth Client for Cloudflare Workers
- [Nester-xyz/Connectsky](https://github.com/Nester-xyz/Connectsky) - Connectsky is a chrome extension based Bluesky / AT Proto Client with its own accessibilities!
- [olamaelcu/bibliograph](https://github.com/olamaelcu/bibliograph) - An AppView for interfacing with bibliographic information on ATProto
- [pirhoo/trotsky](https://github.com/pirhoo/trotsky) - 🔨 A type-safe Javascript library to build automation at the top of ATProto/Bluesky API.
- [seanvelasco/usky.app](https://github.com/seanvelasco/usky.app) - Web client for Bluesky using Solid.js
- [sprksocial/atp](https://github.com/sprksocial/atp) - Suite of AT Protocol TypeScript libraries built on web standards
- [trueberryless/awesome-atproto](https://github.com/trueberryless/awesome-atproto) - A curated, auto-updating list of awesome resources, apps, libraries, and developer tools for the AT Protocol (atproto).
  <!-- AUTOGENERATION_END: sdks_ts -->

### Go

- [bluesky-social/indigo](https://github.com/bluesky-social/indigo) - Official Go implementation of atproto (used for the core Relay/PDS).
  <!-- AUTOGENERATION_START: sdks_go -->
- [alyraffauf/tg](https://github.com/alyraffauf/tg) - A CLI client for Tangled, the AT Protocol git forge. Mirror.
- [anhgelus/goat-site](https://github.com/anhgelus/goat-site) - GoAT Site is a library that implements Standard.site in Go. (Mirror)
- [anhgelus/xrpc](https://github.com/anhgelus/xrpc) - Go library implementing a lightweight XRPC client for the AT Protocol. (Mirror)
- [aykhans/bsky-feedgen](https://github.com/aykhans/bsky-feedgen) - A Go-based feed generator for Bluesky, processing posts, generating a custom feed, and serving it via API.
- [charliewilco/Lexicodegen](https://github.com/charliewilco/Lexicodegen) - Generate Swift Codable models and XRPC client code from AT Protocol lexicons. 🦋
- [davhofer/botsky](https://github.com/davhofer/botsky) - A Bluesky API client in Go with useful features for writing automated bots.
  <!-- AUTOGENERATION_END: sdks_go -->

### Python

- [MarshalX/atproto](https://github.com/MarshalX/atproto) - Comprehensive, community-led Python SDK (synchronous and asynchronous).
  <!-- AUTOGENERATION_START: sdks_python -->
- [bonelifer/BlueSky-Suite](https://github.com/bonelifer/BlueSky-Suite) - A suite of Python scripts for managing your BlueSky account, including unfollowing inactive accounts, detecting grifting links, identifying suspended accounts, and more. These scripts use the atpro...
- [DavidBuchanan314/atmst](https://github.com/DavidBuchanan314/atmst) - A Python library for wrangling atproto-flavoured Merkle Search Trees
- [l0ji/bluroma-py](https://github.com/l0ji/bluroma-py) - A Pleroma-like Bluesky client
- [mnogu/chitose](https://github.com/mnogu/chitose) - Python client library for the AT Protocol (Bluesky)
- [ruggsea/bluesky-firehose-py](https://github.com/ruggsea/bluesky-firehose-py) - A Python library/CLI for collecting and archiving posts from the Bluesky social network using the Jetstream API.
- [sndcds/kulturbytes-social](https://github.com/sndcds/kulturbytes-social) - Open-source Python CLI for publishing generic JSON/API content to Facebook, Instagram, Mastodon and Bluesky.
- [tfederman/pysky](https://github.com/tfederman/pysky) - A Bluesky API library focused on quality of life application-level features
- [TomCasavant/SocialSync](https://github.com/TomCasavant/SocialSync) - Uses mastodon API to attempt to follow your Bluesky follows (via bsky.brid.gy) and Threads follows
- [truewire-dev/bluesky](https://github.com/truewire-dev/bluesky) - Typed, validated clients for Bluesky's public API and the Jetstream firehose, in Python, TypeScript and Rust. Generated by Truewire from recorded wire examples.
- [Zetaphor/pui](https://github.com/Zetaphor/pui) - A TUI client for picosky
  <!-- AUTOGENERATION_END: sdks_python -->

### Rust

- [atrium-rs/atrium](https://github.com/atrium-rs/atrium) - Rust libraries for Bluesky's AT Protocol services.
  <!-- AUTOGENERATION_START: sdks_rust -->
- [at-microcosm/microcosm-rs](https://github.com/at-microcosm/microcosm-rs) - Rust atproto crates and services for microcosm
- [enzottic/stratosphere](https://github.com/enzottic/stratosphere) - A bluesky client using the atrium API. WIP.
- [FormerLab/pgsky](https://github.com/FormerLab/pgsky) - An AT Protocol / Bluesky client implemented as a PostgreSQL extension. The database is the application
- [MarshalX/python-libipld](https://github.com/MarshalX/python-libipld) - 🏎️ Fast Python library to work with IPLD: DAG-CBOR, CID, CAR, multibase
- [metruzanca/atcrab](https://github.com/metruzanca/atcrab) - High level AT Protocol library, made for convenience.
- [mike10010100/skyauth](https://github.com/mike10010100/skyauth) - Pure safe Rust (#![forbid(unsafe_code)]) AT Protocol OAuth 2.1 client library with RFC 9449 DPoP, RFC 9126 PAR, RFC 7636 PKCE & formal mathematical verification
- [ngerakines/atproto-rs](https://github.com/ngerakines/atproto-rs) - A suite of libraries, tools, and daemons for atproto.
- [Smalls1652/atprotolib-rs](https://github.com/Smalls1652/atprotolib-rs) - Rust library for ATProtocol types
  <!-- AUTOGENERATION_END: sdks_rust -->

## 🛠 Developer Tools & CLIs

Command-line interfaces, debuggers, and utilities to streamline your development workflow and interact with the network.

- [jazware/atproto.tools](https://github.com/jazware/atproto.tools) - A looking glass for the AT Proto Firehose
- [mary-ext/boat](https://github.com/mary-ext/boat) - handy online tools for AT Protocol
  <!-- AUTOGENERATION_START: tools_cli -->
- [cosmik-network/semble](https://github.com/cosmik-network/semble) - A social knowledge tool for research trails, built on ATProto
- [ewanc26/malachite](https://github.com/ewanc26/malachite) - Malachite is a tool to import your Last.fm and Spotify listening history to the AT Protocol network using the `fm.teal.alpha.feed.play` lexicon.
- [harveyrandall/bsky-cli](https://github.com/harveyrandall/bsky-cli) - A command-line client for Bluesky
- [itaru2622/bluesky-selfhost-env](https://github.com/itaru2622/bluesky-selfhost-env) - bluesky self-hosting tool for easy deploy in anywhere.
- [mattn/bsky](https://github.com/mattn/bsky) - A cli application for bluesky social
- [nDimensional/atproto-oauth-client-cloudflare-workers](https://github.com/nDimensional/atproto-oauth-client-cloudflare-workers) - ATProto OAuth Client for Cloudflare Workers
- [notjuliet/cleanfollow-bsky](https://github.com/notjuliet/cleanfollow-bsky) - Hidden accounts unfollow tool for Bluesky
- [sprksocial/client](https://github.com/sprksocial/client) - Open Source TikTok alternative built on AT Protocol
- [usounds/Skyblur](https://github.com/usounds/Skyblur) - Spoiler Protection tool for Bluesky build with AT Protocol.
- [verdverm/atmunge](https://github.com/verdverm/atmunge) - ATProtocol tool to backfill, mirror, explore, and analyze the network
  <!-- AUTOGENERATION_END: tools_cli -->

## 🛡️ Trust, Safety & Ozone

The AT Protocol relies heavily on composable moderation. Instead of a single central authority, users and communities can subscribe to labelers and moderation services that fit their preferences.

- [bluesky-social/ozone](https://github.com/bluesky-social/ozone) - Official collaborative moderation tool and labeling service for the AT Protocol.
- [blacksky-algorithms/rsky](https://github.com/blacksky-algorithms/rsky) - An AT Protocol implementation prioritizing community safety and self-governance, written in Rust.
  <!-- AUTOGENERATION_START: ozone -->
- [bsky-watch/labeler](https://github.com/bsky-watch/labeler) - Basic ATproto labeler and a toolkit to make your own
- [david-engelmann/atproto](https://github.com/david-engelmann/atproto) - OCaml toolkit for the AT Protocol (XRPC, lexicons, repo sync, identity, AppView, Ozone)
- [eddieoz/atproto-scam-detector](https://github.com/eddieoz/atproto-scam-detector) - Crypto-Labeler is an advanced, AI-powered labeling and moderation tool dedicated to protecting the BlueSky community. By identifying and addressing crypto spammers, scammers, phishing attempts, and...
- [haileyok/phoebe](https://github.com/haileyok/phoebe) - A trust and safety agent that interacts with Osprey for investigation, real-time analysis, and prevention implementations
- [itaru2622/bluesky-selfhost-env](https://github.com/itaru2622/bluesky-selfhost-env) - bluesky self-hosting tool for easy deploy in anywhere.
- [julietshen/troposphere](https://github.com/julietshen/troposphere) - A self-hostable alternative to Ozone designed to work with Coop
- [skywatch-bsky/skywatch-automod](https://github.com/skywatch-bsky/skywatch-automod) - Skywatch Automod is the public release of automoderation software used by skywatch.blue on the Bluesky Network
- [zoedsoupe/proto_rune](https://github.com/zoedsoupe/proto_rune) - ATProtocol and Bluesky framework for Elixir, make bots, labelers, app views and more
  <!-- AUTOGENERATION_END: ozone -->

## 📜 Lexicons & Tooling

Lexicons are the schema language of the AT Protocol (similar to OpenAPI for a federated graph). These tools help you compile, validate, and build with them.

- [Lexicon Specification](https://atproto.com/specs/lexicon) - The official documentation for the Lexicon schema language.
  <!-- AUTOGENERATION_START: lexicons -->
- [ewanc26/malachite](https://github.com/ewanc26/malachite) - Malachite is a tool to import your Last.fm and Spotify listening history to the AT Protocol network using the `fm.teal.alpha.feed.play` lexicon.
- [joshlacal/Petrel](https://github.com/joshlacal/Petrel) - Swift library for the ATProtocol and Bluesky, generated from Lexicons
- [lexicon-community/lexicon](https://github.com/lexicon-community/lexicon) - An ATProtocol community Lexicon
- [marukun712/stellar](https://github.com/marukun712/stellar) - Stellarは、Blueskyの投稿に対して簡易的な絵文字リアクションを付けるための、シンプルなLexicon・仕様群です。
- [MasterJ93/ATProtoKit](https://github.com/MasterJ93/ATProtoKit) - A straightforward solution for using the AT Protocol and Bluesky, written in Swift.
- [rdmurphy/atproto-openapi-types](https://github.com/rdmurphy/atproto-openapi-types) - OpenAPI types for the AT Protocol generated according to the AT Protocol Specification by converting/translating the lexicon specs into OpenAPI types.
- [sprksocial/server](https://github.com/sprksocial/server) - Spark Social AppView Server
- [tylersayshi/prototypey](https://github.com/tylersayshi/prototypey) - atproto lexicon typescript toolkit
  <!-- AUTOGENERATION_END: lexicons -->

## 🏗 Infrastructure & Self-Hosting

Resources and implementations for running your own Personal Data Server (PDS), Relays, and AppViews.

- [bluesky-social/pds](https://github.com/bluesky-social/pds) - Official PDS (Personal Data Server) container image, compose file, and documentation.
- [atproto-relay-node](https://github.com/bluesky-social/indigo/blob/main/cmd/relay/README.md) - Documentation on how to run a full network relay (BGS).
  <!-- AUTOGENERATION_START: infrastructure -->
- [alnkesq/AppViewLite](https://github.com/alnkesq/AppViewLite) - A Bluesky appview focused on low resource consumption
- [ascorbic/cirrus](https://github.com/ascorbic/cirrus) - A single-user ATProto PDS that runs on a Cloudflare Worker
- [Automattic/wordpress-atmosphere](https://github.com/Automattic/wordpress-atmosphere) - ATmosphere connects your WordPress site to the AT Protocol network. When you publish a post, it is automatically cross-posted to Bluesky and registered as a standard.site document on your Personal ...
- [DavidBuchanan314/millipds](https://github.com/DavidBuchanan314/millipds) - A from-scratch atproto PDS implementation in Python
- [DavidBuchanan314/picopds](https://github.com/DavidBuchanan314/picopds) - A minimum viable atproto PDS for protocol experimentation purposes
- [dollspace-gay/Aurora-Prism](https://github.com/dollspace-gay/Aurora-Prism) - A third party Appview for ATproto
- [flo-bit/blento](https://github.com/flo-bit/blento) - your bento style website with data hosted on your bluesky PDS, svelte/tailwind
- [haileyok/cocoon](https://github.com/haileyok/cocoon) - An ATProtocol PDS (Personal Data Server) written in Go with  a SQLite block and blob store
- [itaru2622/bluesky-selfhost-env](https://github.com/itaru2622/bluesky-selfhost-env) - bluesky self-hosting tool for easy deploy in anywhere.
- [knotbin/airport](https://github.com/knotbin/airport) - The first ever AT Protocol PDS Migrator
  <!-- AUTOGENERATION_END: infrastructure -->

## 🌊 Firehose & Data Indexing

Tools for tapping into the global stream of AT Protocol events and building custom data indexes.

- [bluesky-social/jetstream](https://github.com/bluesky-social/jetstream) - The official, lightweight JSON firehose proxy. Essential for most app developers.
  <!-- AUTOGENERATION_START: firehose -->
- [bigmoves/quickslice](https://github.com/bigmoves/quickslice) - Auto-indexing service and GraphQL API for AT Protocol Records
- [cometsh/comet](https://github.com/cometsh/comet) - Music streaming on ATProto!
- [cometsh/drinkup](https://github.com/cometsh/drinkup) - Elixir ATProtocol firehose & subscription listener
- [hugeblank/grayhaze.live](https://github.com/hugeblank/grayhaze.live) - Live stream over ATProto
- [ImLunaHey/lunafications](https://github.com/ImLunaHey/lunafications) - Bluesky bot that DMs you when you're blocked, added to lists, or when specific accounts post
- [mackuba/skyfall](https://github.com/mackuba/skyfall) - A Ruby gem for streaming data from the Bluesky/ATProto firehose. Mirror of: https://tangled.org/mackuba.eu/skyfall
- [natepmay/hose-race](https://github.com/natepmay/hose-race) - Racing on the Bluesky firehose.
- [ruggsea/bluesky-firehose-py](https://github.com/ruggsea/bluesky-firehose-py) - A Python library/CLI for collecting and archiving posts from the Bluesky social network using the Jetstream API.
- [tomo-x7/JetstreamProxy](https://github.com/tomo-x7/JetstreamProxy) - This is a server that proxies Jetstream. When setting up multiple feed generators locally, it can reduce network traffic.
- [uabluerail/indexer](https://github.com/uabluerail/indexer) - ATproto PDS indexer
  <!-- AUTOGENERATION_END: firehose -->

## 🤖 Bots & Feed Generators

Automated agents, custom algorithm builders, and services to curate content and enhance the user experience.

- [SkyFeed](https://skyfeed.app/) - A powerful UI for visually building your own custom feeds without coding.
  <!-- AUTOGENERATION_START: bots_feeds -->
- [developerdavi/screenshot-this-bsky](https://github.com/developerdavi/screenshot-this-bsky) - A simple bot that generates a cool screenshot image for posts on Bluesky
- [ewanc26/malachite](https://github.com/ewanc26/malachite) - Malachite is a tool to import your Last.fm and Spotify listening history to the AT Protocol network using the `fm.teal.alpha.feed.play` lexicon.
- [furrylist/bsky-furry-feed](https://github.com/furrylist/bsky-furry-feed) - A BlueSky custom feed generator for furry content !
- [ImLunaHey/lunafications](https://github.com/ImLunaHey/lunafications) - Bluesky bot that DMs you when you're blocked, added to lists, or when specific accounts post
- [lwojcik/github-action-feed-to-social-media](https://github.com/lwojcik/github-action-feed-to-social-media) - Post latest RSS feed item to social media (Mastodon, Twitter, Discord, Slack, Bluesky...)
- [mackuba/blue_factory](https://github.com/mackuba/blue_factory) - A simple Ruby server using Sinatra that serves Bluesky custom feeds. Mirror of: https://tangled.org/mackuba.eu/blue_factory
- [MarshalX/bluesky-feed-generator](https://github.com/MarshalX/bluesky-feed-generator) - 🦋 Bluesky custom feed algorithms server in Python 🐍
- [mary-ext/bluesky-embed](https://github.com/mary-ext/bluesky-embed) - Custom element for embedding Bluesky posts and profile feeds
- [pirhoo/trotsky](https://github.com/pirhoo/trotsky) - 🔨 A type-safe Javascript library to build automation at the top of ATProto/Bluesky API.
- [skiniks/mta-alerts-bot](https://github.com/skiniks/mta-alerts-bot) - A Bluesky bot that monitors NYC's MTA subway service alerts and shares updates to @mtaalerts.bsky.social.
- [snarfed/granary](https://github.com/snarfed/granary) - 💬 The social web translator
- [zoedsoupe/proto_rune](https://github.com/zoedsoupe/proto_rune) - ATProtocol and Bluesky framework for Elixir, make bots, labelers, app views and more
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
- [wisp.place](https://wisp.place) - Somewhere to put your stuff. A folder becomes a website

### Games

- [AT Mot](https://atmot.herve.bzh) - Guess the 5-letter word in 6 tries!
- [math.r](https://mathr.app) - Mathr is a brain building game to improve your math calculation skills. Practice arithmetic and level up!
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

### Publishing

- [Leaflet](https://leaflet.pub) - Read and publish on the Atmosphere — social blogs, one-off posts, and more
- [Offprint](https://offprint.app) - Publishing infrastructure for the open web.
- [Standard Reader](https://standard-reader.app) - Fresh writing from the publications you follow, every day.
- [writizzy](https://writizzy.com) - The web deserves more independent publishing

### Social

- [Bridgy Fed](https://ap.brid.gy) - Bridging the new social internet
- [Spark](https://sprk.so) - Real Moments, Shared Together
- [You & Me](https://youandme.at) - Connect with people around you on the AT Protocol.

### Other

- [Anisota](https://anisota.net) - A radical yet peaceful user interface for Bluesky, ATProto, and ATmosphere-based social media
- [Ask Everything](https://askeverything.app) - Ask, answer, & explore questions about everything.
- [ATlas](https://atls.city) - Bringing the ATmosphere together
- [atpr.to](https://atpr.to) - AT Protocol URL shortener — links stored in your own PDS.
- [ATStore](https://atstore.fyi) - Find your next favorite app.
- [Beacon Bits](https://beaconbits.app) - Put your posts on the map
- [Blacksky](https://blackskyweb.xyz) - Decentralized social media built for community power, culture, and collective freedom.
- [BookHive](https://bookhive.buzz) - The social platform for book lovers
- [Boost Blue](https://boostblue.bsky.social) - Boost your Bluesky experience
- [Cartes.app](https://cartes.app) - Open source map with AT place reviews
- [Colibri](https://colibri.social) - Colibri is an open source chat platform built on the ATprotocol for communities big and small.
- [Currents](https://currents.is) - Save inspiration and curate personalized visual feeds.
- [favs.blue](https://favs.blue) - See any Bluesky account's most popular posts.
- [Flux](https://fluxapp.blue) - A calm, beautiful Bluesky client app for iOS
- [GainForest](https://gainforest.earth) - Protecting and restoring Earth's forests with transparent conservation data.
- [Germ Network](https://germnetwork.com) - Share what you want to, when you need to, on Germ DM.
- [Grain](https://grain.social) - Photography focused photo sharing platform
- [Graze](https://graze.social) - Build custom social feeds. Grow your audience. Keep the revenue. No code required.
- [Kimbia](https://kimbia.app) - Your training journal. Yours, forever.
- [kipclip](https://kipclip.com) - Save and organize your bookmarks. Free, open, and your data stays yours.
- [Margin](https://margin.at) - Write in the margins of the web. Annotate any URL with AT Protocol.
- [Open Market](https://openmkt.app) - Browse local listings on Open Market. Find great deals on items for sale in your area without fees or middlemen.
- [pckt.blog](https://pckt.blog) - A distraction-free space to write and share your story. Just you, and your words.
- [PDS MOOver](https://pds.dad) - ATProto tools for PDS migrations and backups
- [PDSls](https://pds.ls) - Browse the public data on atproto
- [plyr.fm](https://plyr.fm) - start typing to search across all content
- [postgame](https://postgame.at) - Track and manage your gaming backlog
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
