import {Difficulty, TypeOptions} from '@customTypes/quiz-types';

export const getNewQuestion = () => ({
  id: Math.random(),
  title: '',
  description: '',
  content: {
    options: ['', ''],
    correctAnswer: [],
  },
  difficulty: Difficulty.Easy,
  timer: 0,
  type: TypeOptions.single,
  topicId: 1,
  moderationId: null,
});
