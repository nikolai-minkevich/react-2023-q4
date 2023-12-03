import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import IFormData from './interfaces/form-data';

export interface AppState {
  data: IFormData;
}

const initialState: AppState = {
  data: {
    name: '',
  },
};

export const searchSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IFormData>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = searchSlice.actions;

export default searchSlice.reducer;
