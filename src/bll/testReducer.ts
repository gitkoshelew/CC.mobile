import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  initialStateTestType,
  questionType,
  testSettingData,
} from 'types/test-types';

const initialState = {
  test: {
    id: 1,
    title: 'test',
    description: '',
    theme: '',
    difficulty: 'Easy',
    author: 'I am',
    created: null,
    updated: null,
    questions: [
      {
        id: 1,
        title: '',
        type: 'Single-choice',
        textQuestion: '',
        timer: '',
        correctAnswer: '',
        content: {
          options: ['', ''],
        },
      },
    ],
  },
  currentQuestion: 1,
  numberQuestions: 10,
} as initialStateTestType;

const testSlice = createSlice({
  name: 'test',
  initialState: initialState,
  reducers: {
    addAnswer(state) {
      return {
        ...state,
        test: {
          ...state.test,
          questions: state.test.questions.map(el =>
            el.id === state.currentQuestion
              ? {...el, content: {...el, options: [...el.content.options, '']}}
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
        content: {options: ['', '']},
        textQuestion: '',
        correctAnswer: ['q'],
        timer: '',
        type: 'Single-choice',
      }));
      state.test = {
        ...state.test,
        ...action.payload,
        questions: createQuestions,
      };
    },
    deleteAnswer(state, action: PayloadAction<{index: number}>) {
      return {
        ...state,
        test: {
          ...state.test,
          questions: state.test.questions.map(el =>
            el.id === state.currentQuestion
              ? {
                  ...el,
                  content: {
                    ...el.content,
                    options: el.content.options.filter(
                      (_, index) => index !== action.payload.index,
                    ),
                  },
                }
              : el,
          ),
        },
      };
    },
    setCorrectAnswer() // state,
    // action: PayloadAction<{index: number; answer: string; checked: boolean}>,
    {
      // const question = state.test.questions.find(
      //   el => el.id === state.currentQuestion,
      // )!;
      // in progress
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
  setCorrectAnswer,
  selectCurrentQuestion,
  addTestSettings,
  saveQuestion,
} = testSlice.actions;
