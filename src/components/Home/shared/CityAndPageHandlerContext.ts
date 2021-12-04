import { createContext } from 'react';

export interface CityAndPageHandlerContextType {
  currentCity: string | null;
  isOnSearchPage: boolean;

  goOnSearchPage: () => void;
  showWeatherForecast: (city: string) => void;
}

const CityAndPageHandlerContext = createContext<CityAndPageHandlerContextType>({
  currentCity: null,
  isOnSearchPage: true,

  goOnSearchPage: () => {},
  showWeatherForecast: () => {},
});

export default CityAndPageHandlerContext;
