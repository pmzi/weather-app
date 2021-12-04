import strings from '@shared/constants/strings';
import { APIOKResponse } from '@shared/types/api';
import axios, { Method } from 'axios';

const httpInstance = axios.create();

const http = {
  request<R, T = undefined>({
    url,
    method,
    data,
  }: {
    url: string;
    method: Method;
    data?: T;
  }) {
    return httpInstance.request<APIOKResponse<R>>({
      url,
      method,
      data,
    })
      .then(({ data: { data: responseData } }) => responseData)
      .catch(({ response: { data: errorData } }) => {
        // eslint-disable-next-line no-throw-literal
        throw {
          message: errorData.message || strings.ERROR,
        };
      });
  },
  get<R>(url: string) {
    return this.request<R>({ url, method: 'GET' });
  },
  post<R, T>(url: string, data: T) {
    return this.request<R, T>({ url, method: 'POST', data });
  },
  put<R, T>(url: string, data: T) {
    return this.request<R, T>({ url, method: 'PUT', data });
  },
  patch<R, T>(url: string, data: T) {
    return this.request<R, T>({ url, method: 'PATCH', data });
  },
  delete<R>(url: string) {
    return this.request<R>({ url, method: 'DELETE' });
  },
  createCancelToken() {
    return axios.CancelToken.source();
  },
};

export default http;
