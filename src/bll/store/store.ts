import {configureStore} from '@reduxjs/toolkit';
import {appReducer} from '../appReducer';
import {testReducer} from '../testReducer';
import {processReducer} from '@src/bll/processReducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    testReducer,
    processReducer,
  },
});

export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;

export default store;
