import React from 'react';
import { Helmet } from 'react-helmet-async';

import Text from 'components/Text';
import SocialLinks from 'components/SocialLinks';
import { Wrapper, PageWrapper, SectionWrapper } from './wrappers';

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat mauris sed quam
            euismod luctus nec et ante. Nulla finibus lobortis tellus, eget laoreet turpis molestie
            sed. Nulla enim est, dignissim a ligula eget, faucibus convallis turpis. Nullam pulvinar
            blandit leo nec porttitor. Ut tristique lobortis iaculis. Morbi scelerisque risus nec
            aliquam tempus. Sed placerat leo libero, id ultricies nunc laoreet ac.
          </Text>
        </SectionWrapper>
      </PageWrapper>

      <PageWrapper>
        <SectionWrapper>
          <SocialLinks />
        </SectionWrapper>
      </PageWrapper>
    </Wrapper>
  </>
);

export default HomePage;
