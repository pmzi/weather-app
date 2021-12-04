import type { NextApiRequest, NextApiResponse } from 'next';
import type { DayWeatherInfo, WeatherForecastResponse } from '@shared/types/open-weather';
import { APIErrorResponse, APIOKResponse, WeatherForecastAPIResponse } from '@shared/types/api';
import strings from '@shared/constants/strings';
import { OPEN_WEATHER_API_KEY } from '@/config';

type Data = APIErrorResponse | APIOKResponse<WeatherForecastAPIResponse>;

type WeatherInfoGroupedByDay = {
  [index: string]: DayWeatherInfo[];
};

function groupByDate(data: WeatherForecastResponse['list']) {
  return data.reduce<WeatherInfoGroupedByDay>((acc, cur) => {
    const date = new Date(cur.dt * 1000);
    const day = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    if (!acc[day]) {
      return {
        ...acc,
        [day]: [cur],
      };
    }
    return {
      ...acc,
      [day]: [...acc[day], cur],
    };
  }, {});
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { city } = req.query;

  if (!city) {
    res.status(400).json({
      message: 'City is required',
      isOk: false,
    });
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`);
    const result: WeatherForecastResponse = await response.json();

    if (result.cod !== '200') {
      throw new Error(result.message);
    }

    res.status(200).json({
      isOk: true,
      data: {
        list: groupByDate(result.list),
        city: result.city,
      },
    });
    return;
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({
        message: e.message,
        isOk: false,
      });
      return;
    }
    res.status(500).json({
      isOk: false,
      message: strings.ERROR,
    });
  }
}
