export type answersType = {
  options: string[];
  answers: string[];
};
export type numberQuestionsType = 10 | 15 | 20 | 25 | 30;

export type questionType = {
  id: number;
  title: string;
  description: string;
  content: answersType;
  difficulty: string;
  timer: number;
  type: string;
  // topic: number; // need explain
  moderation: null;
  quiz: number[]; // need explain
};

export type testType = {
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
  test: testType;
  currentQuestion: number;
  numberQuestions: number;
};

export type testSettingData = {
  title: string;
  description: string;
  theme: string;
  difficulty: string;
  numberQuestions: numberQuestionsType; // ?
};
