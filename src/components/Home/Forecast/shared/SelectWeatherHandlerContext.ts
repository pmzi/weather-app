import { DayWeatherInfo } from '@shared/types/open-weather';
import { createContext } from 'react';

export interface SelectWeatherHandlerContextType {
  selectedHourWeatherData: DayWeatherInfo | null;
  setSelectedHourWeatherData: (data: DayWeatherInfo | null) => void;
}

const SelectWeatherHandlerContext = createContext<SelectWeatherHandlerContextType>({
  selectedHourWeatherData: null,
  setSelectedHourWeatherData: () => {},
});

export default SelectWeatherHandlerContext;
