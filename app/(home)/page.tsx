'use client';

import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchVeiculos } from '../store/actions/veiculo';
import { PAGE_INDEX } from '../constants/pageIndex';
import { usePageTabContext } from '../context/PageTabContextProvider';
import { Box } from '@mui/material';

export default function Home() {
  // const cliente = useAppSelector((state) => state.cliente);
  // const condutor = useAppSelector((state) => state.condutor);
  const deslocamento = useAppSelector((state) => state.deslocamento);
  const veiculo = useAppSelector((state) => state.veiculo);
  const ref = useRef(false);
  const dispatch = useAppDispatch();
  const { setTabValue } = usePageTabContext();

  useEffect(() => {
    setTabValue(PAGE_INDEX.home);

    if (!ref.current) {
      // dispatch(fetchClientes());
      dispatch(fetchVeiculos());
    }

    return () => {
      ref.current = true;
    };
  }, []);

  return (
    <Box className='h-screen' sx={{ backgroundColor: 'primary.default', color: 'text.primary'}}>
      <ol>
        {veiculo.loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1>veiculos</h1>
            {veiculo.veiculos.map((client) => (
              <li key={client.id}>{client.marcaModelo}</li>
            ))}
          </>
        )}
      </ol>
    </Box>
  );
}
