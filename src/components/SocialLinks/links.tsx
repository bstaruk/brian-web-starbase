import React from 'react';

import { ReactComponent as EmailIcon } from './assets/envelope.svg';
import { ReactComponent as GitHubIcon } from './assets/github.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedin.svg';

interface LinkItem {
  href: string;
  icon: JSX.Element;
  title: string;
}

const links: LinkItem[] = [
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

export default links;
