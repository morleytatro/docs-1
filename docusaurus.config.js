module.exports = {
  title: 'Documentation',
  tagline: 'Bit',
  url: 'https://bit-harmony-stg.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'teambit', // Usually your GitHub org/user name.
  projectName: 'docs-harmony', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'v15 Harmony',
      logo: {
        alt: 'v15 Harmony',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/getting-started/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {href: 'https://blog.bitsrc.io/tagged/bit', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/teambit/bit',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://bit.dev/support',
          label: 'Help',
          position: 'right',
        },
        {
          href: 'https://docs.bit.dev',
          label: 'Bit Legacy Docs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bit.dev`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/teambit/docs-harmony/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};