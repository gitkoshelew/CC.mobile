import {instance} from '@src/dal/instance';
import {questionType} from '@customTypes/test-types';
import {addQuestionToTest} from '@customTypes/testsAPI-types';

export const questionsAPI = {
  getQuestions(id: number) {
    return instance.get(`/quiz/${id}`);
  },
  createQuestion(params: questionType) {
    return instance.post('/questions', params);
  },
  addQuestionToTest(params: addQuestionToTest) {
    return instance.post('quiz/add/', params);
  },
};
