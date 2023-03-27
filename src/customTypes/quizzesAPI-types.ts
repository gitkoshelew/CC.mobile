import {questionTypeResponse} from '@customTypes/quiz-types';

export type createRequestQuiz = {
  title: string;
  description: string;
};

export type CreateQuizType = {
  title: string;
  description: string;
};

export type getQuizResponseType = {
  id: number;
  title: string;
  authorId: number;
  author: {
    id: number;
    name: string;
    surname: null;
    email: string;
    nickname: string;
    password: string;
    status: null;
  };
  topic: {
    id: number;
    title: string;
  };
  question: questionTypeResponse[];
};
export type addQuestionToQuiz = {
  quizId: number;
  questionId: number;
};

export type createTopicType = {
  title: string;
};

export type TopicType = {
  id: number;
  title: string;
};
