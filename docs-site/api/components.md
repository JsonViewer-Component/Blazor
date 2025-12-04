# Components

API reference for JsonViewer.Blazor components.

## JsonViewer

The main component for displaying and editing JSON data.

### Import

```razor
@using JsonViewer.Blazor
```

### Basic Usage

```razor
<JsonViewer Json="@myJson" />
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Json` | `string` | `""` | The JSON string to display |
| `Editable` | `bool` | `false` | Enable edit mode |
| `ShowStatistics` | `bool` | `false` | Show statistics panel |
| `InitialTheme` | `string` | `"dark"` | Initial theme |
| `ShowLineNumbers` | `bool` | `true` | Display line numbers |
| `ShowToolbar` | `bool` | `true` | Display the toolbar |
| `ExpandedByDefault` | `bool` | `true` | Expand all nodes initially |
| `MaxDepth` | `int?` | `null` | Maximum expansion depth |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `OnJsonChanged` | `EventCallback<string>` | Fired when JSON is modified |
| `OnError` | `EventCallback<string>` | Fired on parsing errors |

### Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `ExpandAll()` | `void` | Expands all nodes |
| `CollapseAll()` | `void` | Collapses all nodes |
| `CopyToClipboard()` | `Task` | Copies JSON to clipboard |
| `ExportToFile()` | `Task` | Downloads JSON as file |

### Full Example

```razor
@using JsonViewer.Blazor

<JsonViewer
    Json="@myJson"
    Editable="true"
    ShowStatistics="true"
    InitialTheme="dark"
    ShowLineNumbers="true"
    ShowToolbar="true"
    ExpandedByDefault="true"
    MaxDepth="5"
    OnJsonChanged="HandleChange"
    OnError="HandleError" />

@code {
    private string myJson = "{}";

    private void HandleChange(string newJson)
    {
        myJson = newJson;
    }

    private void HandleError(string error)
    {
        Console.WriteLine($"Error: {error}");
    }
}
```

---

## Toolbar Components

The toolbar contains several sub-components.

### SearchBox

Built-in search functionality.

**Features:**
- Real-time search
- Match counter
- Navigation (Enter/Shift+Enter)

### CopyButton

Copies JSON to clipboard.

**Behavior:**
- Shows success indicator
- Auto-resets after 2 seconds

### ExportButton

Downloads JSON as file.

**Output:**
- Filename: `data.json`
- Format: Pretty-printed JSON
- Encoding: UTF-8

### ThemeToggle

Switches between dark and light themes.

**Features:**
- Persists to localStorage
- Smooth transition

### ExpandCollapseButtons

Expand/collapse all nodes.

**Buttons:**
- Expand All
- Collapse All

---

## Statistics Components

### JsonStatistics

Displays JSON analysis.

**Metrics:**
- Total size
- Maximum depth
- Node count
- Type distribution chart

---

## Future Components

These components are planned for future releases:

### JsonEditor

Dedicated full-screen editor.

```razor
@* Coming soon *@
<JsonEditor
    Json="@json"
    AutoFormat="true"
    ValidateOnType="true"
    OnSave="HandleSave" />
```

### JsonDiff

Compare two JSON documents.

```razor
@* Coming soon *@
<JsonDiff
    Left="@json1"
    Right="@json2"
    ShowOnlyDifferences="true" />
```

### JsonPath

Query JSON using JSONPath expressions.

```razor
@* Coming soon *@
<JsonPath
    Json="@json"
    Query="$.users[*].name" />
```

