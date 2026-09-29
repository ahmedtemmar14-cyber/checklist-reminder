const { app, BrowserWindow, Notification, ipcMain } = require('electron');
const path = require('path');

app.setAppUserModelId(app.isPackaged ? 'checklist.reminder' : process.execPath);

ipcMain.on('notify', (event, { title, body }) => {
  if (Notification.isSupported()) {
    new Notification({ title, body }).show();
  }
});

function createWindow() {
  const win = new BrowserWindow({
    width: 480,
    height: 640,
    webPreferences: { preload: path.join(__dirname, 'preload.js') }
  });
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());