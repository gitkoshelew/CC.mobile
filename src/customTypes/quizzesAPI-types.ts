export type createTestRequestQuiz = {
  title: string;
  description: string;
  topicId: 1;
  authorId: number;
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
  question: [];
};
export type addQuestionToQuiz = {
  quizId: number;
  questionId: number;
};

export type createTopic = {
  title: string;
};
