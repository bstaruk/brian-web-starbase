import React from 'react';

import Text from 'components/Text';
import links from './links';
import { ListWrapper, ListItemWrapper, LinkWrapper, LinkLabelWrapper } from './wrappers';

const SocialLinks = () => (
  <ListWrapper initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.8 }}>
    {links.map(({ href, icon, label, title }, index) => (
      <ListItemWrapper
        key={index}
        variants={{
          offscreen: {
            y: 75 + index * 75,
          },
          onscreen: {
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.3,
              duration: 1,
            },
          },
        }}
      >
        <LinkWrapper target="_blank" {...{ href, title }}>
          {icon}
          <LinkLabelWrapper>
            <Text as="span" variant="body-sm">
              {label}
            </Text>
          </LinkLabelWrapper>
        </LinkWrapper>
      </ListItemWrapper>
    ))}
  </ListWrapper>
);

export default SocialLinks;
