import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "JsonViewer.Blazor",
  description: "A powerful JSON viewer component for Blazor applications",

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'JsonViewer.Blazor Documentation' }],
    ['meta', { name: 'og:description', content: 'A powerful JSON viewer component for Blazor' }],
    ['meta', { name: 'og:image', content: '/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  base: '/Blazor/docs/',
  outDir: './.vitepress/dist',

  cleanUrls: true,

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '📚 Guide', link: '/guide/getting-started' },
      { text: '🎨 Examples', link: '/examples/basic' },
      { text: '📖 API', link: '/api/components' },
      {
        text: '🔗 Links',
        items: [
          { text: '📦 NuGet', link: 'https://www.nuget.org/packages/JsonViewer.Blazor' },
          { text: '🐙 GitHub', link: 'https://github.com/JsonViewer-Component/Blazor' },
          { text: '🚀 Live Demo', link: 'https://jsonviewer-component.github.io/Blazor/' },
          { text: '📝 Changelog', link: '/changelog' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '🚀 Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/getting-started' }
          ]
        },
        {
          text: '⚙️ Configuration',
          items: [
            { text: 'Basic Setup', link: '/guide/configuration' },
            { text: 'Themes', link: '/guide/themes' },
            { text: 'Customization', link: '/guide/customization' }
          ]
        },
        {
          text: '🎯 Features',
          items: [
            { text: 'Search', link: '/guide/features/search' },
            { text: 'Statistics', link: '/guide/features/statistics' },
            { text: 'Export', link: '/guide/features/export' },
            { text: 'Edit Mode', link: '/guide/features/edit-mode' }
          ]
        }
      ],
      '/examples/': [
        {
          text: '📝 Examples',
          items: [
            { text: 'Basic Usage', link: '/examples/basic' },
            { text: 'Read-Only Mode', link: '/examples/readonly' },
            { text: 'Editable Mode', link: '/examples/editable' },
            { text: 'Dynamic Loading', link: '/examples/dynamic' },
            { text: 'Large JSON Files', link: '/examples/large-files' },
            { text: 'Custom Styling', link: '/examples/custom-styling' }
          ]
        }
      ],
      '/api/': [
        {
          text: '📖 API Reference',
          items: [
            { text: 'Components', link: '/api/components' },
            { text: 'Parameters', link: '/api/parameters' },
            { text: 'Events', link: '/api/events' },
            { text: 'Methods', link: '/api/methods' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JsonViewer-Component/Blazor' },
      { icon: 'twitter', link: 'https://twitter.com/jsonviewerblazor' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2025 Parsa Panahpoor. All rights reserved.'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search...',
            buttonAriaLabel: 'Search documentation'
          },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Reset search',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate'
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/JsonViewer-Component/Blazor/edit/main/docs-site/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  }
})

