import useCityAndPageHandler from '@@/Home/shared/useCityAndPageHandler';
import Card from '@shared/components/Card';
import { ClassNameProp } from '@shared/types/general';
import classNames from 'classnames';
import { WeatherForecastAPIResponse } from '@shared/types/api';
import {
  getDayRelativeName,
} from '@shared/utilities/date';
import { useEffect } from 'react';
import weatherAPI from '@/api/weather';
import ForecastDaysHours from './ForecastDaysHours';
import ForecastDaysTabManager, { ForecastDaysTabManagerProps } from './ForecastDaysTabManager';
import useSelectWeatherHandler from '../shared/useSelectWeatherHandler';
import ForecastDaysLoading from './ForecastDaysLoading';

function convertToTabsInfo(data: WeatherForecastAPIResponse) {
  const tabsInfo: ForecastDaysTabManagerProps['tabsInfo'] = [];

  const listData = data.list;

  const dataKeys = Object.keys(data.list);

  dataKeys.forEach((key) => {
    const dateString = key;
    const [year, month, day] = dateString.split('-').map(Number);

    const dateObject = new Date(year, month, day);
    const tabTitle = getDayRelativeName(dateObject);

    tabsInfo.push({
      id: key,
      title: tabTitle,
      content: <ForecastDaysHours hoursData={listData[key]} />,
    });
  });

  return tabsInfo;
}

export default function ForecastDays({ className }: ClassNameProp) {
  const { currentCity } = useCityAndPageHandler();
  const { setSelectedHourWeatherData, selectedHourWeatherData } = useSelectWeatherHandler();
  const { data, isLoading } = weatherAPI.useGet5DayForecast({ city: currentCity as string });

  useEffect(() => {
    // Select first hours section for the first time
    if (!selectedHourWeatherData && data) {
      const listData = data.list;
      const firstListDataKey = Object.keys(listData)[0];
      const firstWeatherInfo = listData[firstListDataKey][0];
      setSelectedHourWeatherData(firstWeatherInfo);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const tabsInfo: ForecastDaysTabManagerProps['tabsInfo'] = data ? convertToTabsInfo(data) : [];

  const content = isLoading
    ? <ForecastDaysLoading />
    : <ForecastDaysTabManager tabsInfo={tabsInfo} />;

  return (
    <section className={classNames(className)}>
      <Card>
        {content}
      </Card>
    </section>
  );
}
