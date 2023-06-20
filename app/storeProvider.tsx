'use client';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { useThemeContext } from './context/ThemeContextProvider';
import { ThemeProvider } from '@mui/material';

export function Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeContext();
  
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
