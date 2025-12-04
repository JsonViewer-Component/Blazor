# Edit Mode

JsonViewer.Blazor includes a built-in editor for modifying JSON data directly.

## ✏️ Enable Edit Mode

```razor
<JsonViewer
    Json="@myJson"
    Editable="true"
    OnJsonChanged="HandleJsonChanged" />

@code {
    private string myJson = "{}";

    private void HandleJsonChanged(string newJson)
    {
        myJson = newJson;
        Console.WriteLine("JSON updated!");
    }
}
```

## 🎯 Features

### Real-time Editing

- Direct text input in the editor
- Changes reflect immediately in the viewer

### Auto-Formatting

- Click "Format" to beautify JSON
- Consistent indentation
- Proper spacing

### Validation

- Real-time syntax checking
- Error messages for invalid JSON
- Prevents saving invalid data

### Undo/Redo (Coming Soon)

- Keyboard shortcuts support
- Full edit history

## ⌨️ Editor Shortcuts

| Shortcut | Action |
|----------|--------|
| `Tab` | Insert indentation |
| `Escape` | Exit edit mode |
| `Ctrl + Enter` | Save changes |

## 🎨 Editor Modes

### Inline Edit

Edit values directly in the tree view:

```razor
<JsonViewer
    Json="@myJson"
    Editable="true"
    EditMode="inline" />
```

### Full Editor

Switch to a full text editor:

```razor
<JsonViewer
    Json="@myJson"
    Editable="true"
    EditMode="full" />
```

## 💡 Use Cases

### Configuration Editor

```razor
<h2>App Settings</h2>
<JsonViewer
    Json="@appSettings"
    Editable="true"
    OnJsonChanged="SaveSettings" />

@code {
    private string appSettings = """
    {
        "theme": "dark",
        "language": "en",
        "notifications": true,
        "autoSave": true
    }
    """;

    private async Task SaveSettings(string newSettings)
    {
        appSettings = newSettings;
        await SettingsService.SaveAsync(newSettings);
    }
}
```

### Data Entry Form

```razor
<h2>Create New Record</h2>
<JsonViewer
    Json="@template"
    Editable="true"
    OnJsonChanged="UpdateData" />
<button @onclick="Submit">Submit</button>

@code {
    private string template = """
    {
        "name": "",
        "email": "",
        "age": 0,
        "active": true
    }
    """;

    private string currentData;

    private void UpdateData(string json) => currentData = json;

    private async Task Submit()
    {
        await ApiService.CreateRecord(currentData);
    }
}
```

### Debug Tool

```razor
<h2>Request Body Editor</h2>
<JsonViewer
    Json="@requestBody"
    Editable="true"
    OnJsonChanged="body => requestBody = body" />
<button @onclick="SendRequest">Send Request</button>
```

## 🔒 Validation

### Invalid JSON

When JSON is invalid, you'll see:
- Red error border
- Error message describing the issue
- Save button disabled

### Error Messages

Common validation errors:

| Error | Cause |
|-------|-------|
| "Unexpected token" | Syntax error |
| "Unexpected end of JSON" | Missing closing bracket |
| "Expected property name" | Missing quotes on key |
| "Expected ':'" | Missing colon after key |

## 🎨 Styling the Editor

```css
/* Editor container */
.json-editor {
    font-family: var(--json-viewer-font-family);
    font-size: var(--json-viewer-font-size);
    background: var(--json-viewer-bg);
    color: var(--json-viewer-text);
}

/* Editor textarea */
.json-editor-textarea {
    border: none;
    outline: none;
    resize: none;
    width: 100%;
    min-height: 200px;
}

/* Error state */
.json-editor.has-error {
    border-color: var(--color-error);
}

.json-editor-error {
    color: var(--color-error);
    font-size: 12px;
    padding: 8px;
}
```

## 📝 Full Example

```razor
@page "/editor-demo"
@using JsonViewer.Blazor

<div class="editor-demo">
    <div class="header">
        <h1>JSON Editor</h1>
        <span class="status @statusClass">@statusMessage</span>
    </div>

    <div class="editor-container">
        <JsonViewer
            Json="@json"
            Editable="true"
            ShowStatistics="true"
            OnJsonChanged="HandleChange"
            OnError="HandleError" />
    </div>

    <div class="actions">
        <button @onclick="Reset">Reset</button>
        <button @onclick="Save" disabled="@hasError">Save</button>
    </div>
</div>

@code {
    private string json = """
    {
        "name": "My Project",
        "version": "1.0.0",
        "settings": {
            "debug": false,
            "maxItems": 100
        }
    }
    """;

    private string originalJson;
    private string statusMessage = "Ready";
    private string statusClass = "";
    private bool hasError = false;

    protected override void OnInitialized()
    {
        originalJson = json;
    }

    private void HandleChange(string newJson)
    {
        json = newJson;
        hasError = false;
        statusMessage = "Modified";
        statusClass = "modified";
    }

    private void HandleError(string error)
    {
        hasError = true;
        statusMessage = $"Error: {error}";
        statusClass = "error";
    }

    private void Reset()
    {
        json = originalJson;
        statusMessage = "Reset";
        statusClass = "";
    }

    private void Save()
    {
        originalJson = json;
        statusMessage = "Saved!";
        statusClass = "success";
    }
}

<style>
.editor-demo {
    max-width: 800px;
    margin: 0 auto;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.status {
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 14px;
}

.status.modified { background: #fef3cd; color: #856404; }
.status.error { background: #f8d7da; color: #721c24; }
.status.success { background: #d4edda; color: #155724; }

.editor-container {
    height: 500px;
    border-radius: 8px;
    overflow: hidden;
}

.actions {
    margin-top: 16px;
    display: flex;
    gap: 8px;
    justify-content: flex-end;
}
</style>
```

## 🚀 Next Steps

- [Search feature](/guide/features/search)
- [Statistics](/guide/features/statistics)
- [Export feature](/guide/features/export)

