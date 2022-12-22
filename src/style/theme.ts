import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    fonts: {
      sans: string;
      serif: string;
    };
    colors: {
      background: string;
      foreground: string;
      anchor: string;
      anchorHover: string;
    };
  }
}

const theme: Theme = {
  fonts: {
    sans: "'PT Sans', sans-serif",
    serif: "'PT Serif', serif",
  },
  colors: {
    background: '#F2F0EC',
    foreground: '#3F3A4F',
    anchor: '#725D84',
    anchorHover: '#725D84',
  },
};

export default theme;
