export type answerType = {
  id: number;
  answer: string;
  isCorrect: boolean;
};
export type difficultyType = 'Easy' | 'Medium' | 'Hard';
export type numberQuestionsType = 10 | 15 | 20 | 25 | 30;
export type questionType = {
  id: number;
  title: string;
  content: answerType[];
  type: string;
  timer: string;
  textQuestion: string;
};

export type TestsType = {
  test: {
    id: number;
    title: string;
    description: string;
    theme: string;
    difficulty: difficultyType;
    numberQuestions: numberQuestionsType;
    author: string;
    created: Date | null;
    updated: Date | null;
    questions: questionType[];
  };
  currentQuestion: number;
};
