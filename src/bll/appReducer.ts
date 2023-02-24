import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppMessageType} from '@customTypes/notificationTypes';

export type AppStateT = {
  isLogin: boolean;
  isFetching: boolean;
  messages: AppMessageType[];
};

const slice = createSlice({
  name: 'app',
  initialState: {
    isLogin: false,
    isFetching: false,
    messages: [],
  } as AppStateT,
  reducers: {
    setAppMessage(
      state,
      action: PayloadAction<{text: string; severity: 'error' | 'success'}>,
    ) {
      const newMessage: AppMessageType = {
        id: Math.random(),
        severity: action.payload.severity,
        text: action.payload.text,
      };
      state.messages.push(newMessage);
    },
    removeLastMessage(state) {
      state.messages = state.messages.splice(0, state.messages.length - 1);
    },
    hideAppMessage(state, action: PayloadAction<number>) {
      state.messages = state.messages.filter(el => el.id !== action.payload);
    },
    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
    setIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});

export const appReducer = slice.reducer;

export const {removeLastMessage, hideAppMessage, setAppMessage, setIsFetching, setIsLogin} =
  slice.actions;
