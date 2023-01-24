import {instance} from '@src/dal/instance';
import {newQuestionType} from '@customTypes/test-types';
import {addQuestionToTest} from '@customTypes/testsAPI-types';

export const questionsAPI = {
  getQuestions(id: number) {
    return instance.get(`/quiz/${id}`);
  },
  createQuestion(params: newQuestionType) {
    return instance.post('/questions', params);
  },
  addQuestionToTest(params: addQuestionToTest) {
    return instance.put('quiz/add/', params);
  },
};
