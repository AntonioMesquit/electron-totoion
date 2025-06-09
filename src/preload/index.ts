import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI, ElectronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  fetchDocuments: (): Promise<Array<{ id: string, title: string }>> => {
    return ipcRenderer.invoke('fetch-documents')
  }
}

declare global {
  interface Window {
    electron: ElectronAPI,
    api: typeof api,
  }
}



if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
