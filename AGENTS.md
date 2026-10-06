# Agent notes

- Nexus is a dependency-free static site (`index.html`, `styles.css`, `app.js` at the repo root). No build step, no backend, no secrets.
- Base44 dev setup: `docker compose -f docker-compose.base44.yml up -d` serves the repo root with Python's `http.server` on port 3000 (the repo's own `npm start` uses 8080, which the preview does not see).
- There is no live-reload server: edits are picked up on the next request, so reload the preview after changing files.
- Verify: `curl -s localhost:3000/ | grep NEXUS`; in the browser the game rail, hero and friends panel should render from the sample data in `app.js`.
- Syntax check without a browser: `docker run --rm -v $PWD:/app -w /app node:22 node --check app.js`.
