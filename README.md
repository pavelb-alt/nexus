# Nexus

A **web-based game hub** demo in the spirit of Battle.net — built with plain HTML, CSS and
JavaScript. No build step, no dependencies, no backend.

> This is a front-end mock-up. Nothing is really installed or launched: the library, friends,
> store and news are all hard-coded sample data, and the install/launch progress bars are fake
> timers.

## Running it

Just open `index.html` in a browser. Or serve it:

```bash
npm start     # http://localhost:8080
```

## What's in the demo

- **Library** — a game rail with search, a full-bleed hero banner per game (key art drawn
  entirely in CSS), stat boxes and a per-game news feed.
- **Play / Update / Install** — buttons run a fake progress bar. Launching a game flips it to a
  "running" session that accrues playtime live until you stop it.
- **Store** — a grid of featured cover cards with prices.
- **News** — a combined article feed.
- **Friends** — online/offline roster with presence and "in game" status; toggle it from the
  top bar.
- Toast notifications, and a responsive layout that collapses the friends panel and the game
  rail on smaller screens.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page shell — top bar, rail, stage, friends panel |
| `styles.css` | Design tokens, layout, CSS-only key art, responsive rules |
| `app.js` | Sample data, rendering, and the fake launch/install state machine |

## Customising

All sample content lives in the arrays at the top of `app.js` — `GAMES`, `NEWS`, `FRIENDS` and
`STORE`. Each game carries a three-colour palette in `c`, which drives its hero art, icon,
cover card and stat accents.
