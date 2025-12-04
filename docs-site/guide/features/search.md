# Search Feature

JsonViewer.Blazor includes a powerful real-time search functionality that helps you find data quickly in large JSON documents.

## 🔍 How to Use

1. **Type in the search box** - Located in the toolbar
2. **View matches** - Matching text is highlighted
3. **Navigate results** - Use keyboard shortcuts or buttons

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Enter` | Jump to next match |
| `Shift + Enter` | Jump to previous match |
| `Escape` | Clear search |

## 🎯 Search Behavior

### What Gets Searched

The search looks through:
- ✅ Property keys
- ✅ String values
- ✅ Number values
- ✅ Boolean values (`true`/`false`)
- ✅ Null values

### Case Sensitivity

By default, search is **case-insensitive**:

```
Search: "john"
Matches: "John", "JOHN", "john", "JoHn"
```

## 📊 Match Counter

The toolbar displays match information:

```
"3 of 12 matches"
```

This shows:
- Current match position (3)
- Total matches found (12)

## 🎨 Highlighting

Matches are visually highlighted:

- **Current match**: Orange/yellow background
- **Other matches**: Light yellow background

```css
/* Customization */
:root {
    --json-viewer-search-match: rgba(255, 255, 0, 0.3);
    --json-viewer-search-active: rgba(255, 165, 0, 0.5);
}
```

## 💡 Search Tips

### Find Specific Keys

Search for property names:
```
Search: "email"
```

### Find Values

Search for specific values:
```
Search: "admin"
```

### Find Patterns

Search supports partial matches:
```
Search: "user"
Matches: "user", "username", "userId", "user_profile"
```

## 🔧 Configuration

```razor
@* Search is enabled by default with the toolbar *@
<JsonViewer Json="@myJson" ShowToolbar="true" />

@* Disable search by hiding toolbar *@
<JsonViewer Json="@myJson" ShowToolbar="false" />
```

## 📝 Example

```razor
<JsonViewer Json="@sampleJson" />

@code {
    private string sampleJson = """
    {
        "users": [
            {
                "id": 1,
                "name": "John Doe",
                "email": "john@example.com",
                "role": "admin"
            },
            {
                "id": 2,
                "name": "Jane Smith",
                "email": "jane@example.com",
                "role": "user"
            }
        ]
    }
    """;
}
```

Try searching:
- `"john"` - Finds the name
- `"admin"` - Finds the role
- `"example.com"` - Finds email domains
- `"id"` - Finds all ID fields

## 🚀 Next Steps

- [Statistics feature](/guide/features/statistics)
- [Export feature](/guide/features/export)
- [Edit mode](/guide/features/edit-mode)

