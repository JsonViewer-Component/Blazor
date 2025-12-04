# JSON Statistics

The statistics panel provides valuable insights about your JSON data at a glance.

## 📊 Enable Statistics

```razor
<JsonViewer Json="@myJson" ShowStatistics="true" />
```

## 📈 What's Displayed

### Size Information

- **Total characters** - Length of the JSON string
- **Formatted size** - Human-readable (KB, MB)

### Structure Analysis

- **Maximum depth** - Deepest nesting level
- **Total nodes** - Count of all elements

### Type Distribution

Shows the count of each JSON type:

| Type | Icon | Description |
|------|------|-------------|
| Objects | `{ }` | JSON objects |
| Arrays | `[ ]` | JSON arrays |
| Strings | `"a"` | Text values |
| Numbers | `123` | Numeric values |
| Booleans | `✓/✗` | true/false |
| Null | `∅` | null values |

## 🎯 Example Output

For this JSON:

```json
{
    "users": [
        {
            "id": 1,
            "name": "John",
            "active": true,
            "profile": null
        },
        {
            "id": 2,
            "name": "Jane",
            "active": false,
            "profile": {
                "avatar": "jane.png"
            }
        }
    ],
    "total": 2
}
```

Statistics would show:

| Metric | Value |
|--------|-------|
| Size | 248 characters |
| Depth | 4 levels |
| Nodes | 17 |
| Objects | 4 |
| Arrays | 1 |
| Strings | 4 |
| Numbers | 3 |
| Booleans | 2 |
| Nulls | 1 |

## 🎨 Visual Representation

The statistics panel includes:

- **Bar chart** - Visual type distribution
- **Percentages** - Relative composition
- **Icons** - Quick type identification

## 💡 Use Cases

### Data Validation

Quickly verify:
- Expected structure depth
- Presence of null values
- Type consistency

### Performance Assessment

Identify:
- Large arrays that might need pagination
- Deep nesting that could impact rendering
- Data size for API responses

### Documentation

Show stakeholders:
- Data complexity
- Schema characteristics
- Content distribution

## 🔧 Styling

```css
/* Customize statistics panel */
.json-statistics {
    background: var(--json-viewer-toolbar-bg);
    border-radius: 8px;
    padding: 12px;
}

.json-statistics-bar {
    height: 8px;
    border-radius: 4px;
}

.json-statistics-label {
    font-size: 12px;
    color: var(--json-viewer-text);
}
```

## 📝 Full Example

```razor
@page "/json-stats-demo"
@using JsonViewer.Blazor

<h1>JSON Statistics Demo</h1>

<div class="demo-container">
    <JsonViewer
        Json="@complexJson"
        ShowStatistics="true"
        InitialTheme="dark" />
</div>

@code {
    private string complexJson = """
    {
        "company": "Acme Corp",
        "founded": 1995,
        "active": true,
        "departments": [
            {
                "name": "Engineering",
                "employees": 150,
                "projects": ["Alpha", "Beta", "Gamma"]
            },
            {
                "name": "Marketing",
                "employees": 50,
                "budget": null
            }
        ],
        "locations": {
            "headquarters": "New York",
            "branches": ["London", "Tokyo", "Sydney"]
        }
    }
    """;
}

<style>
.demo-container {
    height: 600px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}
</style>
```

## 🚀 Next Steps

- [Export feature](/guide/features/export)
- [Edit mode](/guide/features/edit-mode)
- [Search feature](/guide/features/search)

