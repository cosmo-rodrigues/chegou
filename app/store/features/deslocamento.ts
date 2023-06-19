import { createSlice } from '@reduxjs/toolkit';
import { IDeslocamento } from '@/types/index';
import { fetchDeslocamentos } from '../actions/deslocamento';

const initialState = {
  deslocamentos: [] as IDeslocamento[],
  loading: false,
  error: {},
};

export const deslocamentoSlice = createSlice({
  name: 'deslocamento',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDeslocamentos.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchDeslocamentos.fulfilled, (state, action) => {
        state.deslocamentos.push(...action.payload);
        state.loading = false;
      }),
      builder.addCase(fetchDeslocamentos.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default deslocamentoSlice.reducer;
