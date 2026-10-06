/* ===========================================================
   Nexus — a front-end demo of a game hub.
   Everything here is mock data: nothing is installed or launched.
   =========================================================== */

const GAMES = [
  { id:'shadowreach', name:'Shadowreach', sub:'Age of Ash', studio:'Ninefold Studios', genre:'Action RPG',
    tag:'Descend into the ruined kingdom of Vael and carve your legend from its ashes. Season 4 is live now.',
    c:['#b4243f','#6a1b9a','#2d0b3f'], glyph:'⚔', state:'ready', playtime:8520, last:'2 hours ago',
    version:'4.2.1', size:'86.4 GB', players:'412K', rating:'92' },

  { id:'starfall', name:'Starfall', sub:'Tactics', studio:'Orbital Forge', genre:'Real-Time Strategy',
    tag:'Command fleets across a dying galaxy. Every decision reshapes the front line.',
    c:['#0ea5e9','#1e40af','#0b1b3f'], glyph:'🛰', state:'ready', playtime:2280, last:'Yesterday',
    version:'2.8.0', size:'42.1 GB', players:'88K', rating:'87' },

  { id:'vanguard', name:'Vanguard', sub:'Arena', studio:'Hexline Games', genre:'Hero Shooter',
    tag:'Six-versus-six firefights with a roster of 38 vanguards. Ranked Season 11 begins Friday.',
    c:['#f97316','#db2777','#3b0d2e'], glyph:'🎯', state:'update', playtime:12660, last:'4 days ago',
    version:'11.0.3', size:'4.2 GB patch', players:'1.2M', rating:'89' },

  { id:'ironvale', name:'Ironvale', sub:'Online', studio:'Deepwater Interactive', genre:'MMORPG',
    tag:'A living world of fifteen realms. Gather your warband and claim the Hollow Throne.',
    c:['#10b981','#0f766e','#052e2b'], glyph:'🛡', state:'ready', playtime:34800, last:'Today',
    version:'7.14.2', size:'124 GB', players:'640K', rating:'94' },

  { id:'duskhollow', name:'Dusk', sub:'Hollow', studio:'Pale Lantern', genre:'Collectible Card Game',
    tag:'Build a deck from 900+ cards and outwit rivals in the manor of endless night.',
    c:['#7c3aed','#4338ca','#1e1b4b'], glyph:'🃏', state:'install', playtime:0, last:'Never',
    version:'1.9.4', size:'12.8 GB', players:'210K', rating:'85' },

  { id:'titan', name:'Titan', sub:'Protocol', studio:'Ninefold Studios', genre:'Co-op Shooter',
    tag:'Four operators. One collapsing orbital station. Extract before the core goes critical.',
    c:['#eab308','#dc2626','#3f1008'], glyph:'🤖', state:'ready', playtime:4020, last:'Last week',
    version:'3.3.7', size:'68.9 GB', players:'155K', rating:'83' },

  { id:'emberfall', name:'Ember', sub:'Fall', studio:'Cinder & Co.', genre:'Survival Craft',
    tag:'The sky is burning. Build, scavenge and survive the long winter that follows.',
    c:['#ea580c','#92400e','#2b1206'], glyph:'🔥', state:'install', playtime:0, last:'Never',
    version:'0.9.1 EA', size:'31.5 GB', players:'74K', rating:'—' },

  { id:'neondrift', name:'Neon', sub:'Drift', studio:'Afterglow Interactive', genre:'Arcade Racing',
    tag:'Chase the perfect line through rain-soaked streets and neon skylines. The midnight circuit awaits.',
    c:['#ec4899','#0891b2','#23103d'], glyph:'🏎', state:'install', playtime:0, last:'Never',
    version:'2.1.0', size:'28.6 GB', players:'96K', rating:'88' },

  { id:'frostbound', name:'Frostbound', sub:'Expedition', studio:'Northstar Games', genre:'Survival Adventure',
    tag:'Lead an expedition beyond the frozen frontier. Shelter your crew and uncover what sleeps beneath the ice.',
    c:['#38bdf8','#6366f1','#10233f'], glyph:'❄', state:'install', playtime:0, last:'Never',
    version:'1.4.2', size:'36.2 GB', players:'52K', rating:'86' },

  { id:'clockwork', name:'Clockwork', sub:'Rebellion', studio:'Brass Lantern', genre:'Roguelike',
    tag:'Rewire your arsenal and battle through a mechanical city that rebuilds itself after every run.',
    c:['#d97706','#be123c','#32150b'], glyph:'⚙', state:'install', playtime:0, last:'Never',
    version:'1.2.5', size:'8.4 GB', players:'43K', rating:'91' },

  { id:'tidelands', name:'Tidelands', sub:'New Horizons', studio:'Coral Cove Studio', genre:'Cozy Simulation',
    tag:'Restore a seaside village, tend your island garden and sail toward a new discovery with every tide.',
    c:['#14b8a6','#0284c7','#073b42'], glyph:'🌊', state:'install', playtime:0, last:'Never',
    version:'1.6.0', size:'14.7 GB', players:'118K', rating:'90' },

  { id:'voidrunner', name:'Voidrunner', sub:'Deep Space', studio:'Parallax Works', genre:'Space Exploration',
    tag:'Chart forgotten star systems, upgrade your ship and follow a mysterious signal beyond known space.',
    c:['#8b5cf6','#2563eb','#171039'], glyph:'🚀', state:'install', playtime:0, last:'Never',
    version:'3.0.1', size:'57.3 GB', players:'132K', rating:'89' },

  { id:'wildcrest', name:'Wildcrest', sub:'Kingdoms', studio:'Oak & Stone', genre:'City Builder',
    tag:'Turn a woodland outpost into a thriving kingdom. Balance trade, nature and the needs of your people.',
    c:['#65a30d','#0f766e','#152d14'], glyph:'🏰', state:'install', playtime:0, last:'Never',
    version:'2.3.0', size:'22.9 GB', players:'67K', rating:'87' }
];

