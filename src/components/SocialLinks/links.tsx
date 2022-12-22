import React from 'react';

import { ReactComponent as EmailIcon } from './assets/envelope.svg';
import { ReactComponent as ResumeIcon } from './assets/file.svg';
import { ReactComponent as GitHubIcon } from './assets/github.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedin.svg';

interface LinkItem {
  href: string;
  icon: JSX.Element;
  label: string;
  title: string;
}

const links: LinkItem[] = [
  {
    href: 'mailto:brian@staruk.net',
    icon: <EmailIcon />,
    label: 'Email',
    title: 'Email me',
  },
  {
    href: 'https://github.com/bstaruk',
    icon: <GitHubIcon />,
    label: 'GitHub',
    title: 'Follow me on GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/brian-staruk',
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    title: 'Connect with me on LinkedIn',
  },
  {
    href: 'https://resume.brian.staruk.net',
    icon: <ResumeIcon />,
    label: 'Resume',
    title: 'Check out my resume',
  },
];

export default links;
