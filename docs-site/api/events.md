# Events

Documentation for JsonViewer events and callbacks.

## OnJsonChanged

Fired when the JSON content is modified (in edit mode).

### Signature

```csharp
EventCallback<string> OnJsonChanged
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `newJson` | `string` | The updated JSON string |

### Usage

```razor
<JsonViewer
    Json="@json"
    Editable="true"
    OnJsonChanged="HandleJsonChanged" />

@code {
    private string json = "{}";

    private void HandleJsonChanged(string newJson)
    {
        json = newJson;
        Console.WriteLine("JSON updated!");

        // Process the new JSON
        ProcessJson(newJson);
    }

    private void ProcessJson(string json)
    {
        // Validate, save, send to API, etc.
    }
}
```

### When It Fires

- User edits JSON in edit mode
- After format button is clicked
- Only fires with valid JSON

### Notes

- Does NOT fire if JSON is invalid
- Provides formatted JSON
- Same JSON won't trigger duplicate events

---

## OnError

Fired when there's a JSON parsing error.

### Signature

```csharp
EventCallback<string> OnError
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `error` | `string` | Error message describing the issue |

### Usage

```razor
<JsonViewer
    Json="@json"
    OnError="HandleError" />

@if (!string.IsNullOrEmpty(errorMessage))
{
    <div class="error">@errorMessage</div>
}

@code {
    private string json = "";
    private string errorMessage = "";

    private void HandleError(string error)
    {
        errorMessage = error;

        // Log the error
        Logger.LogWarning("JSON parsing error: {Error}", error);
    }
}
```

### Common Error Messages

| Error | Cause |
|-------|-------|
| `"Unexpected character"` | Invalid JSON syntax |
| `"Unexpected end of data"` | Truncated or incomplete JSON |
| `"Expected property name"` | Missing quotes on key |
| `"Value cannot be null"` | Null JSON passed |

### When It Fires

- Invalid JSON is passed to `Json` parameter
- Invalid JSON is entered in edit mode
- Malformed JSON from API response

---

## Event Handling Patterns

### Async Handler

```razor
<JsonViewer
    Json="@json"
    Editable="true"
    OnJsonChanged="HandleJsonChangedAsync" />

@code {
    private async Task HandleJsonChangedAsync(string newJson)
    {
        await SaveToServerAsync(newJson);
        await NotifyOtherComponentsAsync();
    }
}
```

### With StateHasChanged

```razor
@code {
    private void HandleChange(string newJson)
    {
        json = newJson;
        UpdateDerivedState();
        StateHasChanged(); // Force re-render if needed
    }
}
```

### Error Recovery

```razor
<JsonViewer
    Json="@json"
    Editable="true"
    OnJsonChanged="HandleChange"
    OnError="HandleError" />

<button @onclick="ResetToLastValid">Reset</button>

@code {
    private string json = "{}";
    private string lastValidJson = "{}";
    private string error = "";

    private void HandleChange(string newJson)
    {
        json = newJson;
        lastValidJson = newJson; // Store valid state
        error = "";
    }

    private void HandleError(string errorMsg)
    {
        error = errorMsg;
        // Don't update json - keep showing the invalid input
    }

    private void ResetToLastValid()
    {
        json = lastValidJson;
        error = "";
    }
}
```

### Debounced Saving

```razor
@code {
    private Timer? saveTimer;

    private void HandleChange(string newJson)
    {
        json = newJson;

        // Cancel previous timer
        saveTimer?.Dispose();

        // Set new timer (500ms debounce)
        saveTimer = new Timer(async _ =>
        {
            await SaveAsync(newJson);
        }, null, 500, Timeout.Infinite);
    }
}
```

### Event Aggregation

```razor
@code {
    private List<string> changeHistory = new();

    private void HandleChange(string newJson)
    {
        json = newJson;
        changeHistory.Add(newJson);

        // Limit history size
        if (changeHistory.Count > 50)
        {
            changeHistory.RemoveAt(0);
        }
    }

    private void Undo()
    {
        if (changeHistory.Count > 1)
        {
            changeHistory.RemoveAt(changeHistory.Count - 1);
            json = changeHistory.Last();
        }
    }
}
```

