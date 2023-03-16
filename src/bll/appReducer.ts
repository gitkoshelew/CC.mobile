import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppMessageType} from '@customTypes/notificationTypes';

export type ThemeType = 'light' | 'dark';
export type SeverityType = 'error' | 'success';

export type AppStateT = {
  isFetching: boolean;
  messages: AppMessageType[];
  isScrollEnabled: boolean;
  currentTheme: ThemeType;
};

const slice = createSlice({
  name: 'app',
  initialState: {
    messages: [],
    isFetching: false,
    isScrollEnabled: true,
    currentTheme: 'light',
  } as AppStateT,
  reducers: {
    setAppMessage(state, action: PayloadAction<{text: string; severity: SeverityType}>) {
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
    setCurrentTheme(state, action: PayloadAction<ThemeType>) {
      state.currentTheme = action.payload;
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
  setCurrentTheme,
} = slice.actions;
