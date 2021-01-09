const remarkMath = require("remark-math")
const rehypeKatex = require("rehype-katex")

module.exports = {
  title: 'Project Zen',
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
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    announcementBar: {
      id: 'support-me',
      content: '⭐️ If you like Project Zen, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/vamsi3/zen">GitHub</a>! ⭐️',
    },
    navbar: {
      title: 'Project Zen',
      logo: {
        alt: 'Project Zen Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo_dark.png'
      },
      items: [
        {
          href: 'https://codeforces.com/profile/vamsi3',
          label: 'Codeforces',
          position: 'left',
        },
        {
          href: 'https://www.codechef.com/users/vamsikrishna_3',
          label: 'Codechef',
          position: 'left',
        },
        {
          href: 'https://atcoder.jp/users/vamsi3',
          label: 'AtCoder',
          position: 'left',
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
        alt: 'Project Zen',
        src: 'img/logo_dark.png',
        href: 'https://vamsi3.github.io',
      },
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Satti Vamsi Krishna Reddy. Built with Docusaurus.`,
    },
    prism: {
      defaultLanguage: 'cpp',
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/nightOwl'),
    },
    // algolia: {
    //   apiKey: '',
    //   indexName: '',
    //   contextualSearch: true,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/vamsi3/zen/edit/master/',
          routeBasePath: '/',
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {output: 'html', minRuleThickness: 0.06}]],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
