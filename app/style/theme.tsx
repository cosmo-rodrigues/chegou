'use client';

import { PaletteMode } from '@mui/material';
import { amber, blue, red, blueGrey, grey } from '@mui/material/colors';
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
            main: '#0079FF',
            default: '#fcfcfc',
          },
          secondary: {
            main: '#FF0060',
            default: '#F6FA70',
          },
          background: {
            default: blue[50],
            paper: blue[50],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#0B2447',
            default: '#19376D',
          },
          secondary: {
            main: '#576CBC',
            default: '#A5D7E8',
          },
          background: {
            default: '#0B2447',
            paper: '#19376D',
          },
          text: {
            primary: '#fff',
            secondary: grey[200],
          },
        }),
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
