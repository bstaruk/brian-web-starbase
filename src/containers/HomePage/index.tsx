import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import Text from 'components/Text';
import SocialLinks from 'components/SocialLinks';
import { ReactComponent as DownIcon } from './assets/down.svg';
import { Wrapper, PageWrapper, SectionWrapper, TitleWrapper, DownIconWrapper } from './wrappers';

const HomePage = () => {
  const bottomPageRef = useRef<HTMLDivElement>(null);

  const onDownButtonClick = () => {
    if (bottomPageRef?.current) {
      bottomPageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Wrapper>
      <PageWrapper>
        <SectionWrapper>
          <motion.div
            initial={{ x: -32, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.3 }}
            viewport={{ amount: 0.1, once: false }}
          >
            <TitleWrapper as="h1" variant="h1">
              <>
                brian<span>.</span>staruk<span>.net</span>
              </>
            </TitleWrapper>
          </motion.div>

          <motion.div
            initial={{ x: -32, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            viewport={{ amount: 0.1, once: false }}
          >
            <Text as="p">
              <>
                I{"'"}m a husband, animal lover, gamer and homebrewer from Boston, MA. I{"'"}m also
                a front-end web developer with a passion for user and dev experience. Crafting
                polished, accessible interfaces with React and implementing them with an airtight
                CI/CD flow is my specialty.
              </>
            </Text>
          </motion.div>
        </SectionWrapper>

        <DownIconWrapper aria-hidden="true" onClick={onDownButtonClick}>
          <DownIcon />
        </DownIconWrapper>
      </PageWrapper>

      <PageWrapper ref={bottomPageRef}>
        <SectionWrapper>
          <motion.div
            initial={{ x: -32, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.3 }}
            viewport={{ amount: 0.5, once: false }}
          >
            <Text as="h2" variant="h2">
              <>let{"'"}s connect</>
            </Text>
          </motion.div>

          <SocialLinks />
        </SectionWrapper>
      </PageWrapper>
    </Wrapper>
  );
};

export default HomePage;
