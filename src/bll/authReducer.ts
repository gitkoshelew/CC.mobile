import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {authAPI} from '@src/dal/authAPI';
import {setAppMessage, setIsFetching} from '@src/bll/appReducer';

export const register = createAsyncThunk(
  'auth/register',
  async (_, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));

    try {
      await authAPI.registration();
      dispatch(
        setAppMessage({
          text: 'register is successful',
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
    } finally {
      dispatch(setIsFetching(false));
    }
  },
);

export const login = createAsyncThunk('auth/login', async (_, {dispatch, rejectWithValue}) => {
  dispatch(setIsFetching(true));
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
  } finally {
    dispatch(setIsFetching(false));
  }
});

const slice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {},
});

export const authReducer = slice.reducer;

export const {} = slice.actions;
