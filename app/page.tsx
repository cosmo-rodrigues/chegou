'use client';

import { Button, Grid, Stack, Typography } from '@mui/material';
import NightModeToggle from './components/NightModeToggle';
export default function Home() {
  return (
    <Grid
      container
      height='100vh'
      alignItems='center'
      justifyContent='center'
      direction='column'
    >
      <Typography variant='h2' className='text-blue-500'>
        Using Material UI with Next.js 13
      </Typography>
      <h4 className='text-red-500'>(with Tailwind CSS)</h4>
      <Stack direction='row' columnGap={1}>
        <Button variant='text' className='text-red-500'>
          Text
        </Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
        <NightModeToggle />
      </Stack>
    </Grid>
  );
}
