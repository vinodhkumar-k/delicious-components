import { createGlobalStyle } from 'styled-components';
import css from '@styled-system/css';
import { media } from 'styled-bootstrap-grid';

const GlobalStyles = createGlobalStyle`
  body {
    ${css({
      margin: 0,
      fontFamily: 'secondary',
      fontSize: 'sm',
      lineHeight: 'sm',
      backgroundColor: 'neutral_100',
      color: 'text'
    })}
  }
`;

export default GlobalStyles;
