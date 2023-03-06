import {createAsyncThunk} from '@reduxjs/toolkit';
import {setAppMessage, setCurrentTheme, ThemeType} from '@src/bll/appReducer';
import {AxiosError} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const changeTheme = createAsyncThunk(
  'app/changeTheme',
  async (param: ThemeType, {dispatch, rejectWithValue}) => {
    try {
      AsyncStorage.setItem('theme', param).then(() => dispatch(setCurrentTheme(param)));
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
    }
  },
);
