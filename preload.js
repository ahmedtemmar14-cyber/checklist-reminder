const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  notify: (title, body) => ipcRenderer.send('notify', { title, body })
});