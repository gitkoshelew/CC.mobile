import {instance} from '@src/dal/instance';
import {newQuestionType} from '@customTypes/test-types';

export const questionsAPI = {
  createQuestion(params: newQuestionType) {
    return instance.post('/questions', params);
  },
};
