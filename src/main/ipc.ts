import { ipcMain } from "electron";
import { IPC } from "../shared/constants/ipc";
import type { FetchAllDocumentsResponse } from "../types/ipc";

ipcMain.handle(IPC.DOCUMENTS.FETCH_ALL, async (): Promise<FetchAllDocumentsResponse> => {
  return {
    data: [
      {
        id: '1',
        title: 'First Document',
        content: 'Hello, world!'
      },
      {
        id: '2',
        title: 'Second Document',
        content: 'Hello, world!'
      },
      {
        id: '3',
        title: 'Third Document',
        content: 'Hello, world!'
      },
      {
        id: '4',
        title: 'Fourth Document',
        content: 'Hello, world!'
      },
    ]
  }
})



