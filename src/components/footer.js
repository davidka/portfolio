import React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';
import { theme, mixins, media } from '../styles';
import { createSocialLinks } from '../utils/social-links';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${theme.colors.darkNavy};
  color: ${theme.colors.slate};
  text-align: center;
  height: auto;
`;
const SocialContainer = styled.div`
  color: ${theme.colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`;
const SocialItem = styled.li``;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Copy = styled.p`
  margin: 5px 0 3px;
`;

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialItemList>{createSocialLinks(SocialItem, SocialLink)}</SocialItemList>
    </SocialContainer>
    <Copy>
      <Link to="/imprint/">Imprint</Link>
      2018 © All Rights Reserved.
    </Copy>
  </FooterContainer>
);

export default Footer;
