import { ipcMain } from "electron";
import { IPC } from "../shared/constants/ipc";
import type { FetchAllDocumentsResponse } from "../types/ipc";

ipcMain.handle(IPC.DOCUMENTS.FETCH_ALL, async (): Promise<FetchAllDocumentsResponse> => {
  return [
    {
      id: '1',
      title: 'First Document',
    },
    {
      id: '2',
      title: 'Second Document',
    },
    {
      id: '3',
      title: 'Third Document',
    },
    {
      id: '4',
      title: 'Fourth Document',
    },
  ]
})



