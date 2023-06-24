'use client';

import { PAGE_INDEX } from '@/app/constants/pageIndex';
import { usePageTabContext } from '@/app/context/PageTabContextProvider';
import { Box } from '@mui/material';
import { useEffect } from 'react';

export default function Rastrear() {
  const { setTabValue } = usePageTabContext();
  useEffect(() => {
    setTabValue(PAGE_INDEX.rastrear);
  }, []);

  return (
    <Box>
      <div>Rastrear</div>
    </Box>
  );
}
