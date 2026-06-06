const { app, BrowserWindow } = require("electron")
const path = require("path")

function createWindow() {

  const win = new BrowserWindow({
    width: 1400,
    height: 900,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  win.loadURL("http://localhost:5173/")
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})

