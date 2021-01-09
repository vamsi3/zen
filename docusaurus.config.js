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
    navbar: {
      title: 'Project Zen',
      logo: {
        alt: 'Project Zen Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://vamsi3.github.io',
          label: 'Home',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Satti Vamsi Krishna Reddy. Built with Docusaurus.`,
    },
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
