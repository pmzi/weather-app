import { City, DayWeatherInfo } from './open-weather';

export type APIOKResponse<D> = {
  isOk: true;
  data: D;
}

export type WeatherForecastAPIResponse = {
  list: {
    [index: string]: DayWeatherInfo[];
  };
  city: City;
};

export type APIErrorResponse = {
  isOk: false;
  message: string;
}
