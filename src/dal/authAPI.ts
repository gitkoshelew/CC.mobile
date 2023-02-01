import {instance} from '@src/dal/instance';

export const authAPI = {
  login() {
    return instance.post('/auth/login', {
      email: 'mary.bogdanova79@gmail.com',
      password: 'mary123qwePass',
    });
  },
  registration() {
    return instance.post('/auth/registration', {
      name: 'Mary',
      email: 'mary.bogdanova79@gmail.com',
      password: 'mary123qwePass',
      nickname: 'MaryBog',
    });
  },
};
