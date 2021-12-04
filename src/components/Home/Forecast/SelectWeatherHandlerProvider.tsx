import { ChildrenProp } from '@shared/types/general';
import { useMemo, useState } from 'react';
import ForecastDataContext, { SelectWeatherHandlerContextType } from './shared/SelectWeatherHandlerContext';

export default function ForecastDataProvider({ children }: ChildrenProp) {
  const [selectedHourWeatherData, setSelectedHourWeatherData] = useState<SelectWeatherHandlerContextType['selectedHourWeatherData']>(null);

  const forecastData = useMemo(() => ({
    selectedHourWeatherData,
    setSelectedHourWeatherData,
  }), [selectedHourWeatherData]);

  return (
    <ForecastDataContext.Provider value={forecastData}>
      {children}
    </ForecastDataContext.Provider>
  );
}
