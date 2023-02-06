export enum TypeOptions {
  single = 'single',
  multi = 'multi',
}

export enum Difficulty {
  Easy = 'light',
  Medium = 'medium',
  Hard = 'hard',
}

export type answersType = {
  options: string[];
  correctAnswer: string[];
};
export type numberQuestionsType = 10 | 15 | 20 | 25 | 30;

export type newQuestionType = {
  title: string;
  description: string;
  content: answersType;
  difficulty: Difficulty;
  timer: number;
  type: TypeOptions;
  topicId: number;
};

export type newQuestionInQuizType = newQuestionType & {
  quizId: number;
};

export type questionType = {
  id: number;
  title: string;
  description: string;
  content: answersType;
  difficulty: Difficulty;
  timer: number;
  type: TypeOptions;
  topicId: number;
  moderationId: null;
  // Quiz_Question: {
  //   id: 1;
  //   quizId: 25;
  //   questionId: 2;
  // }; // need explain
};

export type quizType = {
  id: number;
  title: string;
  description: string;
  theme: string; // topicId
  difficulty: string;
  author: string;
  created: Date | null;
  updated: Date | null;
  questions: questionType[];
};

export type initialStateTestType = {
  test: quizType;
  currentQuestion: number;
  numberQuestions: number;
};

export type testSettingData = {
  title: string;
  description: string;
  theme: string;
  difficulty: string;
  numberQuestions: numberQuestionsType;
};

export type addQuestionToQuizParamType = {
  quizId: number;
  questionId: number;
};
