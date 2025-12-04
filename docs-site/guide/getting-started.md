# Quick Start

This guide will get you up and running with JsonViewer.Blazor in just a few minutes!

## 🎯 Basic Usage

After [installing the package](/guide/installation), you can start using the component immediately:

```razor
@using JsonViewer.Blazor

<JsonViewer Json="@myJson" />

@code {
    private string myJson = """
    {
        "user": {
            "name": "John Doe",
            "email": "john@example.com",
            "age": 30
        },
        "roles": ["admin", "user"],
        "active": true
    }
    """;
}
```

## 🔧 Common Configurations

### Read-Only Mode (Default)

Display JSON without editing capabilities:

```razor
<JsonViewer Json="@myJson" />
```

### Editable Mode

Allow users to modify the JSON:

```razor
<JsonViewer Json="@myJson" Editable="true" OnJsonChanged="HandleJsonChanged" />

@code {
    private void HandleJsonChanged(string newJson)
    {
        // Handle the updated JSON
        Console.WriteLine("JSON updated!");
    }
}
```

### Show Statistics

Display JSON statistics panel:

```razor
<JsonViewer Json="@myJson" ShowStatistics="true" />
```

### Initial Theme

Set the initial theme (user preference will be remembered):

```razor
<JsonViewer Json="@myJson" InitialTheme="dark" />
```

## ⌨️ Keyboard Shortcuts

JsonViewer.Blazor supports these keyboard shortcuts:

| Shortcut | Action |
|----------|--------|
| `Enter` | Next search result |
| `Shift + Enter` | Previous search result |
| `Ctrl + F` | Focus search (when focused) |
| `Escape` | Clear search / Exit edit mode |

## 🎨 Theme Support

The component automatically handles theme switching and persistence:

```razor
@* User's theme preference is automatically saved *@
<JsonViewer Json="@myJson" />
```

The theme toggle button allows users to switch between:
- 🌙 **Dark Theme** - Easy on the eyes
- ☀️ **Light Theme** - Clean and bright

## 📋 Copy & Export

Built-in buttons allow users to:

- **Copy** - Copy JSON to clipboard (one-click)
- **Export** - Download as a `.json` file

## 🔍 Search Features

The search functionality includes:

- **Real-time filtering** - Results update as you type
- **Match highlighting** - Matching text is highlighted
- **Match counter** - Shows "X of Y matches"
- **Navigation** - Enter/Shift+Enter to jump between matches

## 📊 Statistics Panel

When enabled, shows:

- **Total Size** - JSON string length
- **Depth** - Maximum nesting level
- **Node Count** - Total number of nodes
- **Type Distribution** - Objects, arrays, strings, numbers, etc.

## 🚀 Next Steps

Now that you know the basics:

- [Configure the component](/guide/configuration) - Detailed options
- [Explore themes](/guide/themes) - Customize appearance
- [See examples](/examples/basic) - Real-world usage

