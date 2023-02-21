import {instance} from '@src/dal/instance';
import {newQuestionType} from '@customTypes/quiz-types';

export const questionsAPI = {
  createQuestion(params: newQuestionType) {
    return instance.post('/questions', params);
  },
  getQuestions() {
    return instance.get('/questions');
  },
};
