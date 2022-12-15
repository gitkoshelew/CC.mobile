import {createSlice} from '@reduxjs/toolkit';

export type AppStateT = {};

const slice = createSlice({
  name: 'app',
  initialState: {
    message: 'Initial message',
  } as AppStateT,
  reducers: {},
});

export const appReducer = slice.reducer;

export const {} = slice.actions;
