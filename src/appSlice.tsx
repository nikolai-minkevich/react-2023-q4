import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import IFormData from './interfaces/form-data';

export interface AppState {
  dataNewForm: IFormData;
  dataOldForm: IFormData;
}

const initialState: AppState = {
  dataNewForm: {
    name: '',
    age: 0,
    email: '',
    gender: '',
    isAccept: false,
  },
  dataOldForm: {
    name: '',
    age: 0,
    email: '',
    gender: '',
    isAccept: false,
  },
};

export const searchSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDataNewForm: (state, action: PayloadAction<IFormData>) => {
      state.dataNewForm = action.payload;
    },
    setDataOldForm: (state, action: PayloadAction<IFormData>) => {
      state.dataOldForm = action.payload;
    },
  },
});

export const { setDataNewForm } = searchSlice.actions;

export default searchSlice.reducer;
