import { useContext } from 'react';
import CityAndPageHandlerContext from './CityAndPageHandlerContext';

export default function useCityAndPageHandler() {
  const cityAndPageHandler = useContext(CityAndPageHandlerContext);

  return cityAndPageHandler;
}
