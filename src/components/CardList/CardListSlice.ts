import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface CardListState {
  term: string;
  selectedCardId: string;
}

const initialState: CardListState = {
  term: localStorage.getItem('term') || '',
  selectedCardId: '',
};

export const CardListSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSelectedCardId: (state, action: PayloadAction<string>) => {
      state.selectedCardId = action.payload;
    },
  },
});

export const { setSelectedCardId } = CardListSlice.actions;

export default CardListSlice.reducer;
