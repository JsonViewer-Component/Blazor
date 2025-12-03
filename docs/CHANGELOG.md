# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

<!-- Future changes go here -->

## [0.0.3-beta] - 2025-12-03

### ✨ Added
- Professional GitHub repository structure
- Multi-target publishing (NuGet.org + GitHub Packages + Release Assets)
- Comprehensive CI/CD pipelines
- Security policies and code of conduct
- Issue and PR templates
- Automated dependency updates via Dependabot
- CodeQL security analysis
- Stale issue/PR management

### 🔄 Changed
- Reorganized repository structure:
  - Moved community files to `.github/`
  - Moved documentation to `docs/`
  - Moved Docker files to `docker/`
  - Moved assets to `Documents/assets/`
- Translated all Persian comments to English
- Enhanced NuGet package metadata
- Improved workflow configurations

### 📚 Documentation
- Completely rewrote README.md in English
- Added DEVELOPMENT.md guide
- Added ROADMAP.md for future plans
- Added CHANGELOG.md for version tracking
- Added CONTRIBUTING.md guidelines
- Added SECURITY.md policy

### 🔧 DevOps
- Added GitHub Actions workflows:
  - Build & Test
  - Deploy to GitHub Pages
  - Publish to NuGet
  - CodeQL Security Analysis
  - Auto-labeling PRs
  - Greeting new contributors
  - Stale issue management

## [0.0.2-beta] - 2025-11-19

### ✨ Added
- VS Code-style JSON viewer with syntax highlighting
- Search functionality with match navigation (Enter/Shift+Enter)
- Expand/collapse all nodes feature
- JSON statistics panel with detailed metrics
- Theme toggle (Dark/Light) with localStorage persistence
- Copy and export capabilities
- Edit mode with auto-formatting and validation
- Responsive design for mobile and tablet
- Active line highlighting
- Smooth scroll navigation
- Line numbers with highlighting
- Keyboard shortcuts support

### 🐛 Fixed
- Improved performance for large JSON files
- Fixed search highlighting edge cases
- Enhanced theme switching smoothness
- Memory leak in component disposal
- Scroll synchronization issues

### 🔄 Changed
- Updated package dependencies
- Improved component architecture
- Enhanced error handling
- Optimized rendering performance

### 📚 Documentation
- Added comprehensive README
- Added usage examples
- Added API documentation
- Created migration guide

## [0.0.1-beta] - 2025-11-16

### ✨ Added
- Initial beta release
- Basic JSON viewing functionality
- Syntax highlighting
- Expand/collapse nodes
- Dark/Light theme support
- Basic search functionality

### Known Issues
- Performance degradation with files >50MB
- Search highlighting may not work in all cases
- Theme persistence issues in some browsers

---

## Release Types

- **Major**: Breaking changes
- **Minor**: New features (backward compatible)
- **Patch**: Bug fixes (backward compatible)
- **Beta**: Pre-release versions

## Upgrade Guide

### From 0.0.2-beta to 0.0.3-beta

No breaking changes. Simply update your package reference:

```bash
dotnet add package JsonViewer.Blazor --version 0.0.3-beta
```

### From 0.0.1-beta to 0.0.2-beta

No breaking changes. Simply update your package reference:

```bash
dotnet add package JsonViewer.Blazor --version 0.0.2-beta
```

---

## Contributing

See [CONTRIBUTING.md](../.github/CONTRIBUTING.md) for details on how to contribute to this project.

## Links

- [NuGet Package](https://www.nuget.org/packages/JsonViewer.Blazor)
- [GitHub Repository](https://github.com/JsonViewer-Component/Blazor)
- [Documentation](https://jsonviewer-component.github.io/Blazor/)
- [Issue Tracker](https://github.com/JsonViewer-Component/Blazor/issues)

---

**Legend:**
- ✨ Added - New features
- 🐛 Fixed - Bug fixes
- 🔄 Changed - Changes in existing functionality
- 🗑️ Deprecated - Soon-to-be removed features
- ❌ Removed - Removed features
- 🔒 Security - Security fixes
- 📚 Documentation - Documentation changes

[Unreleased]: https://github.com/JsonViewer-Component/Blazor/compare/v0.0.3-beta...HEAD
[0.0.3-beta]: https://github.com/JsonViewer-Component/Blazor/compare/v0.0.2-beta...v0.0.3-beta
[0.0.2-beta]: https://github.com/JsonViewer-Component/Blazor/compare/v0.0.1-beta...v0.0.2-beta
[0.0.1-beta]: https://github.com/JsonViewer-Component/Blazor/releases/tag/v0.0.1-beta
