import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {authAPI} from '@src/dal/authAPI';
import {setAppMessage, setIsFetching} from '@src/bll/appReducer';
import {LoginType, RegistrationType} from '@customTypes/authAPI-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthTypes} from '@customTypes/auth-types';
import {setAccessToken} from '@src/dal/instance';

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
      dispatch(authMe());
      dispatch(setIsLoggedIn(true));
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
      const response = await authAPI.login(data);
      await setAccessToken(response.data.accessToken);
      await AsyncStorage.setItem('refreshToken', response.headers['set-cookie']![0]);

      await dispatch(authMe());
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
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, {dispatch, rejectWithValue}) => {
    dispatch(setIsFetching(true));
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('refreshToken');
      dispatch(
        setAppMessage({
          text: 'Sign out is successful',
          severity: 'success',
        }),
      );
      dispatch(setIsLoggedIn(false));
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

export const authMe = createAsyncThunk('auth/me', async (_, {dispatch, rejectWithValue}) => {
  dispatch(setIsFetching(true));

  try {
    const res = await authAPI.authMe();
    dispatch(setStateAuth(res.data));
    dispatch(setIsLoggedIn(true));
  } catch (e) {
    const err = e as Error | AxiosError;
    dispatch(
      setAppMessage({
        text: 'You are not registered',
        severity: 'error',
      }),
    );
    return rejectWithValue(err.message);
  } finally {
    dispatch(setIsFetching(false));
  }
});

type IAuth = {
  auth: AuthTypes;
  isLoggedIn: boolean;
};
const initialState: IAuth = {
  auth: {} as AuthTypes,
  isLoggedIn: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setStateAuth: (state, {payload}: PayloadAction<AuthTypes>) => {
      state.auth = payload;
    },
    setIsLoggedIn(state, {payload}: PayloadAction<boolean>) {
      state.isLoggedIn = payload;
    },
  },
});

export const authReducer = slice.reducer;

export const {setStateAuth, setIsLoggedIn} = slice.actions;
