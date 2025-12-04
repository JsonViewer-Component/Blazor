# Custom Styling

Learn how to customize the appearance of JsonViewer.Blazor to match your application.

## 🎨 CSS Variables

Override these variables to customize the component:

```css
:root {
    /* Background colors */
    --json-viewer-bg: #1e1e1e;
    --json-viewer-toolbar-bg: #252526;
    --json-viewer-active-line: #2d2d30;

    /* Text colors */
    --json-viewer-text: #d4d4d4;
    --json-viewer-key: #9cdcfe;
    --json-viewer-string: #ce9178;
    --json-viewer-number: #b5cea8;
    --json-viewer-boolean: #569cd6;
    --json-viewer-null: #808080;

    /* UI elements */
    --json-viewer-border: #3c3c3c;
    --json-viewer-line-number: #858585;

    /* Search */
    --json-viewer-search-match: rgba(255, 255, 0, 0.3);
    --json-viewer-search-active: rgba(255, 165, 0, 0.5);
}
```

## 🌈 Theme Gallery

### 1. Ocean Theme

```razor
<div class="ocean-theme">
    <JsonViewer Json="@json" />
</div>

<style>
.ocean-theme {
    --json-viewer-bg: #0d1b2a;
    --json-viewer-toolbar-bg: #1b263b;
    --json-viewer-text: #e0e1dd;
    --json-viewer-key: #48cae4;
    --json-viewer-string: #90be6d;
    --json-viewer-number: #f9c74f;
    --json-viewer-boolean: #f8961e;
    --json-viewer-null: #577590;
    --json-viewer-border: #415a77;
}
</style>
```

### 2. Forest Theme

```razor
<div class="forest-theme">
    <JsonViewer Json="@json" />
</div>

<style>
.forest-theme {
    --json-viewer-bg: #1a2f1a;
    --json-viewer-toolbar-bg: #234623;
    --json-viewer-text: #d4e6d4;
    --json-viewer-key: #90d890;
    --json-viewer-string: #ffa07a;
    --json-viewer-number: #87ceeb;
    --json-viewer-boolean: #dda0dd;
    --json-viewer-null: #778877;
    --json-viewer-border: #3d5c3d;
}
</style>
```

### 3. Sunset Theme

```razor
<div class="sunset-theme">
    <JsonViewer Json="@json" />
</div>

<style>
.sunset-theme {
    --json-viewer-bg: #2d1b2d;
    --json-viewer-toolbar-bg: #3d2b3d;
    --json-viewer-text: #f0e6f0;
    --json-viewer-key: #ff6b9d;
    --json-viewer-string: #ffd93d;
    --json-viewer-number: #6bcb77;
    --json-viewer-boolean: #4d96ff;
    --json-viewer-null: #8b7b8b;
    --json-viewer-border: #5d4b5d;
}
</style>
```

### 4. Minimal Light

```razor
<div class="minimal-light">
    <JsonViewer Json="@json" />
</div>

<style>
.minimal-light {
    --json-viewer-bg: #ffffff;
    --json-viewer-toolbar-bg: #fafafa;
    --json-viewer-text: #333333;
    --json-viewer-key: #0066cc;
    --json-viewer-string: #008800;
    --json-viewer-number: #cc6600;
    --json-viewer-boolean: #aa00aa;
    --json-viewer-null: #999999;
    --json-viewer-border: #eeeeee;
}
</style>
```

## 🎯 Complete Custom Theme Example

