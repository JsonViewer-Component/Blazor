# Basic Usage

The simplest way to use JsonViewer.Blazor with default settings.

## 🎯 Minimal Example

```razor
@using JsonViewer.Blazor

<JsonViewer Json="@myJson" />

@code {
    private string myJson = """
    {
        "message": "Hello, World!",
        "success": true
    }
    """;
}
```

## 📦 Complete Example

A fully working Blazor page:

```razor
@page "/json-viewer-demo"
@using JsonViewer.Blazor

<PageTitle>JSON Viewer Demo</PageTitle>

<h1>🔍 JSON Viewer Demo</h1>

<div class="viewer-container">
    <JsonViewer Json="@sampleData" />
</div>

@code {
    private string sampleData = """
    {
        "product": {
            "id": "prod_12345",
            "name": "Premium Widget",
            "description": "A high-quality widget for all your needs",
            "price": 29.99,
            "currency": "USD",
            "inStock": true,
            "quantity": 150
        },
        "categories": ["Electronics", "Gadgets", "Home"],
        "metadata": {
            "createdAt": "2024-01-15T10:30:00Z",
            "updatedAt": "2024-12-01T14:45:00Z",
            "version": 3
        },
        "tags": null
    }
    """;
}

<style>
.viewer-container {
    height: 500px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
</style>
```

## 🎨 Result

The above code renders a JSON viewer with:

- ✅ VS Code-style syntax highlighting
- ✅ Dark theme by default
- ✅ Expand/collapse nodes
- ✅ Line numbers
- ✅ Toolbar with copy, export, search, and theme toggle

## 📋 Data Types Display

JsonViewer correctly renders all JSON data types:

```json
{
    "string": "Hello World",
    "number": 42,
    "decimal": 3.14159,
    "boolean_true": true,
    "boolean_false": false,
    "null_value": null,
    "array": [1, 2, 3],
    "object": {
        "nested": "value"
    }
}
```

Each type is color-coded for easy identification:

| Type | Color (Dark) | Color (Light) |
|------|--------------|---------------|
| Keys | Blue | Blue |
| Strings | Orange | Brown |
| Numbers | Green | Blue |
| Booleans | Blue | Red |
| Null | Gray | Gray |

## 💡 Tips

### Empty JSON

Handle empty or default states:

```razor
<JsonViewer Json="@(data ?? "{}")" />
```

### Loading State

Show a placeholder while loading:

```razor
@if (isLoading)
{
    <div class="loading">Loading JSON...</div>
}
else
{
    <JsonViewer Json="@data" />
}
```

### Error Handling

Handle invalid JSON gracefully:

```razor
<JsonViewer Json="@json" OnError="HandleError" />

@code {
    private void HandleError(string error)
    {
        errorMessage = $"Invalid JSON: {error}";
    }
}
```

## 🚀 Next Steps

- [Read-Only Mode](/examples/readonly) - Display without editing
- [Editable Mode](/examples/editable) - Allow modifications
- [Dynamic Loading](/examples/dynamic) - Load from APIs

