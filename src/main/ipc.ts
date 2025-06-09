import { ipcMain } from "electron";
import { IPC } from "../shared/constants/ipc";
import { randomUUID } from "crypto";
import type { CreateDocumentResponse, DeleteDocumentRequest, FetchAllDocumentsResponse, FetchDocumentRequest, FetchDocumentResponse, SaveDocumentRequest } from "../types/ipc";
import store from "./store";

ipcMain.handle(IPC.DOCUMENTS.FETCH_ALL, async (): Promise<FetchAllDocumentsResponse> => {
  return {
    data: Object.values(store.get('documents'))
  }
})
ipcMain.handle(
  IPC.DOCUMENTS.FETCH,
  async (_, { id } : FetchDocumentRequest): Promise<FetchDocumentResponse> => {
   const document = store.get(`documents.${id}`)
    return {
     data: document
  }
})
ipcMain.handle(
  IPC.DOCUMENTS.CREATE,
  async (): Promise<CreateDocumentResponse> => {
  const id = randomUUID()
  const document =  {
    id,
    title: 'Sem titulo',
    content: ''
  }
  store.set(`documents.${id}`, document)
    return {
    data: document
  }
})
ipcMain.handle(
  IPC.DOCUMENTS.SAVE,
  async (_, {id, title, content} : SaveDocumentRequest): Promise<void> => {
    store.set(`documents.${id}`, {id, title, content})
  }
)
ipcMain.handle(
  IPC.DOCUMENTS.DELETE,
  async (_, {id} : DeleteDocumentRequest): Promise<void> => {
    store.delete(`documents.${id}`)
  }
)


