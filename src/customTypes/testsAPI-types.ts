export type createTestRequestType = {
  title: string;
  description: string;
  topicId: 1;
  authorId: number;
};

export type getTestResponseType = {
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
  question: [];
};
export type addQuestionToTest = {
  quizId: number;
  questionId: number;
};
