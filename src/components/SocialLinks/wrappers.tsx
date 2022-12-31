import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ListWrapper = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
`;

export const ListItemWrapper = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 24px 32px 40px;
  color: ${p => p.theme.colors.anchor};
  text-decoration: none;

  > svg {
    display: block;
    width: 56px;
    height: 56px;

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

export const LinkLabelWrapper = styled.span`
  display: block;
  position: absolute;
  left: 0;
  bottom: 8px;
  width: 100%;
  text-align: center;

  span {
    display: block;
  }
`;
