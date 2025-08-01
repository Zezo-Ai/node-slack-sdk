/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  sidebarNode: [
    {
      type: 'doc',
      id: 'index', // document ID
      label: 'Node Slack SDK', // sidebar label
      className: 'sidebar-title',
    },
    'getting-started',
    'typescript',
    'packages/web-api',
    'packages/oauth',
    'packages/rtm-api',
    'packages/webhook',
    'packages/socket-mode',
    {
      type: 'category',
      label: 'Migration',
      items: [
        'migration/migrating-to-v4',
        'migration/migrating-to-v5',
        'migration/migrating-to-v6',
        'migration/migrating-socket-mode-package-to-v2',
        'migration/migrating-web-api-package-to-v7',

      ],
    },
    {
      type: 'category',
      label: 'Deprecated packages',
      items: [
        'packages/events-api',
        'packages/interactive-messages',
      ],
    },
    {type: 'html', value: '<hr>'},
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/local-development'
      ],
    },
    {type: 'html', value: '<hr>'},
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
        slug: '/reference',
      },
      items: [
      {
        type: 'autogenerated',
        dirName: 'reference',
      },
    ]
    },
    {type: 'html', value: '<hr>'},
    'support-schedule',
    {
      type: 'link',
      label: 'Release notes',
      href: 'https://github.com/SlackAPI/node-slack-sdk/releases',
    },
    {
      type: 'link',
      label: 'Code on GitHub',
      href: 'https://github.com/SlackAPI/node-slack-sdk',
    },
    {
      type: 'link',
      label: 'Contributors Guide',
      href: 'https://github.com/SlackAPI/node-slack-sdk/blob/main/.github/contributing.md',
    },

  ],
};

export default sidebars;
