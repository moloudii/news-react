// See the Electron documentation for details on how to use preload scripts:

import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("api", {
  ping: () => "pong",
});
