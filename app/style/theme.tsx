'use client';

import { PaletteMode } from '@mui/material';
import {
  amber,
  cyan,
  deepOrange,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  orange,
  red,
} from '@mui/material/colors';
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
            main: lightBlue[900],
          },
          secondary: {
            main: deepOrange[500],
          },
          success: {
            main: lightGreen.A400,
          },
          error: {
            main: red.A400,
          },
          text: {
            primary: '#fCfCfC',
            secondary: grey[900],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: indigo[900],
          },
          secondary: {
            main: deepOrange[900],
          },
          success: {
            main: cyan[500],
          },
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
