let games = [], running = new Set(), selected = 'home', query = '', error = '';
const $ = s => document.querySelector(s);

const hue = s => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 360, 7);
const grad = n => `linear-gradient(135deg, hsl(${hue(n)} 65% 42%), hsl(${(hue(n) + 50) % 360} 70% 28%))`;
const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmtTime = sec => sec < 60 ? `${sec}s` : sec < 3600 ? `${Math.floor(sec / 60)}m` : `${(sec / 3600).toFixed(1)}h`;
const fmtDate = t => t ? new Date(t).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : 'Never';

function renderList() {
  const q = query.toLowerCase();
  const items = games.filter(g => g.name.toLowerCase().includes(q))
    .sort((a, b) => a.name.localeCompare(b.name));
  $('#list').innerHTML =
    `<div class="item nav ${selected === 'home' ? 'active' : ''}" data-id="home"><div class="icon" style="background:#2a3344">⌂</div><span class="nm">Home</span></div>` +
    items.map(g => `<div class="item ${selected === g.id ? 'active' : ''}" data-id="${g.id}">
      <div class="icon" style="background:${grad(g.name)}">${esc(g.name[0].toUpperCase())}</div>
      <span class="nm">${esc(g.name)}</span>${running.has(g.id) ? '<span class="dot"></span>' : ''}</div>`).join('');
}

function renderMain() {
  const m = $('#main');
  const g = games.find(g => g.id === selected);
  if (!g) return renderHome(m);
  const isRun = running.has(g.id);
  m.innerHTML = `
    <div class="hero" style="background:${grad(g.name)}"><h1>${esc(g.name)}</h1></div>
    <div class="body">
      <div class="actions">
        <button class="play" id="play" ${isRun ? 'disabled' : ''}>${isRun ? 'RUNNING' : 'PLAY'}</button>
        <button class="ghost" id="rename">Rename</button>
        <button class="ghost" id="reveal">Show in Finder</button>
        <button class="ghost danger" id="remove">Remove</button>
        <span class="err">${esc(error)}</span>
      </div>
      <div class="stats">
        <div class="stat"><div class="v">${fmtTime(g.playtime)}</div><div class="l">Time played</div></div>
        <div class="stat"><div class="v">${fmtDate(g.lastPlayed)}</div><div class="l">Last played</div></div>
        <div class="stat"><div class="v">${fmtDate(g.added)}</div><div class="l">Added</div></div>
      </div>
      <div class="path">${esc(g.path)}</div>
    </div>`;
  $('#play').onclick = async () => { error = ''; const r = await nexus.launch(g.id); if (!r.ok) { error = r.error; renderMain(); } };
  $('#reveal').onclick = () => nexus.reveal(g.path);
  $('#remove').onclick = async () => { if (confirm(`Remove "${g.name}" from Nexus? (The game itself is not deleted.)`)) { games = await nexus.remove(g.id); selected = 'home'; render(); } };
  $('#rename').onclick = async () => { const n = prompt('Rename game', g.name); if (n) { games = await nexus.rename(g.id, n); render(); } };
}

function renderHome(m) {
  if (!games.length) {
    m.innerHTML = `<div class="empty"><h1>Welcome to Nexus</h1><p>Your games, all in one place.<br>Click “Add Game” to get started.</p></div>`;
    return;
  }
  const recent = [...games].filter(g => g.lastPlayed).sort((a, b) => b.lastPlayed - a.lastPlayed).slice(0, 6);
  const total = games.reduce((s, g) => s + g.playtime, 0);
  const card = g => `<div class="card" data-id="${g.id}" style="background:${grad(g.name)}"><div class="big">${esc(g.name[0].toUpperCase())}</div><div class="t">${esc(g.name)}</div><div class="s">${fmtTime(g.playtime)} played</div></div>`;
  m.innerHTML = `<div class="hero" style="background:linear-gradient(135deg,#1f3a8a,#4c1d95)"><h1>Welcome back</h1></div>
    <div class="body">
      <div class="stats" style="margin-bottom:28px">
        <div class="stat"><div class="v">${games.length}</div><div class="l">Games</div></div>
        <div class="stat"><div class="v">${fmtTime(total)}</div><div class="l">Total playtime</div></div>
      </div>
      ${recent.length ? `<h2>Recently played</h2><div class="grid" style="margin-bottom:28px">${recent.map(card).join('')}</div>` : ''}
      <h2>Library</h2><div class="grid">${games.map(card).join('')}</div>
    </div>`;
}

function render() { renderList(); renderMain(); }

document.addEventListener('click', e => {
  const el = e.target.closest('[data-id]');
  if (el) { selected = el.dataset.id; error = ''; render(); }
});
$('#search').oninput = e => { query = e.target.value; renderList(); };
$('#add').onclick = async () => {
  const res = await nexus.add();
  if (res) { games = res; selected = games[games.length - 1].id; render(); }
};
nexus.onRunning(ids => { running = new Set(ids); render(); });
nexus.onUpdated(g => { games = g; render(); });

nexus.list().then(g => { games = g; render(); });
