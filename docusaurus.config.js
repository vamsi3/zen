module.exports = {
  title: 'Welcome!',
  tagline: 'A collection of my knowledge',
  url: 'https://vamsi3.github.io',
  baseUrl: '/zen/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'vamsi3', // Usually your GitHub org/user name.
  projectName: 'zen', // Usually your repo name.
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
          editUrl: 'https://github.com/vamsi3/zen/edit/master/', // Please change this to your repo.
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
