import {instance} from '@src/dal/instance';
import {addQuestionToQuiz, createTestRequestQuiz} from '@customTypes/quizzesAPI-types';

export const quizzesAPI = {
  getQuiz() {
    return instance.get('/quiz');
  },
  createQuiz(params: createTestRequestQuiz) {
    return instance.post('/quiz', params);
  },
  getQuizQuestions(id: number) {
    return instance.get(`/quiz/${id}`);
  },
  addQuestionToQuiz(params: addQuestionToQuiz) {
    return instance.put('quiz/add/', params);
  },
};
