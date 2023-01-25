import {createSlice} from '@reduxjs/toolkit';
import {quizIdMoc} from '@src/Mocs/Testing';

const initialState = quizIdMoc;

const processSlice = createSlice({
  name: 'process',
  initialState: initialState,
  reducers: {},
});

export const processReducer = processSlice.reducer;

export const {} = processSlice.actions;
