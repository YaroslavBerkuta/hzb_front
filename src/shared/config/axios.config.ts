import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  },
  timeout: 180000,
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

export const http = {
  get: <T>(url: string, params?: AxiosRequestConfig) =>
    request<T>(() => axiosInstance.get<T>(url, params)),

  post: <T>(url: string, data: any, params?: AxiosRequestConfig) =>
    request<T>(() => axiosInstance.post<T>(url, data, params)),

  put: <T>(url: string, data: any, params?: AxiosRequestConfig) =>
    request<T>(() => axiosInstance.put<T>(url, data, params)),

  patch: <T>(url: string, data: any, params?: AxiosRequestConfig) =>
    request<T>(() => axiosInstance.patch<T>(url, data, params)),

  delete: <T>(url: string, params?: AxiosRequestConfig) =>
    request<T>(() => axiosInstance.delete<T>(url, params)),
};
