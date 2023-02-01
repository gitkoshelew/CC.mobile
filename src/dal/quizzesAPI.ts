import {instance} from '@src/dal/instance';
import {addQuestionToQuiz, createRequestQuiz} from '@customTypes/quizzesAPI-types';

export const quizzesAPI = {
  getQuiz() {
    return instance.get('/quiz');
  },
  createQuiz(params: createRequestQuiz) {
    return instance.post('/quiz', params.newQuiz, {
      headers: {
        Authorization: 'Bearer ' + params.token,
      },
    });
  },
  getQuizQuestions(id: number) {
    return instance.get(`/quiz/${id}`);
  },
  addQuestionToQuiz(params: addQuestionToQuiz & {token: string | null}) {
    console.log(params);
    const {token, ...resParams} = params;
    return instance.put('quiz/add', resParams, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
};
