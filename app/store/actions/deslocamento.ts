import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDeslocamentos = createAsyncThunk(
  'deslocamento/getAllDeslocamentos',
  async () => {
    const response = await fetch(
      'https://api-deslocamento.herokuapp.com/api/v1/Deslocamento'
    );
    const data = await response.json();

    return data;
  }
);
