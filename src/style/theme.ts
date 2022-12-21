import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    fonts: {
      sans: string;
      serif: string;
    };
    colors: {
      selectionBackground: string;
      background: string;
      foreground: string;
      black: string;
      blue: string;
      cyan: string;
      green: string;
      purple: string;
      red: string;
      white: string;
      yellow: string;
    };
  }
}

const theme: Theme = {
  fonts: {
    sans: "'PT Sans', sans-serif",
    serif: "'PT Serif', serif",
  },
  colors: {
    selectionBackground: '#44475A',
    background: '#282A36',
    foreground: '#F8F8F2',
    black: '#21222C',
    blue: '#BD93F9',
    cyan: '#8BE9FD',
    green: '#50FA7B',
    purple: '#FF79C6',
    red: '#FF5555',
    white: '#F8F8F2',
    yellow: '#F1FA8C',
  },
};

export default theme;
