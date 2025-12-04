# Installation

Getting started with JsonViewer.Blazor is quick and easy. Follow the steps below to add it to your project.

## 📦 Install the Package

Choose your preferred installation method:

::: code-group

```bash [.NET CLI]
dotnet add package JsonViewer.Blazor
```

```bash [Package Manager Console]
Install-Package JsonViewer.Blazor
```

```xml [PackageReference]
<PackageReference Include="JsonViewer.Blazor" Version="0.0.4-beta" />
```

:::

## ✅ Version Compatibility

JsonViewer.Blazor supports multiple .NET versions. The package will automatically use the appropriate version for your target framework:

| Your Project | Package Uses |
|--------------|--------------|
| .NET 6 | `net6.0` build |
| .NET 7 | `net7.0` build |
| .NET 8 | `net8.0` build |
| .NET 9 | `net9.0` build |
| .NET 10 | `net10.0` build |

## 📝 Register the Namespace

Add the namespace to your `_Imports.razor` file for global access:

```razor
@using JsonViewer.Blazor
```

Or add it directly in any `.razor` file where you want to use the component:

```razor
@using JsonViewer.Blazor

<JsonViewer Json="@myJson" />
```

## 🎨 Include Styles (Optional)

The component includes all necessary styles by default. However, if you want to customize the appearance, you can override the CSS variables:

```css
/* In your app.css or site.css */
:root {
    --json-viewer-bg: #1e1e1e;
    --json-viewer-text: #d4d4d4;
    --json-viewer-key: #9cdcfe;
    --json-viewer-string: #ce9178;
    --json-viewer-number: #b5cea8;
    --json-viewer-boolean: #569cd6;
    --json-viewer-null: #808080;
}
```

## 🧪 Verify Installation

Create a simple test to verify everything is working:

```razor
@page "/json-test"
@using JsonViewer.Blazor

<h1>JsonViewer Test</h1>

<JsonViewer Json="@testJson" />

@code {
    private string testJson = """
    {
        "message": "Hello, JsonViewer.Blazor!",
        "success": true,
        "version": "0.0.4-beta"
    }
    """;
}
```

## 🚀 Next Steps

Now that you have JsonViewer.Blazor installed, check out:

- [Quick Start Guide](/guide/getting-started) - Learn the basics
- [Configuration](/guide/configuration) - Customize the component
- [Examples](/examples/basic) - See it in action

