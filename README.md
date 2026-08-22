# Playlist Pass

[![pages](https://img.shields.io/badge/live-Playlist_Pass-f97316)](https://baditaflorin.github.io/mesh-playlist-pass/)
[![license](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

> A browser-local shared listening queue for passing the next pick between friends.

**Live → https://baditaflorin.github.io/mesh-playlist-pass/**

**Source → https://github.com/baditaflorin/mesh-playlist-pass**

Playlist Pass is a rootless-computing, peer-to-peer listening queue. Add a song
title or link; everyone in the same room sees the queue without an app backend.
Each person can remove their own picks.

## Quickstart

Open the live URL on two devices and use the same room in the settings drawer.

For local development, place this repository next to `mesh-common`:

```bash
git clone https://github.com/baditaflorin/mesh-common
git clone https://github.com/baditaflorin/mesh-playlist-pass
cd mesh-playlist-pass
npm install
npm run dev
```

## Privacy

Everything submitted to a room is visible to the people in that room. Track
titles are held in the Yjs mesh, not a Playlist Pass server. The room link is
the access control: share it deliberately. Read the detailed policy in
[`docs/privacy.md`](docs/privacy.md).

## Checks and deployment

```bash
npm run fmt:check
npm run typecheck
npm run test:unit
npm run smoke
```

GitHub Pages serves the committed `docs/` folder from `main`. Woodpecker runs
the same verification commands on pushes and pull requests.

## License

MIT — see [LICENSE](LICENSE).
