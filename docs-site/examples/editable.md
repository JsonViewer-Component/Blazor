# Editable Mode

Allow users to modify JSON data with built-in validation and formatting.

## 🎯 Basic Editable

```razor
@using JsonViewer.Blazor

<JsonViewer
    Json="@json"
    Editable="true"
    OnJsonChanged="HandleChange" />

@code {
    private string json = """
    {
        "name": "Edit me!",
        "value": 42
    }
    """;

    private void HandleChange(string newJson)
    {
        json = newJson;
        Console.WriteLine("JSON updated!");
    }
}
```

## 📝 Configuration Editor

```razor
@page "/config-editor"
@using JsonViewer.Blazor

<h1>⚙️ Configuration Editor</h1>

<div class="editor-wrapper">
    <div class="editor-header">
        <span>📁 config.json</span>
        <div class="status">
            @if (hasChanges)
            {
                <span class="modified">● Modified</span>
            }
            else
            {
                <span class="saved">✓ Saved</span>
            }
        </div>
    </div>

    <div class="editor-body">
        <JsonViewer
            Json="@config"
            Editable="true"
            ShowStatistics="true"
            OnJsonChanged="HandleConfigChange" />
    </div>

    <div class="editor-footer">
        <button class="btn-secondary" @onclick="Reset">Reset</button>
        <button class="btn-primary" @onclick="Save" disabled="@(!hasChanges)">
            💾 Save Changes
        </button>
    </div>
</div>

@if (!string.IsNullOrEmpty(message))
{
    <div class="toast @messageType">@message</div>
}

@code {
    private string config = """
    {
        "appName": "My Application",
        "version": "1.0.0",
        "settings": {
            "theme": "dark",
            "language": "en",
            "notifications": {
                "email": true,
                "push": false,
                "sms": false
            }
        },
        "features": {
            "enableAnalytics": true,
            "enableBetaFeatures": false,
            "maxUploadSize": 10485760
        },
        "api": {
            "baseUrl": "https://api.example.com",
            "timeout": 30000,
            "retryCount": 3
        }
    }
    """;

    private string originalConfig;
    private bool hasChanges = false;
    private string message = "";
    private string messageType = "";

    protected override void OnInitialized()
    {
        originalConfig = config;
    }

    private void HandleConfigChange(string newConfig)
    {
        config = newConfig;
        hasChanges = config != originalConfig;
    }

    private void Reset()
    {
        config = originalConfig;
        hasChanges = false;
        ShowMessage("Configuration reset", "info");
    }

    private async Task Save()
    {
        // Simulate save
        await Task.Delay(500);
        originalConfig = config;
        hasChanges = false;
        ShowMessage("Configuration saved successfully!", "success");
    }

    private void ShowMessage(string msg, string type)
    {
        message = msg;
        messageType = type;
        Task.Delay(3000).ContinueWith(_ =>
        {
            message = "";
            InvokeAsync(StateHasChanged);
        });
    }
}

<style>
.editor-wrapper {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    background: #1e1e1e;
}

.editor-header {
    padding: 12px 16px;
    background: #252526;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #cccccc;
}

.status .modified {
    color: #f59e0b;
}

.status .saved {
    color: #10b981;
}

.editor-body {
    height: 500px;
}

.editor-footer {
    padding: 12px 16px;
    background: #252526;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}

.btn-primary, .btn-secondary {
    padding: 8px 16px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
}

.btn-primary {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
}

.btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
}

.btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-secondary {
    background: #3c3c3c;
    color: #cccccc;
}

.toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 24px;
    border-radius: 8px;
    animation: slideIn 0.3s ease;
}

.toast.success { background: #10b981; color: white; }
.toast.info { background: #3b82f6; color: white; }
.toast.error { background: #ef4444; color: white; }

@keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}
</style>
```

## 🎮 Live Data Editor

```razor
@page "/data-editor"
@using JsonViewer.Blazor

<h1>🎮 Game Settings Editor</h1>

<div class="two-column">
    <div class="column">
        <h3>📝 Edit JSON</h3>
        <div class="editor-container">
            <JsonViewer
                Json="@gameSettings"
                Editable="true"
                OnJsonChanged="UpdateSettings" />
        </div>
    </div>

    <div class="column">
        <h3>🎯 Live Preview</h3>
        <div class="preview-container">
            <div class="setting-item">
                <label>Difficulty:</label>
                <span class="value">@GetValue("difficulty")</span>
            </div>
            <div class="setting-item">
                <label>Volume:</label>
                <div class="progress-bar">
                    <div class="progress" style="width: @GetValue("volume")%"></div>
                </div>
            </div>
            <div class="setting-item">
                <label>Graphics:</label>
                <span class="value">@GetValue("graphics.quality")</span>
            </div>
            <div class="setting-item">
                <label>Fullscreen:</label>
                <span class="badge @(GetValue("graphics.fullscreen") == "True" ? "on" : "off")">
                    @(GetValue("graphics.fullscreen") == "True" ? "ON" : "OFF")
                </span>
            </div>
        </div>
    </div>
</div>

@code {
    private string gameSettings = """
    {
        "difficulty": "normal",
        "volume": 75,
        "graphics": {
            "quality": "high",
            "fullscreen": true,
            "vsync": true,
            "fps_limit": 60
        },
        "controls": {
            "sensitivity": 5,
            "invertY": false
        }
    }
    """;

    private System.Text.Json.JsonDocument? doc;

    protected override void OnInitialized()
    {
        ParseJson();
    }

    private void UpdateSettings(string newJson)
    {
        gameSettings = newJson;
        ParseJson();
    }

    private void ParseJson()
    {
        try
        {
            doc = System.Text.Json.JsonDocument.Parse(gameSettings);
        }
        catch { }
    }

    private string GetValue(string path)
    {
        if (doc == null) return "N/A";

        try
        {
            var parts = path.Split('.');
            var element = doc.RootElement;

            foreach (var part in parts)
            {
                element = element.GetProperty(part);
            }

            return element.ToString();
        }
        catch
        {
            return "N/A";
        }
    }
}

<style>
.two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

.column h3 {
    margin-bottom: 12px;
}

.editor-container {
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
}

.preview-container {
    background: linear-gradient(135deg, #1e1e2e, #2d2d3d);
    border-radius: 12px;
    padding: 24px;
    color: white;
}

.setting-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.setting-item label {
    color: #a0a0a0;
}

.setting-item .value {
    font-weight: 600;
    text-transform: capitalize;
}

.progress-bar {
    width: 100px;
    height: 8px;
    background: #3c3c3c;
    border-radius: 4px;
    overflow: hidden;
}

.progress {
    height: 100%;
    background: linear-gradient(90deg, #6366f1, #a855f7);
    transition: width 0.3s ease;
}

.badge {
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
}

.badge.on { background: #10b981; }
.badge.off { background: #6b7280; }

@media (max-width: 768px) {
    .two-column {
        grid-template-columns: 1fr;
    }
}
</style>
```

## 🚀 Next Steps

- [Dynamic Loading](/examples/dynamic) - Load from APIs
- [Large Files](/examples/large-files) - Performance tips
- [Custom Styling](/examples/custom-styling) - Theme customization

