# Development notes

- This is a static frontend, not a fullstack service. No database, migrations, external credentials or dependency installation is needed.
- Base44 serves the bind-mounted checkout directly through Python's HTTP server on port 3000. There is no compiled bundle. Files are read fresh per request; refresh the preview after edits because there is no browser HMR.
- Verify with `docker compose -f docker-compose.base44.yml ps`, `curl -fsS http://localhost:3000/`, and browser checks. There is no automated test runner configured.
- The standalone testing button is isolated in `countdown.js` and `countdown.css`, outside Nexus's stage rendering. Its countdown uses a monotonic deadline to avoid interval drift; closing the native dialog cancels it, and pressing again starts a fresh 30 seconds.
