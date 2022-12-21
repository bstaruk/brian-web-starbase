import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Global, ThemeProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import styles from 'style/globalStyle';
import theme from 'style/theme';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider {...{ theme }}>
          {children}
          <Global {...{ styles }} />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
