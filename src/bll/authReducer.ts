import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {authAPI} from '@src/dal/authAPI';
import {setAppMessage} from '@src/bll/appReducer';

export const login = createAsyncThunk('auth/login', async (_, {dispatch, rejectWithValue}) => {
  try {
    await authAPI.login();
    dispatch(
      setAppMessage({
        text: 'Sign in is successful',
        severity: 'success',
      }),
    );
  } catch (e) {
    const err = e as Error | AxiosError;
    dispatch(
      setAppMessage({
        text: 'Something went wrong',
        severity: 'error',
      }),
    );
    return rejectWithValue(err.message);
  }
});

const slice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {},
});

export const authReducer = slice.reducer;

export const {} = slice.actions;
