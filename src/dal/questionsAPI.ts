import {instance} from '@src/dal/instance';
import {questionType} from '@customTypes/quiz-types';

export const questionsAPI = {
  getQuestions(id: number) {
    return instance.get(`/quiz/${id}`);
  },
  createQuestion(params: questionType) {
    return instance.post('/questions', {params});
  },
};
