import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {authAPI} from '@src/dal/authAPI';
import {setAppMessage, setIsFetching} from '@src/bll/appReducer';
import {AuthTypes} from '@customTypes/auth-types';

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
export const getAuth = createAsyncThunk('auth/me', async (_, {dispatch, rejectWithValue}) => {
  try {
    const res = await authAPI.auth();
    dispatch(setStateAuth(res.data));
  } catch (e) {
    const err = e as Error | AxiosError;
    dispatch(
      setAppMessage({
        text: 'You are not registered',
        severity: 'error',
      }),
    );
    return rejectWithValue(err.message);
  }
});

type IAuth = {
  auth: AuthTypes;
};
const initialState: IAuth = {
  auth: {} as AuthTypes,
};

const slice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setStateAuth: (state, {payload}: PayloadAction<AuthTypes>) => {
      state.auth = payload;
    },
  },
});

export const authReducer = slice.reducer;

export const {setStateAuth} = slice.actions;
