import { ipcMain } from "electron";

ipcMain.handle('fetch-documents', async () => {
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



