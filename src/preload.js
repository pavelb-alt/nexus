const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('nexus', {
  list: () => ipcRenderer.invoke('games:list'),
  add: () => ipcRenderer.invoke('games:add'),
  remove: id => ipcRenderer.invoke('games:remove', id),
  rename: (id, name) => ipcRenderer.invoke('games:rename', id, name),
  launch: id => ipcRenderer.invoke('games:launch', id),
  reveal: p => ipcRenderer.invoke('shell:reveal', p),
  onRunning: cb => ipcRenderer.on('running', (_, ids) => cb(ids)),
  onUpdated: cb => ipcRenderer.on('games:updated', (_, games) => cb(games))
});
