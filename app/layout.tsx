'use client';

import './globals.css';

import { CssBaseline } from '@mui/material';
import { ThemeContextProvider } from './context/ThemeContextProvider';
import { PageTabContextProvider } from './context/PageTabContextProvider';
import { Providers } from './(home)/Providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Chegou - Sua encomenda</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <ThemeContextProvider>
        <PageTabContextProvider>
          <body id='__next' suppressHydrationWarning={true}>
            <CssBaseline />
            <Providers>{children}</Providers>
          </body>
        </PageTabContextProvider>
      </ThemeContextProvider>
    </html>
  );
}
