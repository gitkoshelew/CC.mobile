import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {authAPI} from '@src/dal/authAPI';
import {setAppMessage, setIsFetching} from '@src/bll/appReducer';
import {AuthType, LoginType, RegistrationType} from '@customTypes/authAPI-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const register = createAsyncThunk(
  'auth/register',
  async (data: RegistrationType, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));

    try {
      await authAPI.registration(data);
      dispatch(
        setAppMessage({
          text: 'register is successful',
          severity: 'success',
        }),
      );
      dispatch(loginAC(true));
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

export const login = createAsyncThunk(
  'auth/login',
  async (data: LoginType, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));
    try {
      await authAPI.login(data);
      dispatch(
        setAppMessage({
          text: 'Sign in is successful',
          severity: 'success',
        }),
      );
      dispatch(loginAC(true));
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

export const logout = createAsyncThunk('auth/logout', (_, {dispatch, rejectWithValue}) => {
  dispatch(setIsFetching(true));
  try {
    AsyncStorage.removeItem('token');
    dispatch(
      setAppMessage({
        text: 'Sign out is successful',
        severity: 'success',
      }),
    );
    dispatch(loginAC(false));
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

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));
    try {
      await authAPI.checkAuth();
      dispatch(
        setAppMessage({
          text: 'Token is save',
          severity: 'success',
        }),
      );
      dispatch(loginAC(true));
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

const slice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
  } as AuthType,
  reducers: {
    loginAC(state, action) {
      state.isAuth = action.payload;
    },
  },
});

export const authReducer = slice.reducer;

export const {loginAC} = slice.actions;
