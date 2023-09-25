import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 6000,
});

export const request = async <T>(func: Function, retryCount = 0) => {
  try {
    let response = await func();
    return response as any as AxiosResponse;
  } catch (e: any) {
    console.log(e);
  }
};

export interface ICacheRequestConfig extends AxiosRequestConfig {
  ttl?: number;
  force?: boolean;
  needCache?: true;
}

export interface IRequestConfig extends AxiosRequestConfig {}

interface INonCacheRequestConfig extends AxiosRequestConfig {
  needCache?: false;
}

type GetRequstConfig = ICacheRequestConfig | INonCacheRequestConfig;

export const api = {
  get: <T>(url: string, params?: GetRequstConfig, prefix = "/") => {
    request<T>(() => axiosInstance.get<T>(`${prefix}${url}`, params));
  },
  post: <T>(
    url: string,
    data: any,
    params?: AxiosRequestConfig,
    prefix = "/"
  ) => request<T>(() => axiosInstance.post<T>(`${prefix}${url}`, data, params)),

  put: <T>(url: string, data: any, params?: AxiosRequestConfig, prefix = "/") =>
    request<T>(() => axiosInstance.put<T>(`${prefix}${url}`, data, params)),

  patch: <T>(
    url: string,
    data: any,
    params?: AxiosRequestConfig,
    prefix = "/"
  ) =>
    request<T>(() => axiosInstance.patch<T>(`${prefix}${url}`, data, params)),

  delete: <T>(url: string, params?: AxiosRequestConfig, prefix = "/") =>
    request<T>(() => axiosInstance.delete<T>(`${prefix}${url}`, params)),
};
