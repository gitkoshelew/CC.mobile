import axios, {AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authAPI} from '@src/dal/authAPI';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

instance.interceptors.request.use(
  async config => {
    await getToken(config);
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  async response => {
    setToken(response.data.accessToken);
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await authAPI.checkAuth();
        AsyncStorage.setItem('token', response.data.accessToken);
        return instance.request(originalRequest);
      } catch (e) {
        console.log('error', e);
      }
    }
  },
);

const getToken = async (config: AxiosRequestConfig) => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (config.headers) {
      config.headers.Authorization = 'Bearer ' + token;
    }
  } catch (e) {
    console.log('getToken => catch => ', e);
  }
};

const setToken = (accessToken: string) => {
  try {
    if (accessToken) {
      AsyncStorage.setItem('token', accessToken);
    }
  } catch (e) {
    console.log('setToken => catch => ', e);
  }
};
