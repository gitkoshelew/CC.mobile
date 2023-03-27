import {createAsyncThunk} from '@reduxjs/toolkit';
import {CreateQuizType} from '@customTypes/quizzesAPI-types';
import {setIsFetching} from '@src/bll/appReducer';
import {quizzesAPI} from '@src/dal/quizzesAPI';
import {addQuestionToQuizParamType, newQuestionInQuizType} from '@customTypes/quiz-types';
import {questionsAPI} from '@src/dal/questionsAPI';
import {topicAPI} from '@src/dal/topicAPI';
import {AxiosError} from 'axios';
import {requestMessageHandler} from '@src/utils/requestMessageHandler';

export const createQuiz = createAsyncThunk(
  'quiz/createQuiz',
  async (param: CreateQuizType, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));
    try {
      const res = await quizzesAPI.createQuiz(param);
      requestMessageHandler(dispatch, 'success', 'The test was created successfully');
      return res.data;
    } catch (e) {
      const err = e as Error | AxiosError;
      requestMessageHandler(dispatch, 'error', 'Something went wrong');
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
      requestMessageHandler(dispatch, 'success', 'The question is created');
      return createdQuestion.data;
    } catch (e) {
      const err = e as Error | AxiosError;
      requestMessageHandler(dispatch, 'error', 'The question has not been created');
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
      requestMessageHandler(dispatch, 'success', 'The question is added');
    } catch (e) {
      const err = e as Error | AxiosError;
      requestMessageHandler(dispatch, 'error', 'The question was not added to the test');
      return rejectWithValue(err.message);
    } finally {
      dispatch(setIsFetching(false));
    }
  },
);

export const getTopics = createAsyncThunk(
  'quiz/getTopics',
  async (_, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));
    try {
      const res = await topicAPI.getTopics();
      return res.data;
    } catch (e) {
      const err = e as Error | AxiosError;
      requestMessageHandler(dispatch, 'error', 'Something went wrong');
      return rejectWithValue(err.message);
    } finally {
      dispatch(setIsFetching(false));
    }
  },
);

export const getTopic = createAsyncThunk(
  'quiz/getTopic',
  async (topicId: number, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));
    try {
      const res = await topicAPI.getTopic(topicId);
      return res.data;
    } catch (e) {
      const err = e as Error | AxiosError;
      requestMessageHandler(dispatch, 'error', 'Something went wrong');
      return rejectWithValue(err.message);
    } finally {
      dispatch(setIsFetching(false));
    }
  },
);

export const createTopic = createAsyncThunk(
  'quiz/createTopic',
  async (title: string, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));
    try {
      const res = await topicAPI.createTopic({title});
      requestMessageHandler(dispatch, 'success', 'Theme is created');
      return res.data;
    } catch (e) {
      const err = e as Error | AxiosError;
      requestMessageHandler(dispatch, 'error', 'Something went wrong');
      return rejectWithValue(err.message);
    } finally {
      dispatch(setIsFetching(false));
    }
  },
);

export const getQuestions = createAsyncThunk(
  'questions/getQuestions',
  async (_, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));
    try {
      const res = await questionsAPI.getQuestions();
      return res.data;
    } catch (e) {
      const err = e as Error | AxiosError;
      requestMessageHandler(dispatch, 'error', 'Something went wrong');
      return rejectWithValue(err.message);
    } finally {
      dispatch(setIsFetching(false));
    }
  },
);
