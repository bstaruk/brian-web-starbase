import React from 'react';

import Text from 'components/Text';
import links from './links';
import { ListWrapper, ListItemWrapper, LinkWrapper, LinkLabelWrapper } from './wrappers';

const SocialLinks = () => (
  <ListWrapper initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
    {links.map(({ href, icon, label, title }, index) => (
      <ListItemWrapper
        key={index}
        variants={{
          offscreen: {
            x: -50 - index * 50,
          },
          onscreen: {
            x: 0,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 0.8,
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
