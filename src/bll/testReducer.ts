import {testsAPI} from '@src/dal/testsAPI';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {createTestRequestType} from '@customTypes/testsAPI-types';
import {questionsAPI} from '@src/dal/questionsAPI';
import {questionType} from '@customTypes/test-types';

export const getTests = createAsyncThunk(
  'test/getTests',
  async (_, {rejectWithValue}) => {
    try {
      await testsAPI.getTests();
    } catch (e) {
      return rejectWithValue({});
    } finally {
    }
  },
);

export const createTest = createAsyncThunk(
  'test/createTest',
  async (param: createTestRequestType, {rejectWithValue}) => {
    try {
      const res = await testsAPI.createTest(param);
      return res.data;
    } catch (e) {
      return rejectWithValue({});
    } finally {
    }
  },
);

export const createQuestion = createAsyncThunk(
  'test/createQuestion',
  async (param: questionType, {rejectWithValue}) => {
    try {
      const res = await questionsAPI.createQuestion(param);
      return res.data;
    } catch (e) {
      return rejectWithValue({});
    } finally {
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
