import {instance} from '@src/dal/instance';
import {LoginType, RegistrationType} from '@customTypes/authAPI-types';

export const authAPI = {
  login(data: LoginType) {
    return instance.post('/auth/login', data);
  },
  registration(data: RegistrationType) {
    return instance.post('/auth/registration', data);
  },
  checkAuth(data: string) {
    return instance.post('/auth/refresh-token', {}, {headers: {Cookie: data}});
  },
  authMe() {
    return instance.get('/auth/me');
  },
};
