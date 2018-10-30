module.exports = {
  siteTitle: 'David Hahn | Passionated Software Engineer',
  siteDescription: 'Passionated Software Engineer. Freelancer. Smarthome Enthusiast.',
  siteKeywords:
    'David Hahn, David, Hahn, davidka, software engineer, front-end engineer, web developer, javascript, germany',
  siteUrl: 'https://davidhahn.software',
  siteLanguage: 'en_US',
  siteImage: '',

  googleVerification: '1aWqJQFJZbSj1ouflqWfBr6_bbCDf9VRmku3YQWCT9M',

  name: 'David Hahn',
  street: 'Hemke 5c',
  location: 'D-49565 Bramsche',
  mobile: '+49 (0) 176 / 7685 1939',
  email: 'info@davidhahn.software',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/davidka',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/david-hahn-2b677383/',
    },
    {
      name: 'Xing',
      url: 'https://www.xing.com/profile/David_Hahn10',
    },
    {
      name: 'Keybase',
      url: 'https://keybase.io/davidka',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/davidkah',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@davidkah',

  googleAnalyticsID: 'UA-128412557-1',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
