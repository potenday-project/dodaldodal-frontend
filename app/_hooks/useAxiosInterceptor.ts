import { useEffect } from 'react'

import { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'

import { axiosInstance } from '../_service/core/api'
import { getAccessToken } from '../_utils/token'

export const useAxiosInterceptor = () => {
  const requestHandler = (config: InternalAxiosRequestConfig) => {
    const accessToken = getAccessToken()

    if (accessToken !== null) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `${accessToken}`
    }

    return config
  }

  const requestErrorHandler = (error: AxiosError) => {
    return Promise.reject(error)
  }

  const responseHandler = (response: AxiosResponse) => {
    return response
  }

  const responseErrorHandler = (error: any) => {
    return Promise.reject(error)
  }

  const requestInterceptor = axiosInstance.interceptors.request.use(requestHandler, requestErrorHandler)
  const responseInterceptor = axiosInstance.interceptors.response.use(responseHandler, responseErrorHandler)

  useEffect(() => {
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor)
      axiosInstance.interceptors.request.eject(responseInterceptor)
    }
  }, [requestInterceptor, responseInterceptor])
}
