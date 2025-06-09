import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI, ElectronAPI } from '@electron-toolkit/preload'
import { IPC } from '../shared/constants/ipc'
import type { FetchAllDocumentsResponse } from '../types/ipc'

// Custom APIs for renderer
const api = {
  fetchDocuments: (): Promise<FetchAllDocumentsResponse> => {
    return ipcRenderer.invoke(IPC.DOCUMENTS.FETCH_ALL)
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
