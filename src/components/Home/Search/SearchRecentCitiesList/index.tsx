import strings from '@shared/constants/strings';
import useCityAndPageHandler from '@@/Home/shared/useCityAndPageHandler';
import { ClassNameProp } from '@shared/types/general';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import onKeyDownEnter from '@shared/utilities/onKeyDownEnter';
import recentCityStorage from '@/storage/recentCities';

import styles from './searchRecentCitiesList.module.scss';

export default function SearchRecentCitiesList({ className }: ClassNameProp) {
  const [recentCities, setRecentCities] = useState<string[]>([]);
  const { showWeatherForecast } = useCityAndPageHandler();

  function handleCitySelected(recentCity: string) {
    showWeatherForecast(recentCity);
  }

  useEffect(() => {
    const recentCitiesOfStorage = recentCityStorage.get();

    setRecentCities(recentCitiesOfStorage);
  }, []);

  if (!recentCities.length) return null;

  const recentCitiesElems = recentCities.map((recentCity) => {
    const handleCurrentCitySelected = () => handleCitySelected(recentCity);

    return (
      <div
        key={recentCity}
        tabIndex={0}
        role="button"
        onClick={() => handleCitySelected(recentCity)}
        onKeyDown={(e) => onKeyDownEnter(e, handleCurrentCitySelected)}
        className={styles.SearchRecentCitiesList__item}
      >
        {recentCity}
      </div>
    );
  });

  return (
    <div className={classNames(styles.SearchRecentCitiesList, className)}>
      <header className={styles.SearchRecentCitiesList__header}>
        {strings.RECENT_CITIES_TITLE}
      </header>

      <div className={styles.SearchRecentCitiesList__listWrapper}>
        {recentCitiesElems}
      </div>
    </div>
  );
}
