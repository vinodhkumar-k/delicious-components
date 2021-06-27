import React, { FC } from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { GridThemeProvider, BaseCSS } from 'styled-bootstrap-grid';

import GlobalStyles from './GlobalStyles';

const palette = {
  primary_100: '#F6FD39',
  primary_200: '#E4FABF',
  primary_300: '#D2F895',
  primary_400: '#ABED0D',
  primary_500: '#00A846',
  primary_600: '#067A46',
  primary_700: '#056835',
  primary_800: '#035624',
  info_100: '#E9FAFF',
  info_800: '#00178C',
  negative_100: '#FFEAE9',
  negative_200: '#FFCCCA',
  negative_500: '#DB1D1D',
  negative_600: '#B30000',
  negative_700: '#970000',
  negative_800: '#7C0000',
  warning_100: '#FFECD3',
  warning_500: '#EF670A',
  warning_600: '#CE4500',
  warning_700: '#A43700',
  reward_200: '#FFFAB2',
  reward_400: '#FFE900',
  reward_500: '#E2C700',
  neutral_100: '#FFFFFF',
  neutral_200: '#F8F8F8',
  neutral_300: '#EEEEEE',
  neutral_400: '#E4E4E4',
  neutral_500: '#BBBBBB',
  neutral_700: '#676767',
  neutral_800: '#343434',
};

const breakpoints = {
  /** Above 1200 */
  xl: '1200px',
  /** Between 1024 and  1199 */
  lg: '1024px',
  /** Between 768 and  1023 */
  md: '768px',
  /** Below 767 */
  sm: '0px',
};

/**
 * Breakpoints as integers for styled-bootstrap-grid
 */
 export const rawBreakpoints = {
  /** Above 1200 */
  xl: parseInt(breakpoints.xl, 10),
  /** Between 1024 and  1199 */
  lg: parseInt(breakpoints.lg, 10),
  /** Between 768 and  1023 */
  md: parseInt(breakpoints.md, 10),
  /** Below 767 */
  sm: parseInt(breakpoints.sm, 10),
};

/**
 * We use this array to set the breakpoints scale for styled-system.
 * we skip breakpoints.sm because styled-system already takes care of the initial breakpoint.
 * https://styled-system.com/#responsive-styles
 */
 const BREAKPOINTS_SCALE = [breakpoints.md, breakpoints.lg, breakpoints.xl];

 const mediaQueries = {
   sm: `@media screen and (min-width: ${breakpoints.sm})`,
   md: `@media screen and (min-width: ${breakpoints.md})`,
   lg: `@media screen and (min-width: ${breakpoints.lg})`,
   xl: `@media screen and (min-width: ${breakpoints.xl})`,
 };

 const fonts = [
  'Montserrat, Verdana, Geneva, sans-serif',
  "'Source Sans Pro', 'Trebuchet MS', Helvetica, sans-serif",
];
fonts.primary = fonts[0];
fonts.secondary = fonts[1];

const fontSizes: any = [14, 16, 20, 24, 32];
fontSizes.sm = fontSizes[0];
fontSizes.md = fontSizes[1];
fontSizes.lg = fontSizes[2];
fontSizes.xl = fontSizes[3];
fontSizes.xxl = fontSizes[4];


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