```razor
@page "/custom-theme"
@using JsonViewer.Blazor

<h1>🎨 Custom Theme Gallery</h1>

<div class="theme-selector">
    @foreach (var theme in themes)
    {
        <button
            class="@(selectedTheme == theme.Key ? "active" : "")"
            @onclick="() => selectedTheme = theme.Key">
            @theme.Value.Name
        </button>
    }
</div>

<div class="viewer-wrapper @selectedTheme">
    <JsonViewer Json="@sampleJson" />
</div>

@code {
    private string selectedTheme = "cyberpunk";

    private string sampleJson = """
    {
        "theme": "cyberpunk",
        "version": "1.0",
        "colors": {
            "primary": "#ff00ff",
            "secondary": "#00ffff"
        },
        "enabled": true,
        "score": 9.5,
        "extras": null
    }
    """;

    private Dictionary<string, (string Name, string Desc)> themes = new()
    {
        ["cyberpunk"] = ("🌃 Cyberpunk", "Neon colors"),
        ["nature"] = ("🌿 Nature", "Earthy tones"),
        ["mono"] = ("⬛ Monochrome", "Black & white"),
        ["candy"] = ("🍬 Candy", "Sweet pastels")
    };
}

<style>
.theme-selector {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
}

.theme-selector button {
    padding: 8px 16px;
    border: 2px solid transparent;
    border-radius: 8px;
    background: #f3f4f6;
    cursor: pointer;
    transition: all 0.2s;
}

.theme-selector button.active {
    border-color: #6366f1;
    background: #eef2ff;
}

.viewer-wrapper {
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
}

/* Cyberpunk Theme */
.cyberpunk {
    --json-viewer-bg: #0a0a0f;
    --json-viewer-toolbar-bg: #15151f;
    --json-viewer-text: #e0e0ff;
    --json-viewer-key: #ff00ff;
    --json-viewer-string: #00ffff;
    --json-viewer-number: #ffff00;
    --json-viewer-boolean: #ff6600;
    --json-viewer-null: #666699;
    --json-viewer-border: #330033;
}

/* Nature Theme */
.nature {
    --json-viewer-bg: #1a2e1a;
    --json-viewer-toolbar-bg: #243d24;
    --json-viewer-text: #c8e6c8;
    --json-viewer-key: #7cb342;
    --json-viewer-string: #ffb74d;
    --json-viewer-number: #4fc3f7;
    --json-viewer-boolean: #ba68c8;
    --json-viewer-null: #78909c;
    --json-viewer-border: #2e5d2e;
}

/* Monochrome Theme */
.mono {
    --json-viewer-bg: #000000;
    --json-viewer-toolbar-bg: #1a1a1a;
    --json-viewer-text: #ffffff;
    --json-viewer-key: #ffffff;
    --json-viewer-string: #cccccc;
    --json-viewer-number: #ffffff;
    --json-viewer-boolean: #aaaaaa;
    --json-viewer-null: #666666;
    --json-viewer-border: #333333;
}

/* Candy Theme */
.candy {
    --json-viewer-bg: #fff0f5;
    --json-viewer-toolbar-bg: #ffe4ec;
    --json-viewer-text: #4a4a4a;
    --json-viewer-key: #ff69b4;
    --json-viewer-string: #9370db;
    --json-viewer-number: #20b2aa;
    --json-viewer-boolean: #ff6347;
    --json-viewer-null: #b0b0b0;
    --json-viewer-border: #ffb6c1;
}
</style>
```

## 🔧 Advanced Customization

### Custom Fonts

```css
.json-viewer {
    font-family: 'Fira Code', 'JetBrains Mono', monospace;
    font-size: 14px;
    line-height: 1.6;
}
```

### Animations

```css
.json-viewer .node {
    transition: all 0.2s ease;
}

.json-viewer .node:hover {
    background: rgba(99, 102, 241, 0.1);
}

.json-viewer .expanded {
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}
```

### Rounded Corners

```css
.json-viewer {
    border-radius: 16px;
    overflow: hidden;
}

.json-viewer .toolbar {
    border-radius: 16px 16px 0 0;
}
```

## 🚀 Next Steps

- [Basic Usage](/examples/basic) - Get started
- [Configuration](/guide/configuration) - All options
- [Themes](/guide/themes) - Built-in themes

