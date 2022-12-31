import React from 'react';

import { Wrapper } from './wrappers';

export interface TextProps {
  as?: React.ElementType;
  children: string | number | JSX.Element;
  variant?: 'h1' | 'h2' | 'body' | 'body-sm';
}

const Text = ({ as, children, variant = 'body', ...props }: TextProps) => (
  <Wrapper {...{ as, variant, ...props }}>{children}</Wrapper>
);

export default Text;
