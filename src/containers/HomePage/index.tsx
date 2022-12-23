import React from 'react';
import { Helmet } from 'react-helmet-async';

import Text from 'components/Text';
import SocialLinks from 'components/SocialLinks';
import { ReactComponent as DownIcon } from './assets/down.svg';
import { Wrapper, PageWrapper, SectionWrapper, DownIconWrapper } from './wrappers';

const HomePage = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <Wrapper>
      <PageWrapper>
        <SectionWrapper>
          <Text as="h1" variant="h1">
            brian.staruk.net
          </Text>

          <Text as="p">
            <>
              I{"'"}m a husband, animal lover, gamer and homebrewer from Boston, MA. More
              relevantly, I{"'"}m a front-end web developer with a passion for user and dev
              experience. Crafting polished, accessible interfaces with React and implementing them
              with an airtight CI/CD flow is my specialty.
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
  </>
);

export default HomePage;
