import {instance} from '@src/dal/instance';
import {newQuestionType} from '@customTypes/quiz-types';

export const questionsAPI = {
  createQuestion(params: newQuestionType & {token: string | null}) {
    const {token, ...resParams} = params;
    return instance.post('/questions', resParams, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
};
