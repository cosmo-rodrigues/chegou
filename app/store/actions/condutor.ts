import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCondutores = createAsyncThunk(
  'condutor/getAllCondutores',
  async () => {
    const response = await fetch(
      'https://api-deslocamento.herokuapp.com/api/v1/Condutor'
    );
    const data = await response.json();

    return data;
  }
);