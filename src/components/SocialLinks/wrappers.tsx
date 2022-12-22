import styled from '@emotion/styled';

export const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const ListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    display: block;
    width: 48px;
    height: 48px;

    path {
      fill: ${p => p.theme.colors.anchor};
      transition: fill 300ms ease;
    }
  }

  &:hover {
    > svg path {
      fill: ${p => p.theme.colors.anchorHover};
    }
  }
`;
