import Skeleton from '@shared/components/Skeleton';

import styles from './forecastWeatherInfoLoading.module.scss';

export default function ForecastWeatherInfoLoading() {
  return (
    <div className={styles.ForecastWeatherInfoLoading}>
      <Skeleton count={5} />
    </div>
  );
}
