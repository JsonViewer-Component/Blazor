# 📚 JsonViewer.Blazor Documentation

This folder contains the VitePress documentation site for JsonViewer.Blazor.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Development

```bash
# Navigate to docs-site
cd docs-site

# Install dependencies
npm install

# Start development server
npm run docs:dev
```

Open http://localhost:5173/Blazor/docs/ in your browser.

### Build

```bash
npm run docs:build
```

### Preview Production Build

```bash
npm run docs:preview
```

## 📁 Structure

```
docs-site/
├── .vitepress/
│   ├── config.ts          # VitePress configuration
│   └── theme/
│       ├── index.ts       # Theme setup
│       └── custom.css     # Custom styles
├── public/
│   └── logo.png           # Site logo (copy from Documents/assets/)
├── guide/
│   ├── introduction.md
│   ├── installation.md
│   ├── getting-started.md
│   ├── configuration.md
│   ├── themes.md
│   ├── customization.md
│   └── features/
│       ├── search.md
│       ├── statistics.md
│       ├── export.md
│       └── edit-mode.md
├── examples/
│   ├── basic.md
│   ├── readonly.md
│   ├── editable.md
│   ├── dynamic.md
│   ├── large-files.md
│   └── custom-styling.md
├── api/
│   ├── components.md
│   ├── parameters.md
│   ├── events.md
│   └── methods.md
├── changelog.md
└── index.md               # Home page
```

## 🎨 Customization

### Theme Colors

Edit `.vitepress/theme/custom.css` to change colors:

```css
:root {
  --vp-c-brand-1: #6366f1;
  --vp-c-brand-2: #818cf8;
  --vp-c-brand-3: #4f46e5;
}
```

### Navigation

Edit `.vitepress/config.ts` to modify navigation and sidebar.

## 📦 Deployment

The site is automatically deployed via GitHub Actions when changes are pushed to the `docs-site/` folder.

## 📝 Logo Setup

Copy the logo to the public folder:

```bash
# From project root
copy Documents\assets\logo.png docs-site\public\logo.png
```

Or on Unix:
```bash
cp Documents/assets/logo.png docs-site/public/logo.png
```

