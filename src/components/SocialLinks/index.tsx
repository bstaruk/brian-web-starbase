import React from 'react';

import links from './links';
import { ListWrapper, ListItemWrapper, LinkWrapper } from './wrappers';

const SocialLinks = () => (
  <ListWrapper>
    {links.map((link, index) => {
      const { href, icon, title } = link;

      return (
        <ListItemWrapper key={index}>
          <LinkWrapper target="_blank" {...{ href, title }}>
            {icon}
          </LinkWrapper>
        </ListItemWrapper>
      );
    })}
  </ListWrapper>
);

export default SocialLinks;
