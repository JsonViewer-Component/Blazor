# Themes

JsonViewer.Blazor comes with beautiful built-in themes that match VS Code's styling.

## 🎨 Available Themes

### 🌙 Dark Theme

The default theme, optimized for low-light environments:

- Background: `#1e1e1e`
- Easy on the eyes
- Perfect for developers

### ☀️ Light Theme

A clean, bright theme for well-lit environments:

- Background: `#ffffff`
- High contrast
- Print-friendly

## 🔄 Theme Switching

Users can toggle themes using the built-in theme button:

```razor
<JsonViewer Json="@myJson" />
```

The component automatically:
1. Shows a theme toggle button
2. Saves the user's preference to `localStorage`
3. Restores the preference on page reload

## 🎯 Setting Initial Theme

Specify the initial theme (before user preference is loaded):

```razor
@* Start with dark theme *@
<JsonViewer Json="@myJson" InitialTheme="dark" />

@* Start with light theme *@
<JsonViewer Json="@myJson" InitialTheme="light" />
```

## 🎨 Syntax Highlighting Colors

### Dark Theme Colors

| Element | Color | Example |
|---------|-------|---------|
| Keys | `#9cdcfe` | <span style="color: #9cdcfe">"name"</span> |
| Strings | `#ce9178` | <span style="color: #ce9178">"Hello"</span> |
| Numbers | `#b5cea8` | <span style="color: #b5cea8">42</span> |
| Booleans | `#569cd6` | <span style="color: #569cd6">true</span> |
| Null | `#808080` | <span style="color: #808080">null</span> |
| Brackets | `#d4d4d4` | <span style="color: #d4d4d4">{ }</span> |

### Light Theme Colors

| Element | Color | Example |
|---------|-------|---------|
| Keys | `#0550ae` | <span style="color: #0550ae">"name"</span> |
| Strings | `#0a3069` | <span style="color: #0a3069">"Hello"</span> |
| Numbers | `#0550ae` | <span style="color: #0550ae">42</span> |
| Booleans | `#cf222e` | <span style="color: #cf222e">true</span> |
| Null | `#6e7781` | <span style="color: #6e7781">null</span> |
| Brackets | `#24292f` | <span style="color: #24292f">{ }</span> |

## 🔧 Custom Themes

Create your own theme by overriding CSS variables:

```css
/* Custom "Ocean" theme */
[data-theme="ocean"] {
    --json-viewer-bg: #0f172a;
    --json-viewer-text: #e2e8f0;
    --json-viewer-key: #38bdf8;
    --json-viewer-string: #a78bfa;
    --json-viewer-number: #34d399;
    --json-viewer-boolean: #fb923c;
    --json-viewer-null: #64748b;
    --json-viewer-border: #334155;
    --json-viewer-line-number: #475569;
    --json-viewer-active-line: #1e293b;
}

/* Custom "Forest" theme */
[data-theme="forest"] {
    --json-viewer-bg: #1a2f1a;
    --json-viewer-text: #d4e6d4;
    --json-viewer-key: #90d890;
    --json-viewer-string: #ffa07a;
    --json-viewer-number: #87ceeb;
    --json-viewer-boolean: #dda0dd;
    --json-viewer-null: #778877;
    --json-viewer-border: #3d5c3d;
    --json-viewer-line-number: #5a7a5a;
    --json-viewer-active-line: #2d4a2d;
}
```

## 📱 System Theme Detection

To automatically match the user's system theme:

```razor
@code {
    private string initialTheme = "dark";

    protected override async Task OnInitializedAsync()
    {
        // Detect system preference via JS interop
        var prefersDark = await JS.InvokeAsync<bool>(
            "window.matchMedia('(prefers-color-scheme: dark)').matches"
        );
        initialTheme = prefersDark ? "dark" : "light";
    }
}

<JsonViewer Json="@myJson" InitialTheme="@initialTheme" />
```

## 🎯 Theme CSS Variables Reference

Complete list of customizable variables:

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
    --json-viewer-scrollbar: #4a4a4a;

    /* Search highlight */
    --json-viewer-search-match: rgba(255, 255, 0, 0.3);
    --json-viewer-search-active: rgba(255, 165, 0, 0.5);

    /* Buttons */
    --json-viewer-button-bg: #3c3c3c;
    --json-viewer-button-hover: #4a4a4a;
    --json-viewer-button-text: #cccccc;
}
```

## 🚀 Next Steps

- [Configure the component](/guide/configuration)
- [Learn about search](/guide/features/search)
- [See theme examples](/examples/custom-styling)

