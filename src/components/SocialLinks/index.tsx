import React from 'react';

import { ReactComponent as EmailIcon } from './assets/envelope.svg';
import { ReactComponent as GitHubIcon } from './assets/github.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedin.svg';
import { ListWrapper, ListItemWrapper, LinkWrapper } from './wrappers';

const links = [
  {
    href: 'mailto:brian@staruk.net',
    icon: <EmailIcon />,
    title: 'Email me',
  },
  {
    href: 'https://github.com/bstaruk',
    icon: <GitHubIcon />,
    title: 'Follow me on GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/brian-staruk',
    icon: <LinkedInIcon />,
    title: 'Connect with me on LinkedIn',
  },
];

const SocialLinks = () => (
  <ListWrapper>
    {links.map((link, index) => (
      <ListItemWrapper key={index}>
        <LinkWrapper href={link.href} target="_blank" title={link.title}>
          {link.icon}
        </LinkWrapper>
      </ListItemWrapper>
    ))}
  </ListWrapper>
);

export default SocialLinks;
