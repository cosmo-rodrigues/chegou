import { createSlice } from '@reduxjs/toolkit';
import { ICondutor } from '@/types/index';
import { fetchCondutores } from '../actions/condutor';

const initialState = {
  condutores: [] as ICondutor[],
  loading: false,
  error: {},
};

export const condutorSlice = createSlice({
  name: 'condutor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCondutores.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchCondutores.fulfilled, (state, action) => {
        state.condutores.push(...action.payload);
        state.loading = false;
      }),
      builder.addCase(fetchCondutores.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default condutorSlice.reducer;
