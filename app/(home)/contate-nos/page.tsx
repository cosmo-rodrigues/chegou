'use client';

import Head from 'next/head';

import { Box } from '@mui/material';
import { usePageTabContext } from '@/app/context/PageTabContextProvider';
import { useEffect } from 'react';
import { PAGE_INDEX } from '@/app/constants/pageIndex';

export default function ContateNos() {
  const { setTabValue } = usePageTabContext();
  useEffect(() => {
    setTabValue(PAGE_INDEX.contateNos);
  }, []);

  return (
    <Box>
      <Head>
        <title>Chegou - Fale conosco</title>
      </Head>
      <div>ContateNos</div>
    </Box>
  );
}
