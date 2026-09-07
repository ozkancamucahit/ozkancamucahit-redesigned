import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mucahito',
  tagline: 'Kodun arkasındaki düşünceler.',
  favicon: 'img/favicon.svg',
  url: 'https://ozkancamucahit.github.io',
  baseUrl: '/ozkancamucahit-redesigned/',
  organizationName: 'ozkancamucahit',
  projectName: 'ozkancamucahit-redesigned',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['tr', 'en'],
    localeConfigs: {
      tr: {label: 'Türkçe', htmlLang: 'tr-TR'},
      en: {label: 'English', htmlLang: 'en-US'},
    },
  },
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          postsPerPage: 6,
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Latest writing',
          feedOptions: {type: 'all'},
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      {name: 'theme-color', content: '#17100e'},
      {
        name: 'description',
        content: 'Mucahito — developer insights, projeler ve öğrenilenler.',
      },
    ],
    navbar: {
      title: 'mucahito.dev',
      logo: {src: 'img/logo.svg', alt: 'Mucahito'},
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/blog', label: 'Writing', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    prism: {
      additionalLanguages: ['csharp'],
      theme: {
        plain: {color: '#3b2417', backgroundColor: '#f5eee7'},
        styles: [
          {types: ['comment'], style: {color: '#806b5c'}},
          {types: ['string', 'keyword'], style: {color: '#a54422'}},
          {types: ['function'], style: {color: '#b9652d'}},
        ],
      },
      darkTheme: {
        plain: {color: '#e8e3df', backgroundColor: '#1d1b1a'},
        styles: [
          {types: ['comment'], style: {color: '#a99d95'}},
          {types: ['string'], style: {color: '#b8d19a'}},
          {types: ['keyword'], style: {color: '#e4a06f'}},
          {types: ['function'], style: {color: '#d8c09f'}},
          {types: ['class-name', 'return-type'], style: {color: '#4ec9b0'}},
          {types: ['parameter', 'property'], style: {color: '#9cdcfe'}},
          {types: ['punctuation', 'operator'], style: {color: '#d4d4d4'}},
        ],
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
