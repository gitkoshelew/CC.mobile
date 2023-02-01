export type createRequestQuiz = {
  newQuiz: {
    title: string;
    description: string;
  };
  token: string | null;
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
  question: [];
};
export type addQuestionToQuiz = {
  quizId: number;
  questionId: number;
};
