# Read-Only Mode

Display JSON data without allowing modifications - perfect for viewing API responses, configuration displays, and data previews.

## 🎯 Basic Read-Only

```razor
@using JsonViewer.Blazor

<JsonViewer Json="@apiResponse" />
```

This is the default behavior - no additional configuration needed.

## 📦 API Response Viewer

```razor
@page "/api-response"
@using JsonViewer.Blazor
@inject HttpClient Http

<h1>📡 API Response Viewer</h1>

<div class="controls">
    <button @onclick="FetchUsers">Fetch Users</button>
    <button @onclick="FetchPosts">Fetch Posts</button>
</div>

@if (isLoading)
{
    <div class="loading">
        <span class="spinner"></span>
        Loading...
    </div>
}
else if (!string.IsNullOrEmpty(errorMessage))
{
    <div class="error">
        ❌ @errorMessage
    </div>
}
else
{
    <div class="response-container">
        <div class="response-header">
            <span>📥 Response</span>
            <span class="badge">@endpoint</span>
        </div>
        <div class="response-body">
            <JsonViewer Json="@responseJson" ShowStatistics="true" />
        </div>
    </div>
}

@code {
    private string responseJson = "{}";
    private string endpoint = "";
    private string errorMessage = "";
    private bool isLoading = false;

    private async Task FetchUsers()
    {
        await FetchData("https://jsonplaceholder.typicode.com/users");
    }

    private async Task FetchPosts()
    {
        await FetchData("https://jsonplaceholder.typicode.com/posts?_limit=5");
    }

    private async Task FetchData(string url)
    {
        isLoading = true;
        errorMessage = "";
        endpoint = url;

        try
        {
            responseJson = await Http.GetStringAsync(url);
        }
        catch (Exception ex)
        {
            errorMessage = ex.Message;
        }
        finally
        {
            isLoading = false;
        }
    }
}

<style>
.controls {
    margin-bottom: 16px;
    display: flex;
    gap: 8px;
}

.controls button {
    padding: 8px 16px;
    border-radius: 6px;
    border: none;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    cursor: pointer;
    transition: transform 0.2s;
}

.controls button:hover {
    transform: translateY(-2px);
}

.loading {
    padding: 40px;
    text-align: center;
    color: #6366f1;
}

.error {
    padding: 16px;
    background: #fee2e2;
    border-radius: 8px;
    color: #dc2626;
}

.response-container {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.response-header {
    padding: 12px 16px;
    background: linear-gradient(135deg, #1e1e1e, #2d2d30);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.badge {
    background: rgba(255, 255, 255, 0.1);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-family: monospace;
}

.response-body {
    height: 500px;
}
</style>
```

## 🔒 Configuration File Viewer

```razor
@page "/config-viewer"
@using JsonViewer.Blazor

<h1>⚙️ Configuration Viewer</h1>

<div class="config-card">
    <div class="config-title">
        <span>📁 appsettings.json</span>
        <span class="readonly-badge">Read-Only</span>
    </div>
    <JsonViewer Json="@configJson" ShowToolbar="true" />
</div>

@code {
    private string configJson = """
    {
        "Logging": {
            "LogLevel": {
                "Default": "Information",
                "Microsoft.AspNetCore": "Warning"
            }
        },
        "AllowedHosts": "*",
        "ConnectionStrings": {
            "DefaultConnection": "Server=localhost;Database=MyApp;..."
        },
        "Features": {
            "EnableDarkMode": true,
            "MaxUploadSize": 10485760,
            "SupportedFormats": ["json", "xml", "csv"]
        }
    }
    """;
}

<style>
.config-card {
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    height: 400px;
}

.config-title {
    padding: 12px 16px;
    background: #f3f4f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
}

.readonly-badge {
    background: #dbeafe;
    color: #1d4ed8;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
}
</style>
```

## 📊 Data Dashboard

```razor
@page "/dashboard"
@using JsonViewer.Blazor

<h1>📊 Data Dashboard</h1>

<div class="dashboard-grid">
    <div class="card">
        <h3>👤 User Data</h3>
        <JsonViewer Json="@userData" />
    </div>

    <div class="card">
        <h3>📈 Analytics</h3>
        <JsonViewer Json="@analyticsData" ShowStatistics="true" />
    </div>

    <div class="card full-width">
        <h3>📝 Activity Log</h3>
        <JsonViewer Json="@activityLog" />
    </div>
</div>

@code {
    private string userData = """
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "role": "admin",
        "lastLogin": "2024-12-03T10:30:00Z"
    }
    """;

    private string analyticsData = """
    {
        "pageViews": 15420,
        "uniqueVisitors": 4230,
        "bounceRate": 0.42,
        "avgSessionDuration": "3m 45s",
        "topPages": ["/home", "/products", "/about"]
    }
    """;

    private string activityLog = """
    {
        "events": [
            {"type": "login", "user": "john", "time": "10:30"},
            {"type": "update", "user": "jane", "time": "10:45"},
            {"type": "export", "user": "john", "time": "11:00"}
        ]
    }
    """;
}

<style>
.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

.card {
    background: white;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    height: 300px;
}

.card.full-width {
    grid-column: span 2;
}

.card h3 {
    margin: 0 0 12px 0;
    font-size: 16px;
}
</style>
```

## 💡 Tips for Read-Only Mode

### Hide Unnecessary Controls

```razor
<JsonViewer
    Json="@json"
    ShowToolbar="false" />
```

### Compact Display

```razor
<div style="height: 200px;">
    <JsonViewer
        Json="@json"
        ShowLineNumbers="false"
        ShowToolbar="false" />
</div>
```

### Show Only Statistics

```razor
<JsonViewer
    Json="@json"
    ShowStatistics="true" />
```

## 🚀 Next Steps

- [Editable Mode](/examples/editable) - Allow modifications
- [Dynamic Loading](/examples/dynamic) - Load from APIs
- [Large Files](/examples/large-files) - Performance tips

