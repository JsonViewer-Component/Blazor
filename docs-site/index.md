---
layout: home

hero:
  name: "JsonViewer"
  text: "For Blazor"
  tagline: "🚀 A powerful, feature-rich JSON viewer component with VS Code-style syntax highlighting, dark/light themes, search, statistics, and more!"
  image:
    src: /logo.png
    alt: JsonViewer.Blazor
  actions:
    - theme: brand
      text: 🚀 Get Started
      link: /guide/getting-started
    - theme: alt
      text: 📦 View on NuGet
      link: https://www.nuget.org/packages/JsonViewer.Blazor
    - theme: alt
      text: ⭐ Star on GitHub
      link: https://github.com/JsonViewer-Component/Blazor

features:
  - icon: 🎨
    title: VS Code Styling
    details: Beautiful syntax highlighting with support for Dark & Light themes that automatically persist user preferences.
    link: /guide/themes
    linkText: Learn about themes

  - icon: 🔍
    title: Powerful Search
    details: Real-time search with match highlighting, navigation between results using Enter/Shift+Enter keyboard shortcuts.
    link: /guide/features/search
    linkText: Explore search

  - icon: 📊
    title: JSON Statistics
    details: View comprehensive stats including size, depth, node count, and type distribution at a glance.
    link: /guide/features/statistics
    linkText: See statistics

  - icon: ✏️
    title: Edit Mode
    details: Built-in JSON editor with auto-formatting, syntax validation, and real-time preview.
    link: /guide/features/edit-mode
    linkText: Learn editing

  - icon: 📋
    title: Copy & Export
    details: One-click copy to clipboard and export as formatted JSON file with proper encoding.
    link: /guide/features/export
    linkText: Export options

  - icon: ⚡
    title: High Performance
    details: Optimized for large JSON files with lazy rendering and efficient DOM manipulation.
    link: /examples/large-files
    linkText: Performance tips

  - icon: 🎯
    title: Multi-Framework
    details: Supports .NET 6, .NET 7, .NET 8, .NET 9, and .NET 10 - works with any Blazor project!
    link: /guide/installation
    linkText: Installation guide

  - icon: 🌐
    title: Fully Responsive
    details: Looks great on any device - from mobile phones to ultra-wide monitors.
    link: /examples/custom-styling
    linkText: Customization
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
}
</style>

## 🚀 Quick Install

::: code-group

```bash [.NET CLI]
dotnet add package JsonViewer.Blazor
```

```bash [Package Manager]
Install-Package JsonViewer.Blazor
```

```xml [PackageReference]
<PackageReference Include="JsonViewer.Blazor" Version="0.0.4-beta" />
```

:::

## ⚡ Quick Start

```razor
@using JsonViewer.Blazor

<JsonViewer Json="@myJson" />

@code {
    private string myJson = """
    {
        "name": "JsonViewer.Blazor",
        "version": "0.0.4-beta",
        "features": ["Search", "Themes", "Export", "Statistics"]
    }
    """;
}
```

## 💖 Sponsors

<p align="center">
  <a href="https://github.com/sponsors/JsonViewer-Component">
    <img src="https://img.shields.io/badge/♥-Sponsor%20this%20project-ff69b4?style=for-the-badge" alt="Sponsor">
  </a>
</p>

## 📈 Stats

<p align="center">
  <img src="https://img.shields.io/nuget/dt/JsonViewer.Blazor?style=for-the-badge&logo=nuget&color=6366f1" alt="NuGet Downloads">
  <img src="https://img.shields.io/github/stars/JsonViewer-Component/Blazor?style=for-the-badge&logo=github&color=a855f7" alt="GitHub Stars">
  <img src="https://img.shields.io/github/license/JsonViewer-Component/Blazor?style=for-the-badge&color=ec4899" alt="License">
</p>

