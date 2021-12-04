import http from '@services/http';
import { WeatherForecastAPIResponse } from '@shared/types/api';

export type Get5DayForecastResponse = WeatherForecastAPIResponse;

async function get5DayForecast({ city }: { city: string }) {
  return http.get<Get5DayForecastResponse>(`/api/forecast?city=${city}`);
}

const weatherAPIRequests = {
  get5DayForecast,
};

export default weatherAPIRequests;
