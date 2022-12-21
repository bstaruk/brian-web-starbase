import React from 'react';
import { Helmet } from 'react-helmet-async';

import Link from 'components/Link';
import Text from 'components/Text';
import { Wrapper, HeaderWrapper } from './wrappers';

const HomePage = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <Wrapper>
      <HeaderWrapper>
        <Text as="h1" variant="h1">
          brian.staruk.net
        </Text>

        <Text as="p">
          <>
            I{"'"}m a web developer from Boston with a passion for creating elegant, functional user
            experiences with modern front-end technologies including React, Webpack, ES6, PostCSS &
            semantic HTML. To learn more about me,{' '}
            <Link href="https://resume.brian.staruk.net" target="_blank">
              check out my resume
            </Link>{' '}
            or{' '}
            <Link href="https://www.linkedin.com/in/brian-staruk" target="_blank">
              add me on LinkedIn
            </Link>
            .
          </>
        </Text>
      </HeaderWrapper>
    </Wrapper>
  </>
);

export default HomePage;
