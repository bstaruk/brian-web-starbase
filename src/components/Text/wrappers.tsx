import styled from '@emotion/styled';
import { TextProps } from './index';

export const Wrapper = styled.div<TextProps>`
  color: ${p => p.theme.colors.white};

  /* body */
  ${p =>
    p.variant === 'body' &&
    `
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.02em;
    font-family: ${p.theme.fonts.sans};
    font-weight: 400;

    @media (min-width: 420px) {
      font-size: 19px;
    }
  `}

  /* h1 */
  ${p =>
    p.variant === 'h1' &&
    `
    font-size: 32px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    font-family: ${p.theme.fonts.serif};
    font-weight: 700;

    @media (min-width: 420px) {
      font-size: 46px;
    }

    @media (min-width: 760px) {
      font-size: 64px;
    }
  `}
`;
