import storage from '@services/storage';

const STORAGE_KEY = 'current-city';

function get() {
  return storage.read<string>(STORAGE_KEY);
}

function change(city: string) {
  return storage.write(STORAGE_KEY, city);
}

function remove() {
  storage.remove(STORAGE_KEY);
}

const currentCityStorage = {
  get,
  change,
  remove,
};

export default currentCityStorage;
