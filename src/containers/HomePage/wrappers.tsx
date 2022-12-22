import styled from '@emotion/styled';

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
  max-width: 90ch;
  margin: 0 auto 24px;
  padding: 24px;
  text-align: center;

  > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;