const NEWS = [
  { tag:'Patch Notes', game:'shadowreach', title:'Season 4: Age of Ash is live',
    body:'A new region, two classes and a reworked loot ladder arrive in the largest update yet.', when:'2 hours ago', glyph:'⚔' },
  { tag:'Esports', game:'vanguard', title:'Arena World Cup qualifiers announced',
    body:'Sixteen regions, one trophy. Open registration closes at the end of the month.', when:'Yesterday', glyph:'🏆' },
  { tag:'Free Weekend', game:'ironvale', title:'Play Ironvale free through Sunday',
    body:'All fifteen realms unlocked, with progress carrying over if you buy in.', when:'2 days ago', glyph:'🛡' },
  { tag:'Dev Blog', game:'starfall', title:'Rebuilding fleet pathfinding',
    body:'How the team cut late-game lag by 60% ahead of the 3.0 expansion.', when:'4 days ago', glyph:'🛰' },
  { tag:'Early Access', game:'emberfall', title:'Emberfall enters Early Access',
    body:'The first six biomes are open. Expect sharp edges and frequent builds.', when:'1 week ago', glyph:'🔥' },
  { tag:'Event', game:'duskhollow', title:'The Long Night returns',
    body:'A limited draft format with mirrored decks and leaderboard rewards.', when:'1 week ago', glyph:'🃏' }
];

const FRIENDS = [
  { n:'Mira_Voss',    s:'In Ironvale Online — Hollow Throne', st:'online',  playing:true,  c:['#10b981','#0f766e'] },
  { n:'kaelthorn',    s:'In Vanguard Arena — Ranked',          st:'online',  playing:true,  c:['#f97316','#db2777'] },
  { n:'Nyx',          s:'Online',                              st:'online',  playing:false, c:['#0ea5e9','#1e40af'] },
  { n:'bram.doyle',   s:'In Shadowreach',                      st:'online',  playing:true,  c:['#b4243f','#6a1b9a'] },
  { n:'Seraphine',    s:'Away — 22m',                          st:'away',    playing:false, c:['#7c3aed','#4338ca'] },
  { n:'Oddjob_99',    s:'Do not disturb',                      st:'busy',    playing:false, c:['#eab308','#dc2626'] },
  { n:'tessa.k',      s:'Last online 3h ago',                  st:'offline', playing:false, c:['#475569','#334155'] },
  { n:'Grimwald',     s:'Last online yesterday',               st:'offline', playing:false, c:['#475569','#334155'] },
  { n:'pixel_witch',  s:'Last online 2 days ago',              st:'offline', playing:false, c:['#475569','#334155'] }
];

