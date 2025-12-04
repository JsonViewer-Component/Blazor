# Dynamic Loading

Load and display JSON data from various sources dynamically.

## 🌐 From HTTP API

```razor
@page "/api-viewer"
@using JsonViewer.Blazor
@inject HttpClient Http

<h1>🌐 API Data Viewer</h1>

<div class="url-input">
    <input @bind="apiUrl" placeholder="Enter API URL..." />
    <button @onclick="FetchData" disabled="@isLoading">
        @if (isLoading)
        {
            <span>Loading...</span>
        }
        else
        {
            <span>🔍 Fetch</span>
        }
    </button>
</div>

@if (!string.IsNullOrEmpty(error))
{
    <div class="error-message">❌ @error</div>
}
else if (!string.IsNullOrEmpty(jsonData))
{
    <div class="result-container">
        <JsonViewer Json="@jsonData" ShowStatistics="true" />
    </div>
}

@code {
    private string apiUrl = "https://jsonplaceholder.typicode.com/users/1";
    private string jsonData = "";
    private string error = "";
    private bool isLoading = false;

    private async Task FetchData()
    {
        if (string.IsNullOrWhiteSpace(apiUrl)) return;

        isLoading = true;
        error = "";

        try
        {
            jsonData = await Http.GetStringAsync(apiUrl);
        }
        catch (Exception ex)
        {
            error = ex.Message;
            jsonData = "";
        }
        finally
        {
            isLoading = false;
        }
    }
}

<style>
.url-input {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
}

.url-input input {
    flex: 1;
    padding: 12px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-family: monospace;
}

.url-input input:focus {
    outline: none;
    border-color: #6366f1;
}

.url-input button {
    padding: 12px 24px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
}

.error-message {
    padding: 16px;
    background: #fee2e2;
    border-radius: 8px;
    color: #dc2626;
}

.result-container {
    height: 500px;
    border-radius: 12px;
    overflow: hidden;
}
</style>
```

## 📁 From File Upload

```razor
@page "/file-viewer"
@using JsonViewer.Blazor

<h1>📁 JSON File Viewer</h1>

<div class="upload-area @(isDragging ? "dragging" : "")"
     @ondragenter="HandleDragEnter"
     @ondragleave="HandleDragLeave"
     @ondragover:preventDefault
     @ondrop="HandleDrop">

    <InputFile OnChange="HandleFileSelected" accept=".json" />
    <div class="upload-content">
        <span class="upload-icon">📄</span>
        <p>Drag & drop a JSON file here</p>
        <p class="or">or</p>
        <button class="browse-btn">Browse Files</button>
    </div>
</div>

@if (!string.IsNullOrEmpty(fileName))
{
    <div class="file-info">
        <span>📄 @fileName</span>
        <span class="file-size">@FormatSize(fileSize)</span>
    </div>
}

@if (!string.IsNullOrEmpty(error))
{
    <div class="error">❌ @error</div>
}

@if (!string.IsNullOrEmpty(jsonContent))
{
    <div class="viewer-container">
        <JsonViewer Json="@jsonContent" ShowStatistics="true" />
    </div>
}

@code {
    private string jsonContent = "";
    private string fileName = "";
    private long fileSize = 0;
    private string error = "";
    private bool isDragging = false;

    private async Task HandleFileSelected(InputFileChangeEventArgs e)
    {
        await ProcessFile(e.File);
    }

    private void HandleDragEnter() => isDragging = true;
    private void HandleDragLeave() => isDragging = false;

    private async Task HandleDrop(DragEventArgs e)
    {
        isDragging = false;
        // Note: File drop handling requires additional JS interop
    }

    private async Task ProcessFile(IBrowserFile file)
    {
        error = "";

        try
        {
            if (!file.Name.EndsWith(".json", StringComparison.OrdinalIgnoreCase))
            {
                error = "Please select a JSON file";
                return;
            }

            fileName = file.Name;
            fileSize = file.Size;

            // Read file content (max 10MB)
            using var stream = file.OpenReadStream(maxAllowedSize: 10 * 1024 * 1024);
            using var reader = new System.IO.StreamReader(stream);
            jsonContent = await reader.ReadToEndAsync();

            // Validate JSON
            System.Text.Json.JsonDocument.Parse(jsonContent);
        }
        catch (System.Text.Json.JsonException)
        {
            error = "Invalid JSON format";
            jsonContent = "";
        }
        catch (Exception ex)
        {
            error = ex.Message;
            jsonContent = "";
        }
    }

    private string FormatSize(long bytes)
    {
        if (bytes < 1024) return $"{bytes} B";
        if (bytes < 1024 * 1024) return $"{bytes / 1024:F1} KB";
        return $"{bytes / (1024 * 1024):F1} MB";
    }
}

<style>
.upload-area {
    border: 2px dashed #d1d5db;
    border-radius: 12px;
    padding: 48px;
    text-align: center;
    position: relative;
    transition: all 0.3s ease;
    margin-bottom: 16px;
}

.upload-area.dragging {
    border-color: #6366f1;
    background: rgba(99, 102, 241, 0.05);
}

.upload-area input[type="file"] {
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
}

.upload-icon {
    font-size: 48px;
    display: block;
    margin-bottom: 16px;
}

.upload-content p {
    color: #6b7280;
    margin: 8px 0;
}

.or {
    font-size: 12px;
    text-transform: uppercase;
}

.browse-btn {
    padding: 8px 16px;
    background: #f3f4f6;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

.file-info {
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    background: #f3f4f6;
    border-radius: 8px;
    margin-bottom: 16px;
}

.file-size {
    color: #6b7280;
}

.error {
    padding: 12px 16px;
    background: #fee2e2;
    color: #dc2626;
    border-radius: 8px;
    margin-bottom: 16px;
}

.viewer-container {
    height: 500px;
    border-radius: 12px;
    overflow: hidden;
}
</style>
```

