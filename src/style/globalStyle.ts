import { css, Theme } from '@emotion/react';

const globalStyles = (theme: Theme) => css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Helvetica Neue', sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.foreground};
  }

  ::selection {
    background-color: ${theme.colors.foreground};
    color: ${theme.colors.background};
  }
`;

export default globalStyles;