const STORE = [
  { name:'Shadowreach: Age of Ash', price:'$39.99', note:'Expansion', c:['#b4243f','#6a1b9a'], mono:'S' },
  { name:'Vanguard Arena', price:'Free to Play', free:true, note:'Hero Shooter', c:['#f97316','#db2777'], mono:'V' },
  { name:'Ironvale Online', price:'$14.99', note:'MMORPG', c:['#10b981','#0f766e'], mono:'I' },
  { name:'Starfall Tactics', price:'$49.99', note:'Strategy', c:['#0ea5e9','#1e40af'], mono:'S' },
  { name:'Dusk Hollow', price:'Free to Play', free:true, note:'Card Game', c:['#7c3aed','#4338ca'], mono:'D' },
  { name:'Titan Protocol', price:'$29.99', note:'Co-op Shooter', c:['#eab308','#dc2626'], mono:'T' },
  { name:'Emberfall', price:'$24.99', note:'Early Access', c:['#ea580c','#92400e'], mono:'E' },
  { name:'Nexus Pass — Year 2', price:'$59.99', note:'Bundle', c:['#0062ff','#00d0ff'], mono:'N' }
];

/* ---------------- helpers ---------------- */
const $  = s => document.querySelector(s);
const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
const esc = s => String(s).replace(/[&<>"']/g, m => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));
const grad = c => `linear-gradient(140deg,${c[0]},${c[1] || c[0]})`;
const vars = c => `--c1:${c[0]};--c2:${c[1] || c[0]};--c3:${c[2] || c[1] || c[0]}`;
const hrs = min => min >= 60 ? `${Math.round(min / 60)}h` : `${min}m`;
const game = id => GAMES.find(g => g.id === id);

let view = 'library', current = GAMES[0].id, query = '';
const live = new Set();          // ids pretending to be running
const timers = new Map();        // id -> interval handles

/* ---------------- rail ---------------- */
function renderRail() {
  const rail = $('#rail');
  const q = query.trim().toLowerCase();
  const list = GAMES.filter(g => (g.name + ' ' + g.sub).toLowerCase().includes(q));
  rail.innerHTML = '';

  if (!list.length) {
    rail.append(el('div', 'rail-group', 'No matches'));
    return;
  }

  const recent = list.filter(g => g.state !== 'install');
  const vault  = list.filter(g => g.state === 'install');

  const section = (label, items) => {
    if (!items.length) return;
    rail.append(el('div', 'rail-group', label));
    items.forEach(g => {
      const b = el('button', 'g-item' + (g.id === current && view === 'library' ? ' active' : ''));
      const running = live.has(g.id);
      b.innerHTML = `
        <div class="g-ico" style="background:${grad(g.c)}">${esc(g.name[0])}</div>
        <div class="g-meta">
          <div class="g-nm">${esc(g.name)}</div>
          <div class="g-sub">${running ? 'Playing now' : esc(g.genre)}</div>
        </div>
        ${running ? '<span class="g-live"></span>'
          : g.state === 'update' ? '<span class="g-flag upd">UPDATE</span>'
          : g.state === 'install' ? '<span class="g-flag inst">GET</span>' : ''}`;
      b.onclick = () => { current = g.id; view = 'library'; syncTabs(); render(); };
      rail.append(b);
    });
  };

  section('Recently played', recent);
  section('Not installed', vault);
}

/* ---------------- stage: library ---------------- */
function libraryView() {
  const g = game(current);
  const running = live.has(g.id);
  const s = el('div');

  // hero
  s.append(el('div', 'hero', `
    <div class="hero-art" style="${vars(g.c)}">
      <span class="blob b1"></span><span class="blob b2"></span><span class="blob b3"></span>
      <span class="shard s1"></span><span class="shard s2"></span>
    </div>
    <div class="hero-inner">
      <div class="h-studio">${esc(g.studio)} <span class="pill">${esc(g.genre)}</span></div>
      <h1 class="h-title">${esc(g.name)}<em>${esc(g.sub)}</em></h1>
      <p class="h-tag">${esc(g.tag)}</p>
    </div>`));

  // action bar
  const bar = el('div', 'actionbar');
  const btn = el('button', 'btn-play');
  bar.append(btn);
  bar.append(el('button', 'btn-ghost sq', '⚙'));
  bar.append(el('button', 'btn-ghost', 'Game Settings'));
  const prog = el('div', 'ab-prog');
  bar.append(prog);
  bar.append(el('div', 'ab-spacer'));
  bar.append(el('div', 'ab-stat', `<div class="v">${hrs(g.playtime)}</div><div class="l">Played</div>`));
  bar.append(el('div', 'ab-stat', `<div class="v">${esc(g.version)}</div><div class="l">Version</div>`));
  s.append(bar);

  paintButton(btn, prog, g);

  // content
  const c = el('div', 'content');

  c.append(el('section', null, `
    <div class="sec-head"><h2>Your Stats</h2></div>
    <div class="statgrid" style="${vars(g.c)}">
      <div class="sbox"><div class="v">${hrs(g.playtime)}</div><div class="l">Time played</div></div>
      <div class="sbox"><div class="v">${esc(g.last)}</div><div class="l">Last played</div></div>
      <div class="sbox"><div class="v">${esc(g.players)}</div><div class="l">Players online</div></div>
      <div class="sbox"><div class="v">${esc(g.rating)}</div><div class="l">Critic score</div></div>
      <div class="sbox"><div class="v">${esc(g.size)}</div><div class="l">Install size</div></div>
    </div>`));

  const items = NEWS.filter(n => n.game === g.id).concat(NEWS.filter(n => n.game !== g.id)).slice(0, 3);
  const news = el('section');
  news.append(el('div', 'sec-head', `<h2>${esc(g.name)} News</h2><a href="#">View all</a>`));
  const grid = el('div', 'newsgrid');
  items.forEach(n => grid.append(newsCard(n)));
  news.append(grid);
  c.append(news);

  s.append(c);
  return s;
}

function newsCard(n) {
  const g = game(n.game) || GAMES[0];
  const b = el('button', 'ncard', `
    <div class="nthumb" style="background:${grad(g.c)}">
      <span class="ntag">${esc(n.tag)}</span>
      <span class="glyph">${n.glyph}</span>
    </div>
    <div class="nbody">
      <h4>${esc(n.title)}</h4>
      <p>${esc(n.body)}</p>
      <div class="when">${esc(n.when)} · ${esc(g.name)}</div>
    </div>`);
  b.onclick = () => toast('📰', 'Demo only', 'Article pages are not part of this mock-up.');
  return b;
}

/* ---------------- play-button state machine ---------------- */
function paintButton(btn, prog, g) {
  const running = live.has(g.id);
  btn.className = 'btn-play';
  prog.innerHTML = '';

  if (running) {
    btn.classList.add('busy');
    btn.innerHTML = `<span class="lbl"><span class="g-live"></span> RUNNING</span>`;
    prog.innerHTML = `<b>Session active</b><br>Click to stop`;
    btn.onclick = () => { stop(g.id); render(); };
    return;
  }

  const modes = {
    ready:   { cls:'',      label:'START',    work:'Launching' },
    update:  { cls:'amber', label:'UPDATE',  work:'Updating'  },
    install: { cls:'green', label:'INSTALL', work:'Installing'}
  };
  const m = modes[g.state];
  if (m.cls) btn.classList.add(m.cls);
  btn.innerHTML = `<span class="lbl">${m.label}</span>`;
  btn.onclick = () => work(g, btn, prog, m);
}

/* fake progress, then either "running" or "ready" */
function work(g, btn, prog, m) {
  const launching = g.state === 'ready';
  btn.className = 'btn-play busy';
  btn.innerHTML = `<span class="fill"></span><span class="lbl"><span class="spin"></span> ${m.work.toUpperCase()}…</span>`;
  btn.onclick = null;

  const fill = btn.querySelector('.fill');
  const total = launching ? 1600 : 4200;
  const t0 = Date.now();

  const tick = setInterval(() => {
    const p = Math.min(1, (Date.now() - t0) / total);
    fill.style.width = `${p * 100}%`;
    if (!launching) {
      const mb = (parseFloat(g.size) || 20) * 1024;
      prog.innerHTML = `<b>${Math.round(p * 100)}%</b> · ${(mb * p / 1024).toFixed(1)} GB of ${esc(g.size)}<br>${(42 + Math.random() * 18).toFixed(1)} MB/s`;
    }
    if (p < 1) return;

    clearInterval(tick);
    if (launching) {
      live.add(g.id);
      toast('🎮', `${g.name} is running`, 'Demo session started — nothing really launched.');
      start(g.id);
    } else {
      g.state = 'ready';
      toast('✅', `${g.name} is ready`, m.work === 'Updating' ? 'Update complete.' : 'Installation complete.');
    }
    render();
  }, 60);
}

/* accrue fake playtime while "running" */
function start(id) {
  stop(id, true);
  timers.set(id, setInterval(() => {
    const g = game(id);
    g.playtime += 1;
    g.last = 'Now';
    if (view === 'library' && current === id) {
      const v = document.querySelector('.ab-stat .v');
      if (v) v.textContent = hrs(g.playtime);
    }
  }, 1000));
}
function stop(id, quiet) {
  clearInterval(timers.get(id));
  timers.delete(id);
  if (!quiet && live.delete(id)) toast('⏹', `${game(id).name} closed`, `Session added to your playtime.`);
}

/* ---------------- stage: store & news ---------------- */
function storeView() {
  const s = el('div', 'content');
  s.style.paddingTop = '30px';
  s.append(el('div', 'sec-head', '<h2>Featured</h2><a href="#">Browse all</a>'));
  const grid = el('div', 'cardgrid');
  STORE.forEach(p => {
    const b = el('button', 'gcard', `
      <div class="gcard-art" style="background:${grad(p.c)}">
        <span class="mono">${esc(p.mono)}</span>
        <span class="nmw">${esc(p.name)}</span>
      </div>
      <div class="gcard-meta"><span>${esc(p.note)}</span><span class="price${p.free ? ' free' : ''}">${esc(p.price)}</span></div>`);
    b.onclick = () => toast('🛒', 'Store is a mock-up', `${p.name} — no checkout in this demo.`);
    grid.append(b);
  });
  s.append(grid);
  return s;
}

function newsView() {
  const s = el('div', 'content');
  s.style.paddingTop = '30px';
  s.append(el('div', 'sec-head', '<h2>All News</h2>'));
  const feed = el('div', 'feed');
  NEWS.forEach(n => {
    const g = game(n.game);
    const b = el('button', 'frow', `
      <div class="fart" style="background:${grad(g.c)}">${n.glyph}</div>
      <div class="fbody">
        <h4>${esc(n.title)}</h4>
        <p>${esc(n.body)}</p>
        <div class="when">${esc(n.tag)} · ${esc(g.name)} · ${esc(n.when)}</div>
      </div>`);
    b.onclick = () => toast('📰', 'Demo only', 'Article pages are not part of this mock-up.');
    feed.append(b);
  });
  s.append(feed);
  return s;
}

/* ---------------- friends ---------------- */
function renderFriends() {
  const box = $('#friends');
  box.innerHTML = '';
  const on  = FRIENDS.filter(f => f.st !== 'offline');
  const off = FRIENDS.filter(f => f.st === 'offline');
  $('#friendCount').textContent = `${on.length}/${FRIENDS.length}`;

  const group = (label, arr, dim) => {
    if (!arr.length) return;
    box.append(el('div', 'f-group', label));
    arr.forEach(f => {
      const b = el('button', 'f-item' + (dim ? ' off' : ''), `
        <div class="f-av" style="background:${grad(f.c)}">${esc(f.n[0].toUpperCase())}<span class="status ${f.st}"></span></div>
        <div class="f-meta">
          <div class="f-nm">${esc(f.n)}</div>
          <div class="f-st${f.playing ? ' playing' : ''}">${esc(f.s)}</div>
        </div>`);
      b.onclick = () => toast('💬', f.n, 'Chat is not wired up in this demo.');
      box.append(b);
    });
  };
  group(`Online — ${on.length}`, on, false);
  group(`Offline — ${off.length}`, off, true);
}

/* ---------------- toasts ---------------- */
function toast(icon, title, body) {
  const t = el('div', 'toast', `<span class="ti">${icon}</span><div><b>${esc(title)}</b><span>${esc(body)}</span></div>`);
  $('#toasts').append(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 300); }, 3400);
}

