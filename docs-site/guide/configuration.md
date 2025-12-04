# Configuration

JsonViewer.Blazor offers various configuration options to customize its behavior and appearance.

## 📝 Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `Json` | `string` | `""` | The JSON string to display |
| `Editable` | `bool` | `false` | Enable edit mode |
| `ShowStatistics` | `bool` | `false` | Show statistics panel |
| `InitialTheme` | `string` | `"dark"` | Initial theme (`"dark"` or `"light"`) |
| `ShowLineNumbers` | `bool` | `true` | Display line numbers |
| `ShowToolbar` | `bool` | `true` | Display the toolbar |
| `ExpandedByDefault` | `bool` | `true` | Expand all nodes by default |
| `MaxDepth` | `int?` | `null` | Maximum depth to expand |

## 🎯 Examples

### Full Configuration

```razor
<JsonViewer
    Json="@myJson"
    Editable="true"
    ShowStatistics="true"
    InitialTheme="dark"
    ShowLineNumbers="true"
    ShowToolbar="true"
    ExpandedByDefault="true"
    MaxDepth="5"
    OnJsonChanged="HandleJsonChanged"
    OnError="HandleError" />

@code {
    private string myJson = "{ }";

    private void HandleJsonChanged(string newJson)
    {
        myJson = newJson;
        // Process the updated JSON
    }

    private void HandleError(string error)
    {
        // Handle any parsing errors
        Console.WriteLine($"Error: {error}");
    }
}
```

### Minimal Read-Only

```razor
<JsonViewer Json="@myJson" />
```

### Compact View

```razor
<JsonViewer
    Json="@myJson"
    ShowToolbar="false"
    ShowLineNumbers="false" />
```

### Limited Depth

```razor
@* Only expand first 3 levels *@
<JsonViewer
    Json="@deepJson"
    MaxDepth="3" />
```

## 🎨 CSS Customization

Override CSS variables to match your app's design:

```css
/* Light theme overrides */
:root {
    --json-viewer-bg: #ffffff;
    --json-viewer-text: #333333;
    --json-viewer-key: #0550ae;
    --json-viewer-string: #0a3069;
    --json-viewer-number: #0550ae;
    --json-viewer-boolean: #cf222e;
    --json-viewer-null: #6e7781;
    --json-viewer-border: #d0d7de;
}

/* Dark theme overrides */
[data-theme="dark"] {
    --json-viewer-bg: #0d1117;
    --json-viewer-text: #c9d1d9;
    --json-viewer-key: #79c0ff;
    --json-viewer-string: #a5d6ff;
    --json-viewer-number: #79c0ff;
    --json-viewer-boolean: #ff7b72;
    --json-viewer-null: #8b949e;
    --json-viewer-border: #30363d;
}
```

## 🔄 Dynamic Updates

Update the JSON dynamically:

```razor
<button @onclick="LoadNewData">Load New Data</button>

<JsonViewer Json="@currentJson" />

@code {
    private string currentJson = "{}";

    private async Task LoadNewData()
    {
        // Fetch new JSON from an API
        currentJson = await httpClient.GetStringAsync("/api/data");
    }
}
```

## 📏 Sizing

The component fills its container by default. Control its size with CSS:

```html
<div style="height: 400px; width: 100%;">
    <JsonViewer Json="@myJson" />
</div>
```

Or use CSS classes:

```css
.json-container {
    height: 50vh;
    min-height: 300px;
    max-height: 800px;
}
```

```html
<div class="json-container">
    <JsonViewer Json="@myJson" />
</div>
```

## 🚀 Next Steps

- [Learn about themes](/guide/themes)
- [Explore features](/guide/features/search)
- [See examples](/examples/basic)

