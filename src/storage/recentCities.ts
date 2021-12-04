import storage from '@services/storage';

const STORAGE_KEY = 'recent-cities';

function get() {
  return storage.read<string[]>(STORAGE_KEY) || [];
}

function add(city: string) {
  const recentCities = get();

  const recentCitiesWithoutCurrentCity = recentCities.filter(
    (recentCity) => recentCity.toLowerCase() !== city.toLowerCase(),
  );

  recentCitiesWithoutCurrentCity.unshift(city);

  storage.write(STORAGE_KEY, recentCitiesWithoutCurrentCity);
}

const recentCityStorage = {
  get,
  add,
};

export default recentCityStorage;
