import {quizzesAPI} from '@src/dal/quizzesAPI';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CreateQuizType, getQuizResponseType} from '@customTypes/quizzesAPI-types';
import {questionsAPI} from '@src/dal/questionsAPI';
import {newQuestionInQuizType} from '@customTypes/quiz-types';
import {AxiosError} from 'axios';
import {setAppMessage} from './appReducer';
import {setStateQuiz} from '@src/bll/processReducer';

export const getQuizzes = createAsyncThunk(
  'quiz/getQuiz',
  async (_, {dispatch, rejectWithValue}) => {
    try {
      const res = await quizzesAPI.getQuiz();
      dispatch(setStateQuizzes(res.data));
    } catch (e) {
      const err = e as Error | AxiosError;
      return rejectWithValue(err.message);
    }
  },
);

export const createQuiz = createAsyncThunk(
  'quiz/createQuiz',
  async (param: CreateQuizType, {dispatch, rejectWithValue}) => {
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
    const {quizId, ...newQuestion} = param;
    try {
      const createdQuestion = await questionsAPI.createQuestion(newQuestion);
      await quizzesAPI.addQuestionToQuiz({
        quizId,
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
  async (id: number, {dispatch, rejectWithValue}) => {
    try {
      const res = await quizzesAPI.getQuizQuestions(id);
      dispatch(setStateQuiz(res.data));
    } catch (e) {
      const err = e as Error | AxiosError;
      return rejectWithValue(err.message);
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
