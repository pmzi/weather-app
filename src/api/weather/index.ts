import { APIErrorResponse } from '@shared/types/api';
import { GetFirstArgType } from '@shared/types/general';
import { useQuery } from 'react-query';
import weatherAPIRequests, { Get5DayForecastResponse } from './requests';

type UseQueryOptions = {
  enabled?: boolean;
  retry?: boolean | number;
};

function useGet5DayForecast(
  { city }: GetFirstArgType<typeof weatherAPIRequests.get5DayForecast>,
  options: UseQueryOptions = {},
) {
  return useQuery<Get5DayForecastResponse, APIErrorResponse>(
    ['forecast5day', city],
    () => weatherAPIRequests.get5DayForecast({ city }),
    {
      enabled: options.enabled,
      retry: options.retry,
    },
  );
}

const weatherAPI = {
  useGet5DayForecast,
};

export default weatherAPI;
