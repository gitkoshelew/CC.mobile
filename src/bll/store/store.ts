import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import {appReducer} from '../appReducer';
import {createTestReducer} from '../createTestReducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    createTest: createTestReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;

export default store;
