import {instance} from '@src/dal/instance';
import {
  addQuestionToQuiz,
  createQuizRequestType,
} from '@customTypes/quizzesAPI-types';

export const quizzesAPI = {
  getQuiz() {
    return instance.get('/quiz');
  },
  createQuiz(params: createQuizRequestType) {
    return instance.post('/quiz', params);
  },
  getQuizQuestions(id: number) {
    return instance.get(`/quiz/${id}`);
  },
  addQuestionToQuiz(params: addQuestionToQuiz) {
    return instance.put('quiz/add/', params);
  },
};
