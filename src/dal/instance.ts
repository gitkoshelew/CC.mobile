import axios, {AxiosHeaders, AxiosRequestConfig} from 'axios';
import {authAPI} from '@src/dal/authAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

instance.interceptors.request.use(
  async config => {
    await getAccessToken(config);
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  config => config,
  async err => {
    const originalRequest = err.config;
    if (err.response.status === 401 && originalRequest.url === '/auth/login') {
      return Promise.reject(err);
    }
    if (err.response.status === 401 && originalRequest.url === '/auth/refresh-token') {
      return Promise.reject(err);
    }
    if (err.response.status === 401 && err.config && !err.config.isRetry) {
      originalRequest.isRetry = true;
      try {
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        const response = await authAPI.checkAuth(refreshToken as string);
        await setAccessToken(response.data.accessToken);
        return instance.request(originalRequest);
      } catch (e) {
        console.log('error', e);
      }
    }
    return Promise.reject(err);
  },
);

export const getAccessToken = async (config: AxiosRequestConfig) => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (config.headers) {
      (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
    }
  } catch (e) {
    console.log('getToken => catch => ', e);
  }
};

export const setAccessToken = async (accessToken: string) => {
  try {
    if (accessToken) {
      await AsyncStorage.setItem('token', accessToken);
    }
  } catch (e) {
    console.log('setToken => catch => ', e);
  }
};
