import {quizzesAPI} from '@src/dal/quizzesAPI';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {createTestRequestQuiz} from '@customTypes/testsAPI-types';
import {questionsAPI} from '@src/dal/questionsAPI';
import {newQuestionType} from '@customTypes/test-types';
import {AxiosError} from 'axios';

export const getQuizzes = createAsyncThunk('test/getTests', async (_, {rejectWithValue}) => {
  try {
    await quizzesAPI.getQuiz();
  } catch (e) {
    const err = e as Error | AxiosError;
    return rejectWithValue(err.message);
  }
});

export const createQuiz = createAsyncThunk(
  'test/createTest',
  async (param: createTestRequestQuiz, {rejectWithValue}) => {
    try {
      const res = await quizzesAPI.createQuiz(param);
      return res.data;
    } catch (e) {
      const err = e as Error | AxiosError;
      return rejectWithValue(err.message);
    }
  },
);

export const createQuestion = createAsyncThunk(
  'test/createQuestion',
  async (param: newQuestionType, {rejectWithValue}) => {
    try {
      const responseCreateQuest = await questionsAPI.createQuestion(param);
      await quizzesAPI.addQuestionToQuiz({
        quizId: 25,
        questionId: responseCreateQuest.data.id,
      }); // It's temporary, backend have to field than would immediately indicate quiz
    } catch (e) {
      const err = e as Error | AxiosError;
      console.error(err.message);
      return rejectWithValue(err.message);
    }
  },
);

export const getQuizQuestions = createAsyncThunk(
  'test/createQuestion',
  async (id: number, {rejectWithValue}) => {
    try {
      const res = await quizzesAPI.getQuizQuestions(id);
      return res.data;
    } catch (e) {
      const err = e as Error | AxiosError;
      return rejectWithValue(err.message);
    }
  },
);

const initialState = {};

const testSlice = createSlice({
  name: 'test',
  initialState: initialState,
  reducers: {},
});

export const testReducer = testSlice.reducer;

export const {} = testSlice.actions;
