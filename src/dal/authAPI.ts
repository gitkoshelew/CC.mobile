import {instance} from '@src/dal/instance';
import {LoginType, RegistrationType} from '@customTypes/authAPI-types';

export const authAPI = {
  login(data: LoginType) {
    return instance.post('/auth/login', data);
  },
  registration(data: RegistrationType) {
    return instance.post('/auth/registration', data);
  },
  checkAuth() {
    return instance.post('/auth/refresh-token');
  },
  auth() {
    return instance.get('/auth/me');
  },
};
