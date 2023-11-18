import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  term: string;
}

const initialState: CounterState = {
  term: localStorage.getItem('term') || '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
    search: (state) => {
      localStorage.setItem('term', state.term);
    },
  },
});

export const { setTerm, search } = searchSlice.actions;

export default searchSlice.reducer;
