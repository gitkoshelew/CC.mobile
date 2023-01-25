export type createQuizRequestType = {
  title: string;
  description: string;
  topicId: 1;
  difficulty: string;
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
