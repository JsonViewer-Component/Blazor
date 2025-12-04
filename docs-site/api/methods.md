# Methods

Public methods available on the JsonViewer component.

## Getting Component Reference

To call methods, you need a reference to the component:

```razor
<JsonViewer @ref="jsonViewer" Json="@json" />

@code {
    private JsonViewer? jsonViewer;
}
```

---

## ExpandAll

Expands all collapsible nodes in the JSON tree.

### Signature

```csharp
void ExpandAll()
```

### Usage

```razor
<button @onclick="ExpandAllNodes">Expand All</button>
<JsonViewer @ref="jsonViewer" Json="@json" />

@code {
    private JsonViewer? jsonViewer;

    private void ExpandAllNodes()
    {
        jsonViewer?.ExpandAll();
    }
}
```

### Notes

- No effect if already expanded
- May impact performance with very large JSON
- Works on all nested levels

---

## CollapseAll

Collapses all collapsible nodes in the JSON tree.

### Signature

```csharp
void CollapseAll()
```

### Usage

```razor
<button @onclick="CollapseAllNodes">Collapse All</button>
<JsonViewer @ref="jsonViewer" Json="@json" />

@code {
    private JsonViewer? jsonViewer;

    private void CollapseAllNodes()
    {
        jsonViewer?.CollapseAll();
    }
}
```

### Notes

- Shows only top-level structure
- Useful for getting overview of large JSON
- Instant operation

---

## CopyToClipboard

Copies the current JSON to the clipboard.

### Signature

```csharp
Task CopyToClipboard()
```

### Usage

```razor
<button @onclick="CopyJson">📋 Copy</button>
<JsonViewer @ref="jsonViewer" Json="@json" />

@code {
    private JsonViewer? jsonViewer;

    private async Task CopyJson()
    {
        if (jsonViewer != null)
        {
            await jsonViewer.CopyToClipboard();
            // Optionally show success message
        }
    }
}
```

### Notes

- Requires secure context (HTTPS)
- JSON is formatted (pretty-printed)
- May fail if clipboard access is denied

---

## ExportToFile

Downloads the JSON as a file.

### Signature

```csharp
Task ExportToFile(string filename = "data.json")
```

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `filename` | `string` | `"data.json"` | Name for downloaded file |

### Usage

```razor
<button @onclick="ExportJson">📥 Export</button>
<JsonViewer @ref="jsonViewer" Json="@json" />

@code {
    private JsonViewer? jsonViewer;

    private async Task ExportJson()
    {
        if (jsonViewer != null)
        {
            await jsonViewer.ExportToFile("my-data.json");
        }
    }
}
```

### Notes

- Triggers browser download
- JSON is formatted with indentation
- UTF-8 encoding

---

## Complete Example

```razor
@page "/methods-demo"
@using JsonViewer.Blazor

<h1>JsonViewer Methods Demo</h1>

<div class="toolbar">
    <button @onclick="ExpandAll">➕ Expand All</button>
    <button @onclick="CollapseAll">➖ Collapse All</button>
    <button @onclick="CopyToClipboard">📋 Copy</button>
    <button @onclick="() => ExportToFile()">📥 Export</button>
    <button @onclick="() => ExportToFile(\"custom-name.json\")">📥 Export (Custom Name)</button>
</div>

<div class="viewer-container">
    <JsonViewer @ref="jsonViewer" Json="@sampleJson" />
</div>

@if (!string.IsNullOrEmpty(message))
{
    <div class="toast">@message</div>
}

@code {
    private JsonViewer? jsonViewer;
    private string message = "";

    private string sampleJson = """
    {
        "users": [
            {
                "id": 1,
                "name": "John Doe",
                "contacts": {
                    "email": "john@example.com",
                    "phone": "+1234567890"
                }
            },
            {
                "id": 2,
                "name": "Jane Smith",
                "contacts": {
                    "email": "jane@example.com",
                    "phone": "+0987654321"
                }
            }
        ],
        "metadata": {
            "total": 2,
            "page": 1
        }
    }
    """;

    private void ExpandAll()
    {
        jsonViewer?.ExpandAll();
        ShowMessage("All nodes expanded");
    }

    private void CollapseAll()
    {
        jsonViewer?.CollapseAll();
        ShowMessage("All nodes collapsed");
    }

    private async Task CopyToClipboard()
    {
        if (jsonViewer != null)
        {
            await jsonViewer.CopyToClipboard();
            ShowMessage("Copied to clipboard!");
        }
    }

    private async Task ExportToFile(string filename = "data.json")
    {
        if (jsonViewer != null)
        {
            await jsonViewer.ExportToFile(filename);
            ShowMessage($"Exported as {filename}");
        }
    }

    private void ShowMessage(string msg)
    {
        message = msg;
        Task.Delay(2000).ContinueWith(_ =>
        {
            message = "";
            InvokeAsync(StateHasChanged);
        });
    }
}

<style>
.toolbar {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    flex-wrap: wrap;
}

.toolbar button {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    background: #f3f4f6;
    cursor: pointer;
    transition: all 0.2s;
}

.toolbar button:hover {
    background: #e5e7eb;
}

.viewer-container {
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
}

.toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 24px;
    background: #10b981;
    color: white;
    border-radius: 8px;
    animation: fadeIn 0.3s;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
```

---

## Future Methods

These methods are planned for future releases:

### Search

```csharp
// Programmatically search
void Search(string query)
void ClearSearch()
void NextMatch()
void PreviousMatch()
```

### Focus

```csharp
// Focus on specific paths
void FocusPath(string jsonPath)
void ScrollToLine(int lineNumber)
```

### Validation

```csharp
// Validate current content
bool Validate(out string[] errors)
bool IsValid { get; }
```

