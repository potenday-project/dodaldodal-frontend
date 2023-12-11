import axios, { type AxiosRequestConfig } from 'axios'

import { getApiEndpoint } from './api.utils'
import type { ServerResponse } from './api.types'

const createApi = () => {
  const _api = axios.create({
    baseURL: getApiEndpoint(),
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return _api
}

export const axiosInstance = createApi()

const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get<ServerResponse<T>>(url, config).then((res) => res.data),
  post: <T>(url: string, payload?: object, config?: AxiosRequestConfig) =>
    axiosInstance.post<ServerResponse<T>>(url, payload, config).then((res) => res.data),
  put: <T>(url: string, payload?: object, config?: AxiosRequestConfig) =>
    axiosInstance.put<ServerResponse<T>>(url, payload, config).then((res) => res.data),
  patch: <T>(url: string, payload?: object, config?: AxiosRequestConfig) =>
    axiosInstance.patch<ServerResponse<T>>(url, payload, config).then((res) => res.data),
  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete<ServerResponse<T>>(url, config).then((res) => res.data),
}

export default api
