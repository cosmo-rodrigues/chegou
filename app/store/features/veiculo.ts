import { createSlice } from '@reduxjs/toolkit';
import { IVeiculo } from '@/types/index';
import { fetchVeiculos } from '../actions/veiculo';

const initialState = {
  veiculos: [] as IVeiculo[],
  loading: false,
  error: {},
};

export const veiculoSlice = createSlice({
  name: 'veiculo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVeiculos.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchVeiculos.fulfilled, (state, action) => {
        state.veiculos.push(...action.payload);
        state.loading = false;
      }),
      builder.addCase(fetchVeiculos.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default veiculoSlice.reducer;
