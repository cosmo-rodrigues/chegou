import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchVeiculos = createAsyncThunk(
  'veiculo/getAllVeiculos',
  async () => {
    const response = await fetch(
      'https://api-deslocamento.herokuapp.com/api/v1/Veiculo'
    );
    const data = await response.json();

    return data;
  }
);
