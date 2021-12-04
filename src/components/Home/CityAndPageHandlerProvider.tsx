import { ChildrenProp } from '@shared/types/general';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import currentCityStorage from '@/storage/currentCity';
import HomeContext, { CityAndPageHandlerContextType } from './shared/CityAndPageHandlerContext';

export default function HomeProvider({ children }: ChildrenProp) {
  const [currentCity, setCurrentCity] = useState<string | null>(null);
  const [isOnSearchPage, setIsOnSearchPage] = useState(true);

  const goOnSearchPage: CityAndPageHandlerContextType['goOnSearchPage'] = useCallback(() => {
    setIsOnSearchPage(true);
  }, [setIsOnSearchPage]);

  const showWeatherForecast: CityAndPageHandlerContextType['showWeatherForecast'] = useCallback((city) => {
    setCurrentCity(city);
    setIsOnSearchPage(false);
  }, []);

  useEffect(() => {
    const initialStorageCity = currentCityStorage.get();

    if (initialStorageCity) {
      showWeatherForecast(initialStorageCity);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const providerValue: CityAndPageHandlerContextType = useMemo(() => ({
    isOnSearchPage,
    currentCity,

    showWeatherForecast,
    goOnSearchPage,
  }), [isOnSearchPage, currentCity, showWeatherForecast, goOnSearchPage]);

  return (
    <HomeContext.Provider value={providerValue}>
      {children}
    </HomeContext.Provider>
  );
}
