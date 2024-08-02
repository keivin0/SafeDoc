const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, "/assets/IconaSafeDoc.ico"),
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "/dist/doc/browser/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
