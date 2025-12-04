# Customization

Learn how to customize JsonViewer.Blazor to perfectly match your application's design.

## 🎨 CSS Variables

The component uses CSS custom properties for easy theming:

```css
/* Override in your application's CSS */
:root {
    /* Container */
    --json-viewer-border-radius: 8px;
    --json-viewer-font-family: 'Cascadia Code', 'Fira Code', monospace;
    --json-viewer-font-size: 14px;
    --json-viewer-line-height: 1.5;

    /* Spacing */
    --json-viewer-padding: 16px;
    --json-viewer-indent-size: 20px;

    /* Toolbar */
    --json-viewer-toolbar-height: 48px;
    --json-viewer-toolbar-gap: 8px;
}
```

## 📐 Sizing Options

### Fixed Height

```html
<div style="height: 400px;">
    <JsonViewer Json="@myJson" />
</div>
```

### Viewport Based

```css
.json-container {
    height: calc(100vh - 200px);
    min-height: 300px;
}
```

### Responsive

```css
.json-container {
    height: 300px;
}

@media (min-width: 768px) {
    .json-container {
        height: 500px;
    }
}

@media (min-width: 1024px) {
    .json-container {
        height: 700px;
    }
}
```

## 🔤 Typography

### Custom Fonts

```css
:root {
    --json-viewer-font-family: 'JetBrains Mono', 'Source Code Pro', monospace;
    --json-viewer-font-size: 13px;
    --json-viewer-line-height: 1.6;
}
```

### Font Loading

Include your preferred monospace font:

```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

## 🎯 Component Wrapper

Create a styled wrapper component:

```razor
@* JsonViewerCard.razor *@
<div class="json-card">
    <div class="json-card-header">
        <span class="json-card-title">@Title</span>
        @if (ShowBadge)
        {
            <span class="json-badge">JSON</span>
        }
    </div>
    <div class="json-card-body">
        <JsonViewer Json="@Json" ShowToolbar="@ShowToolbar" />
    </div>
</div>

@code {
    [Parameter] public string Title { get; set; } = "Data";
    [Parameter] public string Json { get; set; } = "{}";
    [Parameter] public bool ShowToolbar { get; set; } = true;
    [Parameter] public bool ShowBadge { get; set; } = true;
}

<style>
.json-card {
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid var(--border-color);
}

.json-card-header {
    padding: 12px 16px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.json-card-title {
    color: white;
    font-weight: 600;
}

.json-badge {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
}

.json-card-body {
    height: 400px;
}
</style>
```

## 🌈 Color Schemes

### GitHub Dark

```css
[data-theme="github-dark"] {
    --json-viewer-bg: #0d1117;
    --json-viewer-text: #c9d1d9;
    --json-viewer-key: #79c0ff;
    --json-viewer-string: #a5d6ff;
    --json-viewer-number: #79c0ff;
    --json-viewer-boolean: #ff7b72;
    --json-viewer-null: #8b949e;
}
```

### Dracula

```css
[data-theme="dracula"] {
    --json-viewer-bg: #282a36;
    --json-viewer-text: #f8f8f2;
    --json-viewer-key: #8be9fd;
    --json-viewer-string: #f1fa8c;
    --json-viewer-number: #bd93f9;
    --json-viewer-boolean: #ff79c6;
    --json-viewer-null: #6272a4;
}
```

### One Dark

```css
[data-theme="one-dark"] {
    --json-viewer-bg: #282c34;
    --json-viewer-text: #abb2bf;
    --json-viewer-key: #e06c75;
    --json-viewer-string: #98c379;
    --json-viewer-number: #d19a66;
    --json-viewer-boolean: #56b6c2;
    --json-viewer-null: #5c6370;
}
```

### Nord

```css
[data-theme="nord"] {
    --json-viewer-bg: #2e3440;
    --json-viewer-text: #d8dee9;
    --json-viewer-key: #88c0d0;
    --json-viewer-string: #a3be8c;
    --json-viewer-number: #b48ead;
    --json-viewer-boolean: #81a1c1;
    --json-viewer-null: #4c566a;
}
```

## 🔧 Toolbar Customization

Hide specific toolbar buttons (coming soon):

```razor
<JsonViewer
    Json="@myJson"
    ShowCopyButton="true"
    ShowExportButton="true"
    ShowThemeToggle="true"
    ShowSearchBox="true"
    ShowExpandAll="true" />
```

## 📱 Mobile Optimization

```css
@media (max-width: 640px) {
    :root {
        --json-viewer-font-size: 12px;
        --json-viewer-padding: 8px;
        --json-viewer-toolbar-height: 40px;
    }

    .json-viewer-toolbar {
        flex-wrap: wrap;
    }
}
```

## 🚀 Next Steps

- [Search features](/guide/features/search)
- [Statistics panel](/guide/features/statistics)
- [Examples](/examples/custom-styling)

