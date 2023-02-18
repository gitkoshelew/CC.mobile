import {createAsyncThunk} from '@reduxjs/toolkit';
import {CreateQuizType} from '@customTypes/quizzesAPI-types';
import {setAppMessage, setIsFetching} from '@src/bll/appReducer';
import {quizzesAPI} from '@src/dal/quizzesAPI';
import {addQuestionToQuizParamType, newQuestionInQuizType} from '@customTypes/quiz-types';
import {questionsAPI} from '@src/dal/questionsAPI';
import {topicAPI} from '@src/dal/topicAPI';
import {AxiosError} from 'axios';

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
    dispatch(setIsFetching(true));
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
    } finally {
      dispatch(setIsFetching(false));
    }
  },
);

export const addQuestionToQuiz = createAsyncThunk(
  'quiz/addQuestionToQuiz',
  async ({quizId, questionId}: addQuestionToQuizParamType, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));
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
