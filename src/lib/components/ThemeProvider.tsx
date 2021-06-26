import React, { FC } from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { GridThemeProvider, BaseCSS } from 'styled-bootstrap-grid';

import GlobalStyles from './GlobalStyles';

export const theme = {
  grid: {}
};

const ThemeProvider: FC<any> = ({ children }) => (
  <StyledComponentsProvider theme={theme}>
    <GridThemeProvider gridTheme={theme.grid}>
      <>
        <BaseCSS />
        <GlobalStyles />
        {children}
      </>
    </GridThemeProvider>
  </StyledComponentsProvider>
);

export default ThemeProvider;
