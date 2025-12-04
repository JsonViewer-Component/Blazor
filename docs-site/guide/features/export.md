# Export Feature

JsonViewer.Blazor makes it easy to copy and export JSON data.

## 📋 Copy to Clipboard

Click the **Copy** button in the toolbar to copy the entire JSON to your clipboard.

### Features

- ✅ One-click copy
- ✅ Formatted JSON (pretty-printed)
- ✅ Visual feedback on success
- ✅ Works in all browsers

### Usage

```razor
<JsonViewer Json="@myJson" />
@* Copy button is included in the toolbar by default *@
```

## 📥 Export to File

Click the **Export** button to download the JSON as a file.

### Features

- ✅ Downloads as `.json` file
- ✅ Properly formatted
- ✅ UTF-8 encoding
- ✅ Custom filename

### Default Filename

The exported file is named `data.json` by default.

## 🎯 Example

```razor
@page "/export-demo"
@using JsonViewer.Blazor

<h1>Export Demo</h1>

<div class="json-container">
    <JsonViewer Json="@apiResponse" />
</div>

<p>Try clicking the <strong>Copy</strong> or <strong>Export</strong> buttons in the toolbar!</p>

@code {
    private string apiResponse = """
    {
        "status": "success",
        "data": {
            "users": [
                {
                    "id": 1,
                    "username": "johndoe",
                    "email": "john@example.com",
                    "created_at": "2024-01-15T10:30:00Z"
                },
                {
                    "id": 2,
                    "username": "janesmith",
                    "email": "jane@example.com",
                    "created_at": "2024-02-20T14:45:00Z"
                }
            ],
            "pagination": {
                "page": 1,
                "per_page": 10,
                "total": 2
            }
        },
        "timestamp": "2024-12-03T12:00:00Z"
    }
    """;
}

<style>
.json-container {
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
}
</style>
```

## 💡 Use Cases

### API Testing

Copy response JSON for:
- Bug reports
- Documentation
- Test fixtures

### Data Backup

Export JSON for:
- Configuration backup
- Data migration
- Version control

### Sharing

Share formatted JSON with:
- Team members
- Stakeholders
- Support tickets

## 🎨 Button Customization

The export buttons use the component's theme colors:

```css
/* Custom button styling */
.json-toolbar-button {
    background: var(--json-viewer-button-bg);
    color: var(--json-viewer-button-text);
    border-radius: 4px;
    padding: 6px 12px;
    transition: all 0.2s ease;
}

.json-toolbar-button:hover {
    background: var(--json-viewer-button-hover);
    transform: translateY(-1px);
}

.json-toolbar-button.success {
    background: var(--color-success);
    color: white;
}
```

## ⚡ Technical Details

### Copy Implementation

Uses the modern Clipboard API:

```javascript
navigator.clipboard.writeText(json);
```

### Export Implementation

Creates a downloadable blob:

```javascript
const blob = new Blob([json], { type: 'application/json' });
const url = URL.createObjectURL(blob);
// Trigger download
```

## 🚀 Next Steps

- [Edit mode](/guide/features/edit-mode)
- [Search feature](/guide/features/search)
- [Statistics](/guide/features/statistics)

