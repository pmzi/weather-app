import { DayWeatherInfo } from '@shared/types/open-weather';
import { getHourWithUnit } from '@shared/utilities/date';
import ForecastDaysHoursItem from './ForecastDaysHoursItem';

import styles from './forecastDaysHours.module.scss';
import useSelectWeatherHandler from '../../shared/useSelectWeatherHandler';

interface ForecastDaysHoursProps {
  hoursData: DayWeatherInfo[];
}

export default function ForecastDaysHours({ hoursData }: ForecastDaysHoursProps) {
  const { setSelectedHourWeatherData, selectedHourWeatherData } = useSelectWeatherHandler();
  const content = hoursData.map((hourData) => {
    const { main: { temp }, dt, weather: [{ icon }] } = hourData;

    const date = new Date(dt * 1000);
    const hour = getHourWithUnit(date);

    const isActive = selectedHourWeatherData?.dt === dt;

    return (
      <ForecastDaysHoursItem
        onSelect={() => setSelectedHourWeatherData(hourData)}
        key={dt}
        hour={hour}
        degree={Math.floor(temp)}
        icon={icon}
        isActive={isActive}
        className={styles.ForecastDaysHours__item}
      />
    );
  });
  return (
    <div className={styles.ForecastDaysHours}>
      {content}
    </div>
  );
}
