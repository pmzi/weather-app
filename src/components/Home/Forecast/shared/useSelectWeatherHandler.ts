import { useContext } from 'react';
import SelectWeatherHandlerContext from './SelectWeatherHandlerContext';

export default function useSelectWeatherHandler() {
  const selectWeatherHandlerData = useContext(SelectWeatherHandlerContext);

  return selectWeatherHandlerData;
}
