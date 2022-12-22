import React from 'react';

import Text from 'components/Text';
import links from './links';
import { ListWrapper, ListItemWrapper, LinkWrapper, LinkLabelWrapper } from './wrappers';

const SocialLinks = () => (
  <ListWrapper>
    {links.map(({ href, icon, label, title }, index) => (
      <ListItemWrapper key={index}>
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
