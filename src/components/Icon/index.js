import React from 'react';
import { ReactComponent as AppleIcon } from './apple.svg';
import { ReactComponent as GitHubIcon } from './github.svg';
import { ReactComponent as TwitterIcon } from './twitter.svg';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import { ReactComponent as EmailIcon } from './email.svg';

const iconTypes = {
  apple: AppleIcon,
  github: GitHubIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
}

export default function Icon({ type, link, ...props }) {
  const IconComponent = iconTypes[type];
  const renderedComponent = <IconComponent className={link && "hover:fill-current"} {...props} />

  if (link) {
    return (
      <a href={link}>
        {renderedComponent}
      </a>
    );
  }

  return renderedComponent;
};