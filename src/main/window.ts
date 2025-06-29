// منطق ساخت پنجره اصلی Electron
import { BrowserWindow } from "electron";
import path from "node:path";

export function createMainWindow() {
  console.log("PRELOAD PATH:", path.join(__dirname, "../preload/index.js"));
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
    },
  });

  if (process.env.MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    // مسیر صحیح برای index.html در ساختار جدید
    mainWindow.loadFile(
      path.join(__dirname, "../renderer/main_window/index.html")
    );
  }

  mainWindow.webContents.openDevTools();
  return mainWindow;
}
