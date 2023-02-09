import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {quizTypeResponse} from '@customTypes/quiz-types';

const initialState = {
  quiz: {} as quizTypeResponse,
};
const processSlice = createSlice({
  name: 'process',
  initialState: initialState,
  reducers: {
    setStateQuiz: (state, {payload}: PayloadAction<quizTypeResponse>) => {
      state.quiz = payload;
    },
  },
});

export const processReducer = processSlice.reducer;

export const {setStateQuiz} = processSlice.actions;
