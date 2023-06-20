'use client';

import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { fetchVeiculos } from './store/actions/veiculo';
import NavBar from './components/NavBar';

export default function Home() {
  // const cliente = useAppSelector((state) => state.cliente);
  // const condutor = useAppSelector((state) => state.condutor);
  const deslocamento = useAppSelector((state) => state.deslocamento);
  const veiculo = useAppSelector((state) => state.veiculo);
  const ref = useRef(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!ref.current) {
      // dispatch(fetchClientes());
      dispatch(fetchVeiculos());
    }

    return () => {
      ref.current = true;
    };
  }, []);

  return (
    <main>
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
    </main>
  );
}
