import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {testSettingData} from '../screens/CreateTest/TestSettings';
import {questionType, TestsType} from 'types/test-types';

const initialState = {
  test: {
    id: 1,
    title: 'test',
    description: '',
    theme: '',
    difficulty: 'Easy',
    numberQuestions: 10,
    author: 'I am',
    created: null,
    updated: null,
    questions: [
      {
        id: 1,
        title: '',
        content: [
          {
            id: 1,
            answer: '',
            isCorrect: false,
          },
        ],
        textQuestion: '',
        timer: '',
        type: 'Single-choice',
      },
    ],
  },
  currentQuestion: 1,
} as TestsType;

const testSlice = createSlice({
  name: 'createTest',
  initialState: initialState,
  reducers: {
    addAnswer(state) {
      const newAnswer = {
        id: Math.random(),
        answer: '',
        isCorrect: false,
      };
      return {
        ...state,
        test: {
          ...state.test,
          questions: state.test.questions.map(el =>
            el.id === state.currentQuestion
              ? {...el, content: [...el.content, newAnswer]}
              : el,
          ),
        },
      };
    },
    selectCurrentQuestion(state, action: PayloadAction<{id: number}>) {
      state.currentQuestion = action.payload.id;
    },
    addTestSettings(state, action: PayloadAction<testSettingData>) {
      const numberQuestions = Number(action.payload.numberQuestions);
      const createQuestions = [...Array(numberQuestions)].map(_ => ({
        id: Math.random(),
        title: '',
        content: [
          {
            id: Math.random(),
            answer: '',
            isCorrect: false,
          },
          {
            id: Math.random(),
            answer: '',
            isCorrect: true,
          },
        ],
        textQuestion: '',
        timer: '',
        type: 'Single-choice',
      }));
      state.test = {
        ...state.test,
        ...action.payload,
        questions: createQuestions,
      };
    },
    deleteAnswer(state, action: PayloadAction<{id: number}>) {
      return {
        ...state,
        test: {
          ...state.test,
          questions: state.test.questions.map(el =>
            el.id === state.currentQuestion
              ? {
                  ...el,
                  content: el.content.filter(
                    answ => answ.id !== action.payload.id,
                  ),
                }
              : el,
          ),
        },
      };
    },
    correctAnswer(
      state,
      action: PayloadAction<{id: number; isCorrect: boolean}>,
    ) {
      return {
        ...state,
        test: {
          ...state.test,
          questions: state.test.questions.map(el =>
            el.id === state.currentQuestion
              ? {
                  ...el,
                  content: el.content.map(answ =>
                    answ.id === action.payload.id
                      ? {...answ, isCorrect: action.payload.isCorrect}
                      : answ,
                  ),
                }
              : el,
          ),
        },
      };
    },
    saveQuestion(state, action: PayloadAction<questionType>) {
      return {
        ...state,
        test: {
          ...state.test,
          questions: state.test.questions.map(el =>
            el.id === state.currentQuestion ? {...el, ...action.payload} : el,
          ),
        },
      };
    },
  },
});

export const testReducer = testSlice.reducer;

export const {
  addAnswer,
  deleteAnswer,
  correctAnswer,
  selectCurrentQuestion,
  addTestSettings,
  saveQuestion,
} = testSlice.actions;
