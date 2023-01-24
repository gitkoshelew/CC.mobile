import {testsAPI} from '@src/dal/testsAPI';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {createTestRequestType} from '@customTypes/testsAPI-types';
import {questionsAPI} from '@src/dal/questionsAPI';
import {newQuestionType} from '@customTypes/test-types';
import {AxiosError} from 'axios';

export const getTests = createAsyncThunk('test/getTests', async (_, {rejectWithValue}) => {
  try {
    await testsAPI.getTests();
  } catch (e) {
    const err = e as Error | AxiosError;
    return rejectWithValue(err.message);
  }
});

export const createTest = createAsyncThunk(
  'test/createTest',
  async (param: createTestRequestType, {rejectWithValue}) => {
    try {
      const res = await testsAPI.createTest(param);
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
      const resCreateQuest = await questionsAPI.createQuestion(param);
      const res = await questionsAPI.addQuestionToTest({
        quizId: 25,
        questionId: resCreateQuest.data.id,
      }); // It's temporary, backend have to field than would immediately indicate quiz
      return res.data;
    } catch (e) {
      const err = e as Error | AxiosError;
      console.error(err.message);
      return rejectWithValue(err.message);
    }
  },
);

export const getQuestions = createAsyncThunk(
  'test/createQuestion',
  async (id: number, {rejectWithValue}) => {
    try {
      const res = await questionsAPI.getQuestions(id);
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
