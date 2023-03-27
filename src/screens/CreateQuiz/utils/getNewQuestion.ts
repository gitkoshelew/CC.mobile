import {Difficulty, TypeOptions} from '@customTypes/quiz-types';
import {optionsType} from '@src/utils/transformFormatOptions';

export type CurrentQuestionType = {
  title: string;
  description: string;
  content: {
    options: optionsType;
    correctAnswer: string[];
  };
  difficulty: string;
  minutes: number;
  seconds: number;
  type: string;
  topicId: number;
};

export const getNewQuestion: CurrentQuestionType = {
  title: '',
  description: '',
  content: {
    options: [{option: ''}, {option: ''}],
    correctAnswer: [],
  },
  difficulty: Difficulty.Easy,
  minutes: 0,
  seconds: 0,
  type: TypeOptions.single,
  topicId: 0,
};
