import styled from '@emotion/styled';

export const Wrapper = styled.a`
  font-weight: 700;
  color: ${p => p.theme.colors.anchor};
  text-decoration: none;

  &:hover {
    color: ${p => p.theme.colors.anchorHover};
    text-decoration: underline;
  }
`;
