import axios, {AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  err => {
    return Promise.reject(err);
  },
);

const getToken = async (config: AxiosRequestConfig) => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
  } catch (e) {
    console.log('getToken => catch => ', e);
  }
};
const setToken = (accessToken: string) => {
  try {
    if (accessToken) {
      AsyncStorage.setItem('token', accessToken); // ?
    }
  } catch (e) {
    console.log('setToken => catch => ', e);
  }
};
