import Button from '@shared/components/Button';
import FormItem from '@shared/components/FormItem';
import Input from '@shared/components/Input';
import strings from '@shared/constants/strings';
import { FormEvent, useState } from 'react';
import Image from 'next/image';
import Card from '@shared/components/Card';
import styles from './Search.module.scss';

import weatherImage from './assets/weather.svg';
import weatherAPI from '@/api/weather';
import useCityAndPageHandler from '../shared/useCityAndPageHandler';
import currentCityStorage from '@/storage/currentCity';
import recentCityStorage from '@/storage/recentCities';
import SearchRecentCitiesList from './SearchRecentCitiesList';

export default function Search() {
  const [city, setCity] = useState('');
  const { isLoading, refetch, error } = weatherAPI.useGet5DayForecast(
    { city },
    { enabled: false, retry: false },
  );
  const { showWeatherForecast } = useCityAndPageHandler();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    refetch().then((res) => {
      if (res.error) return;

      // Add to current city of the storage
      currentCityStorage.change(city);
      recentCityStorage.add(city);

      // City Exists
      showWeatherForecast(city);
    });
  }

  const errorElem = error
    ? <div className={styles.Search__error}>{error.message}</div>
    : null;

  return (
    <div className={styles.Search}>
      <div className={styles.Search__imageWrapper}>
        <Image src={weatherImage} alt="Weather" />
      </div>
      <Card className={styles.Search__box}>
        {errorElem}
        <form onSubmit={handleSubmit} className={styles.Search__form}>
          <FormItem label={strings.SEARCH_INPUT_LABEL} htmlFor="search-input">
            <Input id="search-input" value={city} onChange={setCity} placeholder={strings.SEARCH_INPUT_PLACEHOLDER} />
          </FormItem>

          <FormItem>
            <Button isLoading={isLoading} isSubmit>
              {strings.SEARCH_BUTTON_TEXT}
            </Button>
          </FormItem>
        </form>

        <SearchRecentCitiesList className={styles.Search__recentCities} />
      </Card>
    </div>
  );
}
