import {quizzesAPI} from '@src/dal/quizzesAPI';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {createTestRequestQuiz} from '@customTypes/quizzesAPI-types';
import {questionsAPI} from '@src/dal/questionsAPI';
import {newQuestionInQuizType} from '@customTypes/quiz-types';
import {AxiosError} from 'axios';
import {setAppMessage} from './appReducer';

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
  async (param: createTestRequestQuiz, {dispatch, rejectWithValue}) => {
    try {
      const res = await quizzesAPI.createQuiz(param);
      dispatch(
        setAppMessage({
          text: 'The test was created successfully',
          severity: 'success',
        }),
      );
      return res.data;
    } catch (e) {
      const err = e as Error | AxiosError;
      dispatch(
        setAppMessage({
          text: 'Something went wrong',
          severity: 'error',
        }),
      );
      return rejectWithValue(err.message);
    }
  },
);

export const createQuestion = createAsyncThunk(
  'quiz/createQuestion',
  async (param: newQuestionInQuizType, {dispatch, rejectWithValue}) => {
    const {quizId, ...newTest} = param;
    try {
      const createdQuestion = await questionsAPI.createQuestion(newTest);
      await quizzesAPI.addQuestionToQuiz({
        quizId: quizId,
        questionId: createdQuestion.data.id,
      });
      dispatch(
        setAppMessage({
          text: 'The question is created',
          severity: 'success',
        }),
      );
    } catch (e) {
      const err = e as Error | AxiosError;
      dispatch(
        setAppMessage({
          text: 'The question has not been created',
          severity: 'error',
        }),
      );
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
