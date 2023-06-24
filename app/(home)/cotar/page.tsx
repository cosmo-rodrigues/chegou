'use client';

import { PAGE_INDEX } from '@/app/constants/pageIndex';
import { usePageTabContext } from '@/app/context/PageTabContextProvider';
import { Box } from '@mui/material';
import { useEffect } from 'react';

export default function Cotar() {
  const { setTabValue } = usePageTabContext();
  useEffect(() => {
    setTabValue(PAGE_INDEX.cotar);
  }, []);

  return (
    <Box>
      <div>Cotar</div>
    </Box>
  );
}
