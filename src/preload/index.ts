import { contextBridge } from "electron";

if(!process.contextIsolated){
  throw new Error('contextIsolated must be enable in the BrowserWindow');
}

try {
  contextBridge.exposeInMainWorld('context', {
    //TODO: add your context bridge methods here
  })
}catch (error) {
  console.error('preload error', error);
}
