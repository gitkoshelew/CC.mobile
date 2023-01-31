import {configureStore} from '@reduxjs/toolkit';
import {appReducer} from '../appReducer';
import {quizReducer} from '../quizReducer';
import {processReducer} from '@src/bll/processReducer';
import {resultReducer} from '@src/bll/resultReducer';
import {checkReducer} from '@src/bll/checkReducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    quizReducer,
    processReducer,
    resultReducer,
    checkReducer,
  },
});

export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;

export default store;
