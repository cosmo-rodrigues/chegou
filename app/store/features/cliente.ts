import { createSlice } from '@reduxjs/toolkit';
import { ICliente } from '@/types/index'
import { fetchClientes } from '../actions/cliente';

const initialState = {
  cliente: [] as ICliente[],
  loading: false,
  error: {}
}

export const clienteSlice = createSlice({
  name: 'cliente',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchClientes.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(fetchClientes.fulfilled, (state, action) => {
      state.cliente.push(...action.payload)
      state.loading = false;
    }),
    builder.addCase(fetchClientes.rejected, (state, action) => {
      state.error = action.error
    })
  }
})

export default clienteSlice.reducer
