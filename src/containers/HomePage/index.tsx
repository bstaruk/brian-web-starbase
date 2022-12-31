import React from 'react';

import Text from 'components/Text';
import SocialLinks from 'components/SocialLinks';
import { ReactComponent as DownIcon } from './assets/down.svg';
import { Wrapper, PageWrapper, SectionWrapper, TitleWrapper, DownIconWrapper } from './wrappers';

const HomePage = () => (
  <Wrapper>
    <PageWrapper>
      <SectionWrapper>
        <TitleWrapper as="h1" variant="h1">
          <>
            brian<span>.</span>staruk<span>.net</span>
          </>
        </TitleWrapper>

        <Text as="p">
          <>
            I{"'"}m a husband, animal lover, gamer and homebrewer from Boston, MA. I{"'"}m also a
            front-end web developer with a passion for user and dev experience. Crafting polished,
            accessible interfaces with React and implementing them with an airtight CI/CD flow is my
            specialty.
          </>
        </Text>
      </SectionWrapper>

      <DownIconWrapper aria-hidden="true">
        <DownIcon />
      </DownIconWrapper>
    </PageWrapper>

    <PageWrapper>
      <SectionWrapper>
        <Text as="h2" variant="h2">
          <>let{"'"}s connect</>
        </Text>

        <SocialLinks />
      </SectionWrapper>
    </PageWrapper>
  </Wrapper>
);

export default HomePage;
