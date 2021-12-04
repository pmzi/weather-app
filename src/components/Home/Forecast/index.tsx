import ForecastDays from './ForecastDays';
import ForecastWeatherInfo from './ForecastWeatherInfo';

import styles from './Forecast.module.scss';
import ForecastDataProvider from './SelectWeatherHandlerProvider';

export default function Forecast() {
  return (
    <ForecastDataProvider>
      <div>
        <ForecastWeatherInfo />

        <ForecastDays className={styles.Forecast__info} />
      </div>
    </ForecastDataProvider>
  );
}
