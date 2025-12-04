# Large JSON Files

Tips and best practices for handling large JSON files efficiently.

## 📊 Performance Considerations

JsonViewer.Blazor is optimized for performance, but large files (>1MB) may require special consideration.

### Recommended Limits

| Size | Performance | Recommendation |
|------|-------------|----------------|
| < 100 KB | Excellent | No optimization needed |
| 100 KB - 1 MB | Good | Consider limiting expansion |
| 1 MB - 5 MB | Acceptable | Use `MaxDepth` |
| > 5 MB | May be slow | Consider pagination |

## 🎯 Optimization Strategies

### 1. Limit Initial Expansion

```razor
<JsonViewer
    Json="@largeJson"
    ExpandedByDefault="false"
    MaxDepth="2" />
```

### 2. Lazy Loading Pattern

```razor
@page "/large-json"
@using JsonViewer.Blazor

<h1>📦 Large JSON Viewer</h1>

@if (!isLoaded)
{
    <div class="preview-card">
        <h3>📄 data.json</h3>
        <p>Size: @FormatSize(estimatedSize)</p>
        <p>This file is large and may take a moment to render.</p>
        <button @onclick="LoadJson">🔓 Load JSON</button>
    </div>
}
else
{
    <div class="viewer-container">
        <JsonViewer
            Json="@jsonData"
            ExpandedByDefault="false"
            MaxDepth="2"
            ShowStatistics="true" />
    </div>
}

@code {
    private string jsonData = "";
    private long estimatedSize = 2500000; // 2.5 MB
    private bool isLoaded = false;

    private void LoadJson()
    {
        // Load your large JSON here
        jsonData = GenerateLargeJson();
        isLoaded = true;
    }

    private string GenerateLargeJson()
    {
        // Demo: generate large JSON
        var items = Enumerable.Range(1, 1000).Select(i => new
        {
            id = i,
            name = $"Item {i}",
            data = new { a = i * 2, b = i * 3 }
        });

        return System.Text.Json.JsonSerializer.Serialize(new { items },
            new System.Text.Json.JsonSerializerOptions { WriteIndented = true });
    }

    private string FormatSize(long bytes) =>
        bytes switch
        {
            < 1024 => $"{bytes} B",
            < 1024 * 1024 => $"{bytes / 1024.0:F1} KB",
            _ => $"{bytes / (1024.0 * 1024):F1} MB"
        };
}

<style>
.preview-card {
    background: #f8fafc;
    border: 2px dashed #e2e8f0;
    border-radius: 12px;
    padding: 32px;
    text-align: center;
}

.preview-card h3 {
    margin: 0 0 16px;
}

.preview-card button {
    margin-top: 16px;
    padding: 12px 24px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
}

.viewer-container {
    height: 600px;
    border-radius: 12px;
    overflow: hidden;
}
</style>
```

### 3. Virtual Scrolling (Coming Soon)

```razor
@* Future feature *@
<JsonViewer
    Json="@hugeJson"
    EnableVirtualization="true"
    ItemHeight="24" />
```

### 4. Search Optimization

For large files, search may take longer. Consider:

```razor
<JsonViewer
    Json="@largeJson"
    SearchDebounceMs="500" />
```

## 📈 Memory Management

### Clear When Not Needed

```razor
@code {
    private string jsonData = "";

    public void Dispose()
    {
        // Help garbage collection
        jsonData = "";
    }
}
```

### Progressive Loading

```razor
@code {
    private async Task LoadLargeFile(IBrowserFile file)
    {
        // Show loading state
        isLoading = true;

        // Read in chunks for progress
        await using var stream = file.OpenReadStream(maxAllowedSize: 50 * 1024 * 1024);
        using var reader = new StreamReader(stream);

        var builder = new StringBuilder();
        var buffer = new char[8192];
        int read;
        long totalRead = 0;

        while ((read = await reader.ReadAsync(buffer, 0, buffer.Length)) > 0)
        {
            builder.Append(buffer, 0, read);
            totalRead += read;

            // Update progress
            loadProgress = (int)(totalRead * 100 / file.Size);
            await InvokeAsync(StateHasChanged);
        }

        jsonData = builder.ToString();
        isLoading = false;
    }
}
```

## 🎨 Loading State

```razor
<div class="loading-container">
    @if (isLoading)
    {
        <div class="loading-overlay">
            <div class="spinner"></div>
            <p>Loading large file...</p>
            <div class="progress-bar">
                <div class="progress" style="width: @loadProgress%"></div>
            </div>
        </div>
    }

    <JsonViewer Json="@jsonData" />
</div>

<style>
.loading-container {
    position: relative;
    height: 500px;
}

.loading-overlay {
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #e5e7eb;
    border-top-color: #6366f1;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

.progress-bar {
    width: 200px;
    height: 6px;
    background: #e5e7eb;
    border-radius: 3px;
    margin-top: 16px;
    overflow: hidden;
}

.progress {
    height: 100%;
    background: linear-gradient(90deg, #6366f1, #a855f7);
    transition: width 0.3s;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
</style>
```

## 💡 Best Practices

1. **Warn users** about large file sizes before loading
2. **Show progress** during loading
3. **Start collapsed** - use `ExpandedByDefault="false"`
4. **Limit depth** - use `MaxDepth="2"` or `3`
5. **Add search debounce** for large datasets
6. **Consider pagination** for arrays with 1000+ items

## 🚀 Next Steps

- [Custom Styling](/examples/custom-styling) - Theme customization
- [Basic Usage](/examples/basic) - Simple examples
- [Configuration](/guide/configuration) - All options

