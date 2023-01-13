export type answersType = {
  options: string[];
};
export type difficultyType = 'Easy' | 'Medium' | 'Hard';
export type numberQuestionsType = 10 | 15 | 20 | 25 | 30;
export type correctAnswerType = string | string[];
export type questionType = {
  id: number;
  title: string;
  content: answersType;
  correctAnswer: string | string[];
  type: string;
  timer: string;
  textQuestion: string;
};

export type testType = {
  id: number;
  title: string;
  description: string;
  theme: string;
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
  numberQuestions: number;
};
