import {instance} from '@src/dal/instance';
import {questionType} from '@customTypes/test-types';

export const questionsAPI = {
  createQuestion(params: questionType) {
    return instance.post('/questions', {params});
  },
};
