/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Expedite',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://expeditejs.github.io',
    pinned: true,
  },
];

const siteConfig = {
  title: 'expediteJS' /* title for your website */,
  tagline: 'A multi-device app generator',
  url: 'https://expeditejs.github.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  cleanUrl: true,
  cname:'',
  defaultVersionShown: '0.0.1',    
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'expeditejs',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    {page:'about', label:'About Us'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  

  /* path to images for header/footer */
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#e5f30a',
    secondaryColor: '#e6630d',
  },
  editUrl: 'https://github.com/expeditejs/docs/edit/master/docs/',
  /* custom fonts for website */
  fonts: {
    myFont: [
      "Montserrat",
      "Sans Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    '© ' +
    new Date().getFullYear() + ' ' +
    'expediteJS',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'vs2015',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
  /* Open Graph and Twitter card images */
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
