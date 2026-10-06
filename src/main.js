const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const dbPath = () => path.join(app.getPath('userData'), 'library.json');
const running = new Map(); // id -> start timestamp

function load() {
  try { return JSON.parse(fs.readFileSync(dbPath(), 'utf8')); } catch { return { games: [] }; }
}
function save(db) { fs.writeFileSync(dbPath(), JSON.stringify(db, null, 2)); }

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1100, height: 700, minWidth: 800, minHeight: 500,
    backgroundColor: '#0e1117',
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}

function emitState() {
  win && win.webContents.send('running', [...running.keys()]);
}

ipcMain.handle('games:list', () => load().games);

ipcMain.handle('games:add', async () => {
  const isMac = process.platform === 'darwin';
  const res = await dialog.showOpenDialog(win, {
    title: 'Choose a game',
    defaultPath: isMac ? '/Applications' : undefined,
    properties: ['openFile', ...(isMac ? ['treatPackageAsDirectory'] : [])].filter(p => p !== 'treatPackageAsDirectory'),
    filters: isMac ? [{ name: 'Applications', extensions: ['app'] }]
      : [{ name: 'Executables', extensions: ['exe', 'bat', 'sh', 'AppImage'] }]
  });
  if (res.canceled || !res.filePaths[0]) return null;
  const p = res.filePaths[0];
  const db = load();
  if (db.games.some(g => g.path === p)) return db.games;
  const name = path.basename(p).replace(/\.(app|exe|bat|sh|AppImage)$/i, '');
  db.games.push({ id: crypto.randomUUID(), name, path: p, playtime: 0, lastPlayed: null, added: Date.now() });
  save(db);
  return db.games;
});

ipcMain.handle('games:remove', (_, id) => {
  const db = load();
  db.games = db.games.filter(g => g.id !== id);
  save(db);
  return db.games;
});

ipcMain.handle('games:rename', (_, id, name) => {
  const db = load();
  const g = db.games.find(g => g.id === id);
  if (g && name.trim()) g.name = name.trim();
  save(db);
  return db.games;
});

ipcMain.handle('games:launch', (_, id) => {
  if (running.has(id)) return { ok: false, error: 'Already running' };
  const db = load();
  const game = db.games.find(g => g.id === id);
  if (!game) return { ok: false, error: 'Not found' };
  if (!fs.existsSync(game.path)) return { ok: false, error: 'File not found — was it moved or uninstalled?' };

  const isApp = game.path.endsWith('.app');
  const child = isApp
    ? spawn('open', ['-W', '-n', game.path], { stdio: 'ignore' })
    : spawn(game.path, [], { cwd: path.dirname(game.path), stdio: 'ignore', detached: true });

  running.set(id, Date.now());
  emitState();

  const finish = () => {
    const start = running.get(id);
    if (!start) return;
    running.delete(id);
    const db2 = load();
    const g = db2.games.find(g => g.id === id);
    if (g) {
      g.playtime += Math.round((Date.now() - start) / 1000);
      g.lastPlayed = Date.now();
      save(db2);
    }
    emitState();
    win && win.webContents.send('games:updated', db2.games);
  };
  child.on('exit', finish);
  child.on('error', finish);
  return { ok: true };
});

ipcMain.handle('shell:reveal', (_, p) => shell.showItemInFolder(p));

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => BrowserWindow.getAllWindows().length === 0 && createWindow());
});
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit());
