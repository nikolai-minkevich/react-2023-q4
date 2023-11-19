import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PaginationState {
  pageNumber: number;
  totalPages: number;
  pageSize: number;
  firstPage: boolean;
  lastPage: boolean;
}

const initialState: PaginationState = {
  pageNumber: 0,
  totalPages: 0,
  pageSize: 5,
  firstPage: false,
  lastPage: false,
};

export const paginationSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
  },
});

export const { setPageNumber, setPageSize } = paginationSlice.actions;

export default paginationSlice.reducer;
