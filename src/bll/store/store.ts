import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {appReducer} from '../appReducer';
import {quizReducer} from '../quizReducer';
import {processReducer} from '@src/bll/processReducer';
import {resultReducer} from '@src/bll/resultReducer';
import {authReducer} from '@src/bll/authReducer';

const rootReducer = combineReducers({
  app: appReducer,
  authReducer,
  quizReducer,
  processReducer,
  resultReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;

export default store;
