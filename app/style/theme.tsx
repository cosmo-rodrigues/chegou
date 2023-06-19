'use client';

import { PaletteMode } from '@mui/material';
import { amber, deepOrange, grey, red } from '@mui/material/colors';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#003DF0',
          },
          secondary: {
            main: '#F0562F',
          },
          success: {
            main: '#60A308',
          },
          error: {
            main: red.A400,
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
