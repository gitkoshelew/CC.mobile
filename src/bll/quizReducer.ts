import {quizzesAPI} from '@src/dal/quizzesAPI';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CreateQuizType, getQuizResponseType} from '@customTypes/quizzesAPI-types';
import {questionsAPI} from '@src/dal/questionsAPI';
import {addQuestionToQuizParamType, newQuestionInQuizType} from '@customTypes/quiz-types';
import {AxiosError} from 'axios';
import {setStateQuiz} from '@src/bll/processReducer';
import {setAppMessage, setIsFetching} from './appReducer';
import {topicAPI} from '@src/dal/topicAPI';

export const createTopic = createAsyncThunk(
  'quiz/createTopic',
  async (title: string, {dispatch, rejectWithValue}) => {
    try {
      dispatch(setIsFetching(true));
      const res = await topicAPI.createTopic({title});
      dispatch(
        setAppMessage({
          text: 'Theme is created',
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
    } finally {
      dispatch(setIsFetching(false));
    }
  },
);

export const getTopics = createAsyncThunk(
  'quiz/getTopics',
  async (_, {dispatch, rejectWithValue}) => {
    try {
      const res = await topicAPI.getTopics();
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
    dispatch(setIsFetching(true));
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
    } finally {
      dispatch(setIsFetching(false));
    }
  },
);

export const createQuestion = createAsyncThunk(
  'quiz/createQuestion',
  async (param: newQuestionInQuizType, {dispatch, rejectWithValue}) => {
    const {quizId, ...newQuestion} = param;
    try {
      const createdQuestion = await questionsAPI.createQuestion(newQuestion);
      await dispatch(addQuestionToQuiz({quizId, questionId: createdQuestion.data.id}));
      dispatch(
        setAppMessage({
          text: 'The question is created',
          severity: 'success',
        }),
      );
      return createdQuestion.data;
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

export const addQuestionToQuiz = createAsyncThunk(
  'quiz/addQuestionToQuiz',
  async ({quizId, questionId}: addQuestionToQuizParamType, {dispatch, rejectWithValue}) => {
    try {
      await quizzesAPI.addQuestionToQuiz({
        quizId,
        questionId,
      });
    } catch (e) {
      const err = e as Error | AxiosError;
      dispatch(
        setAppMessage({
          text: 'The question was not added to the test',
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
