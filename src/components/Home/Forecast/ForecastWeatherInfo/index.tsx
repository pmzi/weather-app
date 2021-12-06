import useCityAndPageHandler from '@@/Home/shared/useCityAndPageHandler';
import { getDateMonthDayString, getDayRelativeName } from '@shared/utilities/date';
import Image from 'next/image';
import weatherIconURL from '@shared/utilities/weatherIconURL';
import strings from '@shared/constants/strings';
import onKeyDownEnter from '@shared/utilities/onKeyDownEnter';
import forecastDtTextToDate from '@shared/utilities/forecastDtTextToDate';
import weatherAPI from '@/api/weather';
import useSelectWeatherHandler from '../shared/useSelectWeatherHandler';
import editIcon from '@/assets/icons/edit.svg';

import styles from './ForecastWeatherInfo.module.scss';
import ForecastWeatherInfoLoading from './ForecastWeatherInfoLoading';

export default function ForecastWeatherInfo() {
  const { selectedHourWeatherData } = useSelectWeatherHandler();
  const { currentCity, goOnSearchPage } = useCityAndPageHandler();
  const { data, isLoading } = weatherAPI.useGet5DayForecast({ city: currentCity as string });

  if (!selectedHourWeatherData || isLoading || !data) return <ForecastWeatherInfoLoading />;

  const selectedWeatherDataDate = forecastDtTextToDate(selectedHourWeatherData.dt_txt);
  const dayName = getDayRelativeName(selectedWeatherDataDate);
  const selectedData = getDateMonthDayString(selectedWeatherDataDate);
  const selectedLocationName = `${data.city.name},${data.city.country}`;
  const weatherIcon = selectedHourWeatherData.weather[0].icon;

  return (
    <div className={styles.ForecastWeatherInfo}>
      <div className={styles.ForecastWeatherInfo__heading}>
        <div className={styles.ForecastWeatherInfo__iconWrapper}>
          <Image alt={strings.WEATHER_ICON} width="100" height="100" src={weatherIconURL(weatherIcon)} />
        </div>
        <div className={styles.ForecastWeatherInfo__dateWrapper}>
          <span className={styles.ForecastWeatherInfo__dateDayName}>
            {dayName}
          </span>
          <span>
            {selectedData}
          </span>
        </div>
      </div>

      <div className={styles.ForecastWeatherInfo__info}>
        <div className={styles.ForecastWeatherInfo__degree}>
          <span className={styles.ForecastWeatherInfo__degreeValue}>
            {Math.floor(selectedHourWeatherData.main.temp)}
          </span>
          <span className={styles.ForecastWeatherInfo__degreeUnit}>
            °C
          </span>
        </div>
        <div className={styles.ForecastWeatherInfo__location}>
          {selectedLocationName}

          <div
            role="button"
            tabIndex={0}
            onKeyDown={(e) => onKeyDownEnter(e, goOnSearchPage)}
            onClick={goOnSearchPage}
            className={styles.ForecastWeatherInfo__editIcon}
          >
            <Image src={editIcon} alt={strings.EDIT_LOCATION} />
          </div>
        </div>
      </div>
    </div>
  );
}
