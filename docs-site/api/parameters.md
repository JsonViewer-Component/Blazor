# Parameters

Detailed documentation for all JsonViewer parameters.

## Display Parameters

### Json

The JSON string to display.

| Property | Value |
|----------|-------|
| Type | `string` |
| Default | `""` |
| Required | No |

```razor
<JsonViewer Json="@myJson" />

@code {
    private string myJson = """
    {
        "name": "Example"
    }
    """;
}
```

**Notes:**
- Accepts any valid JSON string
- Invalid JSON will trigger `OnError`
- Empty string shows empty viewer

---

### ShowLineNumbers

Display line numbers in the gutter.

| Property | Value |
|----------|-------|
| Type | `bool` |
| Default | `true` |

```razor
@* With line numbers (default) *@
<JsonViewer Json="@json" ShowLineNumbers="true" />

@* Without line numbers *@
<JsonViewer Json="@json" ShowLineNumbers="false" />
```

---

### ShowToolbar

Display the toolbar with search, copy, export buttons.

| Property | Value |
|----------|-------|
| Type | `bool` |
| Default | `true` |

```razor
@* With toolbar (default) *@
<JsonViewer Json="@json" ShowToolbar="true" />

@* Without toolbar (minimal view) *@
<JsonViewer Json="@json" ShowToolbar="false" />
```

---

### ExpandedByDefault

Whether to expand all nodes when JSON loads.

| Property | Value |
|----------|-------|
| Type | `bool` |
| Default | `true` |

```razor
@* Fully expanded (default) *@
<JsonViewer Json="@json" ExpandedByDefault="true" />

@* Collapsed initially *@
<JsonViewer Json="@json" ExpandedByDefault="false" />
```

**Performance tip:** Set to `false` for large JSON files.

---

### MaxDepth

Maximum nesting level to expand initially.

| Property | Value |
|----------|-------|
| Type | `int?` |
| Default | `null` (unlimited) |

```razor
@* Expand only top 2 levels *@
<JsonViewer Json="@deepJson" MaxDepth="2" />

@* Expand only root level *@
<JsonViewer Json="@deepJson" MaxDepth="1" />
```

**Use case:** Large nested JSON where deep expansion isn't needed initially.

---

## Theme Parameters

### InitialTheme

The theme to use before user preference is loaded.

| Property | Value |
|----------|-------|
| Type | `string` |
| Default | `"dark"` |
| Options | `"dark"`, `"light"` |

```razor
@* Dark theme (default) *@
<JsonViewer Json="@json" InitialTheme="dark" />

@* Light theme *@
<JsonViewer Json="@json" InitialTheme="light" />
```

**Notes:**
- User preference (from localStorage) overrides this
- Use for server-rendered initial state

---

## Editing Parameters

### Editable

Enable JSON editing mode.

| Property | Value |
|----------|-------|
| Type | `bool` |
| Default | `false` |

```razor
@* Read-only (default) *@
<JsonViewer Json="@json" Editable="false" />

@* Editable *@
<JsonViewer Json="@json" Editable="true" OnJsonChanged="Handle" />
```

**When enabled:**
- Shows edit button in toolbar
- Allows direct JSON modification
- Validates JSON syntax
- Fires `OnJsonChanged` on valid edits

---

## Statistics Parameters

### ShowStatistics

Display the JSON statistics panel.

| Property | Value |
|----------|-------|
| Type | `bool` |
| Default | `false` |

```razor
@* Without statistics (default) *@
<JsonViewer Json="@json" ShowStatistics="false" />

@* With statistics *@
<JsonViewer Json="@json" ShowStatistics="true" />
```

**Statistics shown:**
- Total size (characters/bytes)
- Maximum depth
- Node count
- Type distribution (objects, arrays, strings, etc.)

---

## Complete Parameter Example

```razor
<JsonViewer
    @* Data *@
    Json="@myJson"

    @* Display *@
    ShowLineNumbers="true"
    ShowToolbar="true"
    ExpandedByDefault="true"
    MaxDepth="5"

    @* Theme *@
    InitialTheme="dark"

    @* Editing *@
    Editable="true"

    @* Statistics *@
    ShowStatistics="true"

    @* Events *@
    OnJsonChanged="HandleJsonChanged"
    OnError="HandleError" />

@code {
    private string myJson = """
    {
        "example": "Complete configuration"
    }
    """;

    private void HandleJsonChanged(string newJson)
    {
        myJson = newJson;
    }

    private void HandleError(string error)
    {
        Console.WriteLine(error);
    }
}
```

