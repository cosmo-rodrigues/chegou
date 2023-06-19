import { configureStore } from '@reduxjs/toolkit';
import clientesSlice from './features/cliente';
import condutorSlice from './features/condutor';
import deslocamentoSlice from './features/deslocamento';
import veiculoSlice from './features/veiculo';

export const store = configureStore({
  reducer: {
    cliente: clientesSlice,
    condutor: condutorSlice,
    deslocamento: deslocamentoSlice,
    veiculo: veiculoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
