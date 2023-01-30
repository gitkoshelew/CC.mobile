import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppMessageType} from '@customTypes/notificationTypes';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type AppStateT = {
  status: RequestStatusType;
  messages: AppMessageType[];
};

const slice = createSlice({
  name: 'app',
  initialState: {
    status: 'idle',
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
  },
});

export const appReducer = slice.reducer;

export const {removeLastMessage, hideAppMessage, setAppMessage} = slice.actions;
