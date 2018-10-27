import React from 'react';
import { socialMedia } from '../config';

import {
  IconGithub,
  IconLinkedin,
  IconInstagram,
  IconTwitter,
  IconKeybase,
  IconXing,
} from '../components/icons';

export const createSocialLinks = (SocialItem, SocialLink) =>
  socialMedia &&
  socialMedia.map(({ url, name }, i) => (
    <SocialItem key={i}>
      <SocialLink href={url} target="_blank" rel="nofollow noopener noreferrer" aria-label={name}>
        {name === 'Github' ? (
          <IconGithub />
        ) : name === 'Linkedin' ? (
          <IconLinkedin />
        ) : name === 'Instagram' ? (
          <IconInstagram />
        ) : name === 'Twitter' ? (
          <IconTwitter />
        ) : name === 'Keybase' ? (
          <IconKeybase />
        ) : name === 'Xing' ? (
          <IconXing />
        ) : (
          <IconGithub />
        )}
      </SocialLink>
    </SocialItem>
  ));