/* ---------------- render / wiring ---------------- */
function render() {
  renderRail();
  const stage = $('#stage');
  stage.scrollTop = 0;
  stage.innerHTML = '';
  stage.append(view === 'store' ? storeView() : view === 'news' ? newsView() : libraryView());
}
const syncTabs = () => document.querySelectorAll('.tab')
  .forEach(t => t.classList.toggle('active', t.dataset.view === view));

$('#tabs').addEventListener('click', e => {
  const t = e.target.closest('.tab');
  if (!t) return;
  view = t.dataset.view; syncTabs(); render();
});
$('#search').oninput = e => { query = e.target.value; renderRail(); };
$('#friendsBtn').onclick = e => {
  $('#social').classList.toggle('hide');
  e.currentTarget.classList.toggle('on', !$('#social').classList.contains('hide'));
};
$('#bellBtn').onclick = () => toast('🔔', '3 notifications', 'Season 4 is live · 2 friend requests');
$('#giftBtn').onclick = () => toast('🎁', 'Daily reward claimed', '+250 Nexus credits (not real).');
$('.rail-add').onclick = () => toast('＋', 'Add a game', 'Scanning for games is not part of this demo.');

renderFriends();
render();
toast('◈', 'Welcome to Nexus', 'A front-end demo — no games are actually installed.');
