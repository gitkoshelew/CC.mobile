import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type answerType = {
  id: number;
  answer: string;
  isCorrect: boolean;
};
export type difficultyType = 'Easy' | 'Medium' | 'Hard';

export type CreateTestType = {
  title: string;
  content: answerType[];
  type: string;
  difficulty: difficultyType;
  description: string;
  topic: string;
};

const slice = createSlice({
  name: 'createTest',
  initialState: {
    title: '',
    content: [
      {
        id: 1,
        answer: '',
        isCorrect: false,
      },
      {
        id: 2,
        answer: '',
        isCorrect: true,
      },
    ],
    type: 'Single-choice',
    difficulty: 'Easy',
    description: '',
    topic: '',
  } as CreateTestType,
  reducers: {
    addAnswer(state) {
      state.content.push({id: Math.random(), answer: '', isCorrect: false});
    },
    deleteAnswer(state, action: PayloadAction<{id: number}>) {
      return {
        ...state,
        content: state.content.filter(el => el.id !== action.payload.id),
      };
    },
    correctAnswer(
      state,
      action: PayloadAction<{id: number; isCorrect: boolean}>,
    ) {
      return {
        ...state,
        content: state.content.map(answer =>
          answer.id === action.payload.id
            ? {...answer, isCorrect: action.payload.isCorrect}
            : answer,
        ),
      };
    },
  },
});

export const createTestReducer = slice.reducer;

export const {addAnswer, deleteAnswer, correctAnswer} = slice.actions;
