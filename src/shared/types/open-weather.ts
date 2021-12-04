interface Main {
  feels_like: number;
  temp: number;
}

interface Weather {
  id: number;
  icon: string;
  main: string;
  description: string;
}

export interface City {
  id: number;
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface DayWeatherInfo {
  dt: number;
  main: Main;
  weather: [Weather];
  pop: number;
}

export interface WeatherForecastResponse {
  cod: string;
  city: City;
  message: string;
  list: DayWeatherInfo[];
}
