const remarkMath = require("remark-math")
const rehypeKatex = require("rehype-katex")

module.exports = {
  title: 'Project ZEN',
  tagline: 'A collection of my knowledge',
  url: 'https://vamsi3.github.io',
  baseUrl: '/zen/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'vamsi3',
  projectName: 'zen',
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-zTROYFVGOfTw7JV7KUu8udsvW2fx4lWOsCEDqhBreBwlHI4ioVRtmIvEThzJHGET',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    hideableSidebar: true,
    announcementBar: {
      id: 'support-me',
      content: '⭐️ If you like Project ZEN, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/vamsi3/zen">GitHub</a>! ⭐️',
    },
    navbar: {
      title: 'Project ZEN',
      logo: {
        alt: 'Project ZEN Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo_dark.png'
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'cp/home',
          label: 'Algorithms',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'dip/home',
          label: 'Image Processing',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'dl/home',
          label: 'Deep Learning',
        },
        // {
        //   type: 'doc',
        //   position: 'left',
        //   docId: 'cpp/home',
        //   label: 'C++',
        // },
        {
          label: 'CP Profiles',
          position: 'right',
          items: [
            {
              label: 'Codeforces',
              href: 'https://codeforces.com/profile/vamsi3'
            },
            {
              label: 'Codechef',
              href: 'https://www.codechef.com/users/vamsikrishna_3',
            },
            {
              label: 'AtCoder',
              href: 'https://atcoder.jp/users/vamsi3',
            }
          ],
        },
        {
          href: 'https://github.com/vamsi3/zen',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      logo: {
        alt: 'Project ZEN',
        src: 'img/logo_dark.png',
        href: 'https://vamsi3.github.io',
      },
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Satti Vamsi Krishna Reddy. Built with Docusaurus.`,
    },
    prism: {
      defaultLanguage: 'cpp',
      additionalLanguages: ['python', 'java', 'kotlin'],
      // theme: require('prism-react-renderer/themes/github'),
      // darkTheme: require('prism-react-renderer/themes/palenight'),
    },
    // algolia: {
    //   apiKey: '',
    //   indexName: '',
    //   contextualSearch: true,
    // },
    gtag: {
      trackingID: 'G-35E7VC4V7P',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    googleAdsense: {
      dataAdClient: "ca-pub-8010227322033974",
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarCollapsed: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/vamsi3/zen/edit/master/',
          routeBasePath: '/',
          showLastUpdateTime: true,
          numberPrefixParser: false,
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {output: 'html', minRuleThickness: 0.06}]],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-google-adsense',
  ],
};
