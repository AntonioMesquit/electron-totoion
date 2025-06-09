import storeModule from 'electron-store';
import type { Document } from '../types/ipc';
// @ts-ignore
const Store = storeModule.default;

interface StoreType {
  documents: Record<string, Document>
}

// @ts-ignore
const store = new Store<StoreType>({
  name: 'electron-totoion',
  defaults: {
    documents: {}
  },
  clearInvalidConfig: true
});

console.log(store.path)

export default store;