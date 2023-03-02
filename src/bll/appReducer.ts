import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppMessageType} from '@customTypes/notificationTypes';

export type AppStateT = {
  isFetching: boolean;
  messages: AppMessageType[];
  isScrollEnabled: boolean;
};

const slice = createSlice({
  name: 'app',
  initialState: {
    messages: [],
    isFetching: false,
    isScrollEnabled: true,
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
    setIsScrollEnabled(state, action: PayloadAction<boolean>) {
      state.isScrollEnabled = action.payload;
    },
  },
});

export const appReducer = slice.reducer;

export const {
  removeLastMessage,
  hideAppMessage,
  setAppMessage,
  setIsFetching,
  setIsScrollEnabled,
} = slice.actions;
