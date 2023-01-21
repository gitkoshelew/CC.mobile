import {instance} from '@src/dal/instance';
import {createTestRequestType} from '@customTypes/testsAPI-types';

export const testsAPI = {
  getTests() {
    return instance.get('/quiz');
  },
  createTest(params: createTestRequestType) {
    return instance.post('/quiz', params);
  },
};
