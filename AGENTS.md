# Sandbox development

- The preview requires `docker compose -f docker-compose.base44.yml up -d`; the README's default server uses port 8080, not the preview's port 3000.
- The Base44 service serves bind-mounted source using Python livereload, watching index.html, styles.css and app.js. Its pinned tooling dependencies live in .base44/requirements.txt; no application build or Node dependencies are needed.
- No secrets, database, migrations or seed steps are required. All game state is an in-memory demo and resets on reload; do not mistake fake install/launch actions for backend operations.
- Verify with `curl -fsS http://localhost:3000/`, Compose health status, and a browser check that the Library hero and game rail render. `curl -fsS http://localhost:3000/app.js | cmp - app.js` confirms the served script matches the checkout.
