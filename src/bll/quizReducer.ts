import {quizzesAPI} from '@src/dal/quizzesAPI';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {createTestRequestQuiz} from '@customTypes/quizzesAPI-types';
import {questionsAPI} from '@src/dal/questionsAPI';
import {newQuestionType} from '@customTypes/quiz-types';
import {AxiosError} from 'axios';

export const getQuizzes = createAsyncThunk('quiz/getQuiz', async (_, {rejectWithValue}) => {
  try {
    await quizzesAPI.getQuiz();
  } catch (e) {
    const err = e as Error | AxiosError;
    return rejectWithValue(err.message);
  }
});

export const createQuiz = createAsyncThunk(
  'quiz/createQuiz',
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
  'quiz/createQuestion',
  async (param: newQuestionType, {rejectWithValue}) => {
    try {
      const createdQuestion = await questionsAPI.createQuestion(param);
      await quizzesAPI.addQuestionToQuiz({
        quizId: 25,
        questionId: createdQuestion.data.id,
      }); // It's temporary, backend have to field than would immediately indicate quiz
    } catch (e) {
      const err = e as Error | AxiosError;
      console.error(err.message);
      return rejectWithValue(err.message);
    }
  },
);

export const getQuizQuestions = createAsyncThunk(
  'quiz/createQuestion',
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

const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {},
});

export const quizReducer = quizSlice.reducer;

export const {} = quizSlice.actions;