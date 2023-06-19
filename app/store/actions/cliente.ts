import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchClientes = createAsyncThunk(
  'cliente/getAllClientes',
  async () => {
    const response = await fetch(
      'https://api-deslocamento.herokuapp.com/api/v1/Cliente'
    );
    const data = await response.json();

    return data;
  }
);