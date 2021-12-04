import Skeleton from '@shared/components/Skeleton';

import styles from './forecastDaysLoading.module.scss';

export default function ForecastDaysLoading() {
  return (
    <>
      <div className={styles.ForecastDaysLoading__tabItemsWrapper}>
        <Skeleton className={styles.ForecastDaysLoading__tabItem} />
        <Skeleton className={styles.ForecastDaysLoading__tabItem} />
        <Skeleton className={styles.ForecastDaysLoading__tabItem} />
        <Skeleton className={styles.ForecastDaysLoading__tabItem} />
        <Skeleton className={styles.ForecastDaysLoading__tabItem} />
      </div>

      <div className={styles.ForecastDaysLoading__hourItemsWrapper}>
        <Skeleton className={styles.ForecastDaysLoading__hourItem} />
        <Skeleton className={styles.ForecastDaysLoading__hourItem} />
        <Skeleton className={styles.ForecastDaysLoading__hourItem} />
        <Skeleton className={styles.ForecastDaysLoading__hourItem} />
        <Skeleton className={styles.ForecastDaysLoading__hourItem} />
      </div>
    </>
  );
}
