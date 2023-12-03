import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface AppState {
  name: string;
}

const initialState: AppState = {
  name: '',
};

export const searchSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = searchSlice.actions;

export default searchSlice.reducer;
