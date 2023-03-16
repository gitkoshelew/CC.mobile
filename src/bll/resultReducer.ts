import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ResultType} from '@src/screens/PassingQuiz/components/QuizProcess';

const initialState: IState = {
  result: [],
};
type IState = {
  result: ResultType[];
};

const resultSlice = createSlice({
  name: 'result',
  initialState: initialState,
  reducers: {
    setStateResult: (state, {payload}: PayloadAction<ResultType>) => {
      state.result = [...state.result, payload];
    },
    clearStateResult: state => {
      state.result = [];
    },
  },
});

export const resultReducer = resultSlice.reducer;

export const {setStateResult, clearStateResult} = resultSlice.actions;
