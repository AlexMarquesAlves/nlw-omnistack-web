import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global-styles';
import { theme } from './theme';

export const MyThemeProvider = ({ children }: MyThemeProvider) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

interface MyThemeProvider {
  children: ReactNode;
}
