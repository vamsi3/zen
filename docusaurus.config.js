const ayuDarkTheme = require('./src/themes/ayuDark.js')
const remarkMath = require('remark-math')

const projectName = 'zen'

/** @type {import('@docusaurus/types').Config} */
async function createConfig() {
  const rehypeKatex = (await import('rehype-katex')).default;
  
  return {
    title: 'Project ZEN',
    tagline: 'A collection of my knowledge',
    url: 'https://vamsi3.github.io',
    baseUrl: `/${projectName}/`,
    trailingSlash: true,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
  
    // GitHub pages deployment config.
    organizationName: 'vamsi3',
    projectName: projectName,
  
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },
  
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC',
        crossorigin: 'anonymous',
      },
    ],
  
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            editUrl: `https://github.com/vamsi3/${projectName}/edit/master/`,
            numberPrefixParser: false,
            rehypePlugins: [
              [
                rehypeKatex,
                {
                  output: 'html',
                  minRuleThickness: 0.06,
                  strict: false
                },
              ],
            ],
            remarkPlugins: [remarkMath],
            routeBasePath: '/',
            showLastUpdateTime: true,
            sidebarCollapsed: true,
            sidebarPath: require.resolve('./sidebars.js'),
          },
          blog: {
            blogDescription: 'A blog containing all my notes to any interesting content',
            blogSidebarCount: 'ALL',
            blogSidebarTitle: 'All notes',
            blogTitle: 'Notes to vamsi3\'s Project ZEN',
            editLocalizedFiles: false,
            editUrl: `https://github.com/vamsi3/${projectName}/edit/master/`,
            feedOptions: {
              type: null,
              copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
              language: 'en',
            },
            path: 'blog',
            rehypePlugins: [
              [
                rehypeKatex,
                {
                  output: 'html',
                  minRuleThickness: 0.06,
                  strict: false
                },
              ],
            ],
            remarkPlugins: [remarkMath],
            routeBasePath: 'notes',
            showReadingTime: true,
            sortPosts: 'ascending'
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
          sitemap: {
            changefreq: 'weekly',
            priority: 0.5,
            ignorePatterns: [`/${projectName}/notes/**`],
            filename: 'sitemap.xml',
          },
        }),
      ],
    ],
  
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        docs: {
          sidebar: {
            hideable: true
          }
        },
        navbar: {
          title: 'Project ZEN',
          logo: {
            alt: 'Project ZEN Logo',
            src: 'img/logo.png',
            srcDark: 'img/logo_dark.png'
          },
          hideOnScroll: true,
          items: [
            {
              type: 'doc',
              position: 'left',
              docId: 'cp/home',
              label: 'Data Structures / Algorithms',
            },
            {
              type: 'doc',
              position: 'left',
              docId: 'cpp/home',
              label: 'C++20',
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
            {
              type: 'doc',
              position: 'left',
              docId: 'cloud/home',
              label: 'Cloud',
            },
            // {
            //   to: 'notes',
            //   label: 'Notes',
            //   position: 'right'
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
              href: `https://github.com/vamsi3/${projectName}`,
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository',
            },
          ],
        },
        footer: {
          logo: {
            alt: 'Project ZEN',
            src: 'img/logo_dark.png',
            width: "10%",
            href: 'https://vamsi3.github.io',
          },
          style: 'dark',
          copyright: `© ${new Date().getFullYear()} Satti Vamsi Krishna Reddy • All rights reserved • Do not copy or distribute`,
        },
        prism: {
          theme: ayuDarkTheme,
          darkTheme: ayuDarkTheme,
          defaultLanguage: 'cpp',
          additionalLanguages: ['python', 'java', 'kotlin', 'bash' ,'docker', 'shell-session'],
        },
      }),
  }
}

module.exports = createConfig
