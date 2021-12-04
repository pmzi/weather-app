import Forecast from './Forecast';
import Search from './Search';
import useCityAndPageHandler from './shared/useCityAndPageHandler';

export default function HomeWrapper() {
  const { isOnSearchPage } = useCityAndPageHandler();

  return isOnSearchPage ? <Search /> : <Forecast />;
}
