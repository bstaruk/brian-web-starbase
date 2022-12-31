import styled from '@emotion/styled';
import Text from 'components/Text';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  overflow: hidden;

  &:nth-of-type(even) {
    background: #fff;
  }
`;

export const SectionWrapper = styled.section`
  max-width: 75ch;
  margin: 0 auto 24px;
  padding: 24px;
  text-align: center;

  > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const TitleWrapper = styled(Text)`
  > span {
    opacity: 0.25;
  }
`;

export const DownIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 24px;
  margin-left: -18px;
  width: 36px;
  height: 36px;
  opacity: 0.25;

  svg {
    display: block;
    width: 36px;
    height: 36px;

    path {
      fill: ${p => p.theme.colors.foreground};
    }
  }
`;
