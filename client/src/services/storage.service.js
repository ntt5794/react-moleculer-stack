import {storageType} from '../configs/app';
class Storage {
    _storage = null;
    constructor(options = { type: storageType }) {
        this.options = options;
        this._storage = this.selectStorage(this.options.type);
    }
    selectStorage = (type) => type === 'local' ? localStorage : sessionStorage;
    saveItem = (key, data) => this._storage.setItem(key, data);
    removeItem = (key) => this._storage.removeItem(key);
    clearStorage = () => this._storage.clear();
    getItem = (key) => this._storage.getItem(key);
    setItem = (key, data) => this._storage.setItem(key,data);
}

export default Storage;
export const storage = new Storage();