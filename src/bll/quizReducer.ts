import {quizzesAPI} from '@src/dal/quizzesAPI';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getQuizResponseType} from '@customTypes/quizzesAPI-types';
import {AxiosError} from 'axios';
import {setStateQuiz} from '@src/bll/processReducer';
import {setIsFetching} from './appReducer';

export const getQuizzes = createAsyncThunk(
  'quiz/getQuiz',
  async (_, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));
    try {
      const res = await quizzesAPI.getQuiz();
      dispatch(setStateQuizzes(res.data));
      dispatch(setIsFetching(false));
      return res.data;
    } catch (e) {
      const err = e as Error | AxiosError;
      return rejectWithValue(err.message);
    }
  },
);

export const getQuizQuestions = createAsyncThunk(
  'quiz/createQuestion',
  async (id: number, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));
    try {
      const res = await quizzesAPI.getQuizQuestions(id);
      dispatch(setStateQuiz(res.data));
      return res.data;
    } catch (e) {
      const err = e as Error | AxiosError;
      return rejectWithValue(err.message);
    } finally {
      dispatch(setIsFetching(false));
    }
  },
);

export const deleteQuiz = createAsyncThunk(
  'quiz/deleteQuiz',
  async (id: number, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));
    try {
      await quizzesAPI.deleteQuiz(id);
    } catch (e) {
      const err = e as Error | AxiosError;
      return rejectWithValue(err.message);
    } finally {
      dispatch(setIsFetching(false));
    }
  },
);

type IQuizzes = {
  quizzes: getQuizResponseType[];
};
const initialState: IQuizzes = {
  quizzes: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {
    setStateQuizzes: (state, {payload}: PayloadAction<getQuizResponseType[]>) => {
      state.quizzes = payload;
    },
  },
});

export const quizReducer = quizSlice.reducer;

export const {setStateQuizzes} = quizSlice.actions;
