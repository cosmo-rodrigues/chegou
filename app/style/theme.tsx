'use client';

import { PaletteMode } from '@mui/material';
import { amber, blue, red, blueGrey } from '@mui/material/colors';
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
            main: blue[900],
          },
          secondary: {
            main: red[500],
          },
          background: {
            default: blue[50],
            paper: blue[50],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: blue[900],
          },
          secondary: {
            main: red[500],
          },
          background: {
            default: blueGrey[900],
            paper: blueGrey[900],
          },
        }),
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
