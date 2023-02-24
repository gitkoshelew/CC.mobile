import {Difficulty, TypeOptions} from '@customTypes/quiz-types';

export const getNewQuestion = () => ({
  id: Math.random(), // ?
  title: '',
  description: '',
  content: {
    options: ['', ''],
    correctAnswer: [],
  },
  difficulty: Difficulty.Easy,
  timer: 0,
  type: TypeOptions.single,
  topicId: 0,
  moderationId: null,
});
