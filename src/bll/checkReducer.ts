import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IDataOptions} from '@src/components/AnswersOptions';

const initialState: IState = {
  options: [],
};
type IState = {
  options: IDataOptions[];
};

const checkSlice = createSlice({
  name: 'check',
  initialState: initialState,
  reducers: {
    changeStateCheck: (state, {payload}: PayloadAction<IDataOptions>) => {
      state.options = [
        ...state.options.map(item =>
          item.value === payload.value ? {...item, isChecked: payload.isChecked} : item,
        ),
      ];
    },
    setStateCheck: (state, {payload}: PayloadAction<IDataOptions[]>) => {
      state.options = payload;
    },
    clearStateCheck: state => {
      state.options = [];
    },
  },
});

export const checkReducer = checkSlice.reducer;

export const {changeStateCheck, clearStateCheck, setStateCheck} = checkSlice.actions;