## 🔄 Real-Time Updates

```razor
@page "/realtime"
@using JsonViewer.Blazor
@implements IDisposable

<h1>🔄 Real-Time Data</h1>

<div class="controls">
    <button @onclick="ToggleUpdates" class="@(isUpdating ? "stop" : "start")">
        @(isUpdating ? "⏹ Stop Updates" : "▶ Start Updates")
    </button>
    <span class="update-count">Updates: @updateCount</span>
</div>

<div class="viewer-container">
    <JsonViewer Json="@liveData" ShowStatistics="true" />
</div>

@code {
    private string liveData = "{}";
    private bool isUpdating = false;
    private int updateCount = 0;
    private Timer? timer;
    private Random random = new Random();

    private void ToggleUpdates()
    {
        if (isUpdating)
        {
            timer?.Dispose();
            timer = null;
        }
        else
        {
            timer = new Timer(UpdateData, null, 0, 2000);
        }

        isUpdating = !isUpdating;
    }

    private void UpdateData(object? state)
    {
        updateCount++;

        var data = new
        {
            timestamp = DateTime.UtcNow.ToString("o"),
            metrics = new
            {
                cpu = random.Next(20, 80),
                memory = random.Next(40, 90),
                network = random.Next(100, 500)
            },
            status = new[] { "healthy", "warning", "healthy" }[random.Next(3)],
            activeConnections = random.Next(50, 200)
        };

        liveData = System.Text.Json.JsonSerializer.Serialize(data,
            new System.Text.Json.JsonSerializerOptions { WriteIndented = true });

        InvokeAsync(StateHasChanged);
    }

    public void Dispose()
    {
        timer?.Dispose();
    }
}

<style>
.controls {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 16px;
}

.controls button {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
}

.controls button.start {
    background: #10b981;
    color: white;
}

.controls button.stop {
    background: #ef4444;
    color: white;
}

.update-count {
    color: #6b7280;
    font-family: monospace;
}

.viewer-container {
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
}
</style>
```

## 🚀 Next Steps

- [Large Files](/examples/large-files) - Handle big JSON
- [Custom Styling](/examples/custom-styling) - Theme it
- [Basic Usage](/examples/basic) - Start simple

