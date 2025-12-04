# Changelog

All notable changes to JsonViewer.Blazor are documented here.

This project follows [Semantic Versioning](https://semver.org/).

---

## [0.0.4-beta] - 2025-12-03

### 🎉 Multi-Framework Support

This release adds support for multiple .NET versions!

### ✨ Added
- **Multi-targeting**: Now supports .NET 6, .NET 7, .NET 8, .NET 9, and .NET 10
- Automatic framework detection - package uses the correct build for your project
- Comprehensive test coverage across all frameworks

### 🔧 Changed
- Updated package structure for multi-framework support
- Improved build pipeline for cross-framework compatibility
- Enhanced NuGet package metadata

### 📦 Dependencies
- Each framework uses its corresponding `Microsoft.AspNetCore.Components.Web` version
- .NET 10 uses preview packages

---

## [0.0.3-beta] - 2025-12-02

### ✨ Added
- Dark and Light theme support with persistence
- JSON statistics panel (size, depth, type distribution)
- Real-time search with match highlighting
- Keyboard shortcuts (Enter, Shift+Enter for navigation)
- Copy to clipboard functionality
- Export to JSON file

### 🔧 Changed
- Improved syntax highlighting colors
- Better performance for large JSON files
- Enhanced UI responsiveness

### 🐛 Fixed
- Line number alignment issues
- Theme toggle state persistence
- Search match navigation bugs

---

## [0.0.2-beta] - 2025-11-28

### ✨ Added
- Edit mode with JSON validation
- Auto-formatting (beautify) feature
- Expand/Collapse all functionality
- Line numbers display
- Active line highlighting

### 🔧 Changed
- Modernized toolbar design
- Improved expand/collapse animations
- Better error messages for invalid JSON

### 🐛 Fixed
- Component state reset on JSON change
- Nested object rendering issues
- Memory leaks on component disposal

---

## [0.0.1-beta] - 2025-11-15

### 🎉 Initial Release

First beta release of JsonViewer.Blazor!

### ✨ Features
- VS Code-style syntax highlighting
- Collapsible JSON tree view
- Responsive design
- Blazor WebAssembly support

---

## Roadmap

### [0.1.0] - Coming Soon

- [ ] Virtual scrolling for large files
- [ ] JSONPath query support
- [ ] JSON diff viewer
- [ ] Schema validation
- [ ] Custom toolbar configuration

### [0.2.0] - Planned

- [ ] Blazor Server support
- [ ] Read-only mode improvements
- [ ] Accessibility enhancements
- [ ] Localization support

### [1.0.0] - Future

- [ ] Stable API
- [ ] Complete documentation
- [ ] Full test coverage
- [ ] Performance optimizations

---

## Migration Guides

### From 0.0.2 to 0.0.3

No breaking changes. Simply update the package:

```bash
dotnet add package JsonViewer.Blazor --version 0.0.3-beta
```

### From 0.0.3 to 0.0.4

No breaking changes. Multi-framework support is automatic:

```bash
dotnet add package JsonViewer.Blazor --version 0.0.4-beta
```

---

## Links

- [📦 NuGet Package](https://www.nuget.org/packages/JsonViewer.Blazor)
- [🐙 GitHub Repository](https://github.com/JsonViewer-Component/Blazor)
- [🐛 Report Issues](https://github.com/JsonViewer-Component/Blazor/issues)
- [💬 Discussions](https://github.com/JsonViewer-Component/Blazor/discussions)

