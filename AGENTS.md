# AGENTS.md

- Pure static front-end (index.html, styles.css, app.js). No build, no backend, no secrets.
- Dev: `docker compose -f docker-compose.base44.yml up -d` runs `live-server` (via npx, fetched on first start) on port 3000 with the repo bind-mounted; edits auto-reload the browser.
- All sample data is hard-coded at the top of `app.js` (`GAMES`, `NEWS`, `FRIENDS`, `STORE`).
- Verify: `curl -s localhost:3000/ | grep NEXUS`, then check the Library/Store/News tabs render in the preview.
