import storeModule from 'electron-store';
// @ts-ignore
const Store = storeModule.default;

interface StoreType {
  documents: Record<string, any>
}

// @ts-ignore
const store = new Store<StoreType>({
  name: 'electron-totoion',
  defaults: {
    documents: {}
  },
  clearInvalidConfig: true
});


export default store;