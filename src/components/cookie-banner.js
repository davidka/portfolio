import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'gatsby';

import { theme } from '../styles';

const CookieBanner = () => (
  <CookieConsent
    buttonStyle={{
      color: theme.colors.green,
      backgroundColor: 'transparent',
      border: `1px solid ${theme.colors.green}`,
      borderRadius: theme.borderRadius,
      fontFamily: theme.fonts.SourceCodePro,
    }}
    style={{
      backgroundColor: theme.colors.lightNavy,
      border: `1px solid ${theme.colors.green}`,
      borderRadius: '1px',
      fontSize: theme.fontSizes.smallish,
    }}>
    This website uses cookies to ensure you get the best experience on our website.&nbsp;
    <Link to="/data-privacy/" style={{ textDecoration: 'underline' }}>
      More info
    </Link>
  </CookieConsent>
);

export default CookieBanner;
