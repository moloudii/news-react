// تابع ساخت پنجره دوم
export function createSecondWindow() {
  const secondWindow = new BrowserWindow({
    width: 500,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
    },
    title: "Second Window",
  });

  if (process.env.MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    // اگر dev server فعال است، صفحه دوم را با route جدا باز کن
    secondWindow.loadURL(
      process.env.MAIN_WINDOW_VITE_DEV_SERVER_URL + "/second_window.html"
    );
  } else {
    // مسیر فایل دوم در خروجی build
    secondWindow.loadFile(
      path.join(__dirname, "../renderer/main_window/index.html")
    );
  }

  secondWindow.webContents.openDevTools();
  return secondWindow;
}
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
