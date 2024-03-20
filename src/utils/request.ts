import axios, { AxiosRequestConfig } from 'axios';
import { useContext, createContext } from 'react';
import { useQuery } from 'react-query';

export const request = axios.create({
  headers: {
    'content-type': 'multipart/form-data',
  },
  baseURL: 'http://f1.t.bxa8.cn/houtai/baoxian',
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use((response) => {
  if (response.data) return response.data;

  return response;
});

export const AxiosContext = createContext(request);

export const useAXios = () => useContext(AxiosContext);

export const useRequest = <T = any, R = any>(
  key: string,
  params: AxiosRequestConfig<R> = {},
) => {
  const axios = useAXios();

  return useQuery(key, async () => {
    const data: T = await axios(params);

    return data;
  });
};
