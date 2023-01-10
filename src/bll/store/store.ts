import {configureStore} from '@reduxjs/toolkit';
import {appReducer} from '../appReducer';
import {testReducer} from '../testReducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    createTest: testReducer,
  },
});

export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;

export default store;
