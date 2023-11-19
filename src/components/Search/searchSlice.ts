import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface SearchState {
  term: string;
}

const initialState: SearchState = {
  term: localStorage.getItem('term') || '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
  },
});

export const { setTerm } = searchSlice.actions;

export default searchSlice.reducer;
