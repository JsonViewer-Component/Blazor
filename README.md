<div align="center">

![JsonViewer Blazor Logo](logo.png)

# 🚀 JsonViewer.Blazor

### A powerful, feature-rich JSON viewer component for Blazor applications

[![NuGet Version](https://img.shields.io/nuget/v/JsonViewer.Blazor?style=for-the-badge&logo=nuget&color=blue)](https://www.nuget.org/packages/JsonViewer.Blazor/)
[![NuGet Downloads](https://img.shields.io/nuget/dt/JsonViewer.Blazor?style=for-the-badge&logo=nuget&color=green)](https://www.nuget.org/packages/JsonViewer.Blazor/)
[![GitHub Stars](https://img.shields.io/github/stars/JsonViewer-Component/Blazor?style=for-the-badge&logo=github)](https://github.com/JsonViewer-Component/Blazor/stargazers)
[![License](https://img.shields.io/github/license/JsonViewer-Component/Blazor?style=for-the-badge)](LICENSE)

[![Build Status](https://img.shields.io/github/actions/workflow/status/JsonViewer-Component/Blazor/build.yml?style=for-the-badge&logo=github-actions)](https://github.com/JsonViewer-Component/Blazor/actions)
[![Code Quality](https://img.shields.io/codacy/grade/YOUR_PROJECT_ID?style=for-the-badge&logo=codacy)](https://www.codacy.com/)
[![Coverage](https://img.shields.io/codecov/c/github/JsonViewer-Component/Blazor?style=for-the-badge&logo=codecov)](https://codecov.io/)
[![.NET Version](https://img.shields.io/badge/.NET-6.0%20%7C%207.0%20%7C%208.0-512BD4?style=for-the-badge&logo=dotnet)](https://dotnet.microsoft.com/)

[📖 Documentation](https://jsonviewer-component.github.io/Blazor/) •
[🎮 Live Demo](https://jsonviewer-component.github.io/Blazor/demo) •
[🐛 Report Bug](https://github.com/JsonViewer-Component/Blazor/issues/new?template=bug_report.md) •
[✨ Request Feature](https://github.com/JsonViewer-Component/Blazor/issues/new?template=feature_request.md) •
[💬 Discussions](https://github.com/JsonViewer-Component/Blazor/discussions)

<img src="https://raw.githubusercontent.com/JsonViewer-Component/Blazor/main/Documents/demo.gif" alt="Demo" width="800"/>

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Visual Excellence**
- VS Code-style syntax highlighting
- Dark & Light theme support
- Smooth animations & transitions
- Fully responsive design
- Line numbers with highlighting

</td>
<td width="50%">

### ⚡ **Performance**
- Handles large JSON files efficiently
- Virtual scrolling support
- Optimized rendering
- Lazy loading
- Memory efficient

</td>
</tr>
<tr>
<td width="50%">

### 🔍 **Search & Navigation**
- Real-time search with highlighting
- Keyboard shortcuts (Enter, Shift+Enter)
- Navigate between matches
- Case-insensitive search
- Match counter

</td>
<td width="50%">

### 📊 **Advanced Features**
- JSON statistics panel
- Edit mode with validation
- Copy & Export functionality
- Expand/Collapse nodes
- Auto-formatting

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Installation

```bash
dotnet add package JsonViewer.Blazor
```

or via Package Manager Console:

```powershell
Install-Package JsonViewer.Blazor
```

### Basic Usage

**1. Add namespace to `_Imports.razor`:**

```razor
@using JsonViewerComponent
@using JsonViewerComponent.Components
```

**2. Use the component:**

```razor
@page "/json-demo"

<JsonViewer JsonData="@jsonString" IsEditable="true" />

@code {
    private string jsonString = @"{
        ""name"": ""John Doe"",
        ""age"": 30,
        ""email"": ""john.doe@example.com"",
        ""hobbies"": [""reading"", ""gaming"", ""coding""]
    }";
}
```

---

## 📚 Documentation

### Usage Examples

<details>
<summary><b>📖 Read-Only Mode</b></summary>

```razor
<JsonViewer JsonData="@jsonData" IsEditable="false" />
```

</details>

<details>
<summary><b>✏️ Editable Mode with Two-Way Binding</b></summary>

```razor
<JsonViewer @bind-JsonData="jsonData" IsEditable="true" />

@code {
    private string jsonData = "{}";
}
```

</details>

<details>
<summary><b>🔄 Dynamic JSON Loading</b></summary>

```razor
<button @onclick="LoadSampleData">Load Sample</button>
<JsonViewer JsonData="@jsonData" IsEditable="true" />

@code {
    private string jsonData = "";

    private void LoadSampleData()
    {
        jsonData = @"{""userId"": 1, ""userName"": ""Alice""}";
    }
}
```

</details>

<details>
<summary><b>🎨 Custom Styling</b></summary>

```razor
<JsonViewer
    JsonData="@jsonData"
    IsEditable="true"
    Theme="dark"
    ShowLineNumbers="true"
    EnableSearch="true" />
```

</details>

### ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Enter` | Navigate to next search match |
| `Shift + Enter` | Navigate to previous search match |
| `Escape` | Clear search |
| `Ctrl + F` | Focus search box |
| `Ctrl + C` | Copy JSON |

---

## 🎨 Themes

The component supports both **Dark** and **Light** themes with automatic localStorage persistence:

```razor
<!-- Theme persists across page refreshes -->
<JsonViewer JsonData="@jsonData" Theme="dark" />
```

---

## 📊 JSON Statistics

Get detailed insights about your JSON:

- **Total Size** (bytes)
- **Total Properties**
- **Object Count**
- **Array Count**
- **Max Depth**
- **Average Array Length**

Access statistics via the stats button in the sidebar.

---

## 🗺️ Roadmap

- [x] Basic JSON viewer with syntax highlighting
- [x] Search and navigation
- [x] Theme support (Dark/Light)
- [x] Edit mode with validation
- [x] JSON statistics
- [ ] Custom themes support
- [ ] Plugin system
- [ ] Export to multiple formats (XML, CSV, YAML)
- [ ] JSON Schema validation
- [ ] Diff viewer
- [ ] Performance profiler
- [ ] Mobile gestures

See the [open issues](https://github.com/JsonViewer-Component/Blazor/issues) for a full list of proposed features.

---

## 🤝 Contributing

We ❤️ contributions! Whether it's bug reports, feature requests, or pull requests - all contributions are welcome!

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a PR.

<details>
<summary><b>Development Setup</b></summary>

```bash
# Clone the repository
git clone https://github.com/JsonViewer-Component/Blazor.git

# Navigate to the project
cd Blazor

# Restore dependencies
dotnet restore

# Build the solution
dotnet build

# Run the demo
dotnet run --project src/Blazor.Demo/Blazor.Demo.csproj
```

See [DEVELOPMENT.md](DEVELOPMENT.md) for more details.

</details>

---

## 🐛 Bug Reports & Feature Requests

Found a bug? Have a great idea? We'd love to hear from you!

- 🐛 [Report a Bug](https://github.com/JsonViewer-Component/Blazor/issues/new?template=bug_report.md)
- ✨ [Request a Feature](https://github.com/JsonViewer-Component/Blazor/issues/new?template=feature_request.md)
- 💬 [Start a Discussion](https://github.com/JsonViewer-Component/Blazor/discussions)

---

## 📦 NuGet Packages

| Package | Version | Downloads |
|---------|---------|-----------|
| [JsonViewer.Blazor](https://www.nuget.org/packages/JsonViewer.Blazor) | [![NuGet](https://img.shields.io/nuget/v/JsonViewer.Blazor.svg)](https://www.nuget.org/packages/JsonViewer.Blazor/) | [![NuGet](https://img.shields.io/nuget/dt/JsonViewer.Blazor.svg)](https://www.nuget.org/packages/JsonViewer.Blazor/) |

---

## 🌟 Stargazers

[![Stargazers repo roster for @JsonViewer-Component/Blazor](https://reporoster.com/stars/JsonViewer-Component/Blazor)](https://github.com/JsonViewer-Component/Blazor/stargazers)

---

## 📈 Stats

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=JsonViewer-Component&repo=Blazor&show_icons=true&theme=radical)

</div>

---

## 💖 Support

If you find this project helpful, please consider:

<table align="center">
<tr>
<td align="center">
<a href="https://github.com/JsonViewer-Component/Blazor/stargazers">
<img src="https://img.shields.io/badge/⭐-Star_on_GitHub-yellow?style=for-the-badge" />
</a>
</td>
<td align="center">
<a href="https://github.com/sponsors/parsapanahpoor">
<img src="https://img.shields.io/badge/💖-Sponsor-pink?style=for-the-badge" />
</a>
</td>
<td align="center">
<a href="https://github.com/JsonViewer-Component/Blazor/issues">
<img src="https://img.shields.io/badge/🐛-Report_Bugs-red?style=for-the-badge" />
</a>
</td>
</tr>
</table>

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

**Parsa Panahpoor**

[![GitHub](https://img.shields.io/badge/GitHub-parsapanahpoor-181717?style=for-the-badge&logo=github)](https://github.com/parsapanahpoor)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/parsapanahpoor)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=for-the-badge&logo=twitter)](https://twitter.com/parsapanahpoor)
[![Website](https://img.shields.io/badge/Website-Visit-00C7B7?style=for-the-badge&logo=google-chrome)](https://parsapanahpoor.com)

</div>

---

## 🙏 Acknowledgments

Special thanks to:

- The amazing Blazor community
- All contributors who have helped improve this project
- Everyone who has starred, forked, or used this component

---

## 📞 Contact & Support

- 📧 **Email:** support@jsonviewer-component.com
- 💬 **Discord:** [Join our community](https://discord.gg/jsonviewer)
- 📖 **Docs:** [Documentation Site](https://jsonviewer-component.github.io/Blazor/)
- 🐦 **Twitter:** [@JsonViewerBlazor](https://twitter.com/jsonviewerblazor)

---

<div align="center">

### ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=JsonViewer-Component/Blazor&type=Date)](https://star-history.com/#JsonViewer-Component/Blazor&Date)

---

**Made with ❤️ by the JsonViewer Component Team**

[⬆ Back to Top](#-jsonviewerblazer)

</div>
