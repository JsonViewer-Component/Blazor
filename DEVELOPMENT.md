# 💻 Development Guide

This guide is for developers working on the JsonViewer.Blazor project.

## 📋 Table of Contents

- [Development Environment](#-development-environment)
- [Project Structure](#-project-structure)
- [Useful Commands](#-useful-commands)
- [Debugging](#-debugging)
- [Testing](#-testing)
- [Production Build](#-production-build)

## 🛠️ Development Environment

### Prerequisites

```bash
# Check .NET version
dotnet --version
# Should be 7.0 or higher

# Install required tools
dotnet tool install -g dotnet-format
dotnet tool install -g dotnet-ef
dotnet tool install -g dotnet-outdated-tool
```

### VS Code Extensions (Recommended)

Recommended extensions are listed in `.vscode/extensions.json`.

```bash
# Auto-install all extensions
code --install-extension ms-dotnettools.csdevkit
code --install-extension ms-dotnettools.csharp
# ... (VS Code will suggest the rest)
```

## 📁 Project Structure

```
JsonViewer.Blazor/
├── src/
│   ├── Component/              # Main component
│   │   ├── Core/
│   │   │   ├── JsonViewer.razor
│   │   │   ├── Features/
│   │   │   └── Shared/
│   │   ├── Models/
│   │   ├── Services/
│   │   └── Component.csproj
│   │
│   └── Blazor.Demo/  # Demo application
│       ├── Pages/
│       ├── Shared/
│       └── wwwroot/
│
├── .vscode/                    # تنظیمات VS Code
│   ├── settings.json
│   ├── launch.json
│   ├── tasks.json
│   └── *.code-snippets
│
├── .github/                    # CI/CD
│   └── workflows/
│
├── .editorconfig               # قوانین فرمت
├── Directory.Build.props       # تنظیمات مشترک MSBuild
├── global.json                 # نسخه .NET SDK
└── nuget.config               # تنظیمات NuGet
```

## ⚡ Useful Commands

### Build & Run

```bash
# بیلد کل Solution
dotnet build

# بیلد فقط Component
dotnet build src/Component/Component.csproj

# اجرای Demo
dotnet run --project src/Blazor.Demo/Blazor.Demo.csproj

# Watch Mode (Hot Reload)
dotnet watch --project src/Blazor.Demo/Blazor.Demo.csproj
```

### Clean & Restore

```bash
# پاک‌سازی
dotnet clean

# Restore پکیج‌ها
dotnet restore

# Clean + Restore + Build
dotnet clean && dotnet restore && dotnet build
```

### Format & Lint

```bash
# فرمت کردن کد
dotnet format

# بررسی فرمت بدون تغییر
dotnet format --verify-no-changes

# تحلیل کد
dotnet build -warnaserror
```

### Package Management

```bash
# لیست پکیج‌های outdated
dotnet outdated

# آپدیت پکیج خاص
dotnet add package PackageName --version x.x.x

# حذف پکیج
dotnet remove package PackageName

# ساخت NuGet Package
dotnet pack src/Component/Component.csproj -c Release -o ./packages
```

## 🐛 دیباگ

### VS Code

1. `F5` را فشار دهید یا از Debug panel استفاده کنید
2. از launch configurations موجود استفاده کنید:
   - **Launch Blazor WASM Demo**: اجرای Demo
   - **Debug Component Library**: دیباگ Component
   - **Attach to Process**: Attach به process در حال اجرا

### Browser DevTools

```javascript
// دسترسی به Blazor در Browser Console
Blazor.start();

// مشاهده لاگ‌ها
console.log('Blazor app loaded');
```

### Breakpoints

در فایل‌های `.razor`:

```csharp
@code {
    protected override async Task OnInitializedAsync()
    {
        // Breakpoint اینجا کار می‌کند
        await base.OnInitializedAsync();
    }
}
```

## 🧪 تست

```bash
# اجرای همه تست‌ها
dotnet test

# اجرای با جزئیات بیشتر
dotnet test --verbosity detailed

# اجرای تست‌های خاص
dotnet test --filter "FullyQualifiedName~JsonViewerTests"

# Coverage
dotnet test --collect:"XPlat Code Coverage"
```

### نوشتن تست

```csharp
using Xunit;

public class JsonViewerTests
{
    [Fact]
    public void Component_Should_Render_Correctly()
    {
        // Arrange
        var component = new JsonViewer();

        // Act
        var result = component.Render();

        // Assert
        Assert.NotNull(result);
    }
}
```

## 📦 بیلد Production

```bash
# بیلد Release
dotnet build -c Release

# Publish
dotnet publish src/Blazor.Demo/Blazor.Demo.csproj \
  -c Release \
  -o ./publish

# ساخت NuGet Package
dotnet pack src/Component/Component.csproj \
  -c Release \
  -o ./packages \
  /p:Version=1.0.0
```

### Docker

```bash
# بیلد Image
docker build -t jsonviewer-blazor .

# اجرا
docker run -d -p 8080:80 jsonviewer-blazor

# استفاده از Docker Compose
docker-compose up -d
```

## 🔧 تنظیمات پیشرفته

### Hot Reload

Hot Reload به صورت پیش‌فرض فعال است. برای غیرفعال کردن:

```bash
dotnet watch run --no-hot-reload
```

### Custom Configuration

در `appsettings.Development.json`:

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Debug",
      "Microsoft": "Warning"
    }
  }
}
```

### Environment Variables

```bash
# Windows (PowerShell)
$env:ASPNETCORE_ENVIRONMENT="Development"
dotnet run

# Linux/Mac
ASPNETCORE_ENVIRONMENT=Development dotnet run
```

## 📊 Performance Profiling

```bash
# استفاده از dotnet-trace
dotnet tool install --global dotnet-trace

# Trace کردن برنامه
dotnet trace collect --process-id <PID>

# تحلیل
speedscope trace.nettrace
```

## 🔍 Debugging Tips

### Blazor Specific

```csharp
// لاگ در Browser Console
Console.WriteLine("Debug message");

// استفاده از IJSRuntime
await JSRuntime.InvokeVoidAsync("console.log", "Message from C#");
```

### Source Link

برای دیباگ در NuGet packages:

```xml
<PropertyGroup>
  <PublishRepositoryUrl>true</PublishRepositoryUrl>
  <EmbedUntrackedSources>true</EmbedUntrackedSources>
  <DebugType>embedded</DebugType>
</PropertyGroup>
```

## 📱 Mobile Development

برای تست روی موبایل:

```bash
# اجرا با IP خاص
dotnet run --urls "http://0.0.0.0:5000"

# دسترسی از موبایل
http://<your-ip>:5000
```

## 🚀 Tips & Tricks

### Faster Build

```bash
# استفاده از parallel build
dotnet build -m

# کش کردن NuGet
dotnet nuget locals all --clear
```

### VS Code Tasks

از Tasks موجود در `.vscode/tasks.json` استفاده کنید:

- `Ctrl+Shift+B`: Build
- از Command Palette: `Tasks: Run Task`

### Snippets

Snippets مفید در `.vscode/*.code-snippets`:

- `blazor-component`: کامپوننت Blazor
- `api-controller`: API Controller
- `service-impl`: پیاده‌سازی Service

## 🆘 مشکلات متداول

### Build Errors

```bash
# پاک کردن کش
dotnet clean
dotnet nuget locals all --clear
dotnet restore
dotnet build
```

### Hot Reload نکار می‌کند

```bash
# ریستارت dotnet watch
Ctrl+C
dotnet watch run
```

### Port در حال استفاده

```bash
# تغییر port در launchSettings.json
"applicationUrl": "https://localhost:5002;http://localhost:5001"
```

## 📚 منابع مفید

- [Blazor Docs](https://docs.microsoft.com/aspnet/core/blazor)
- [C# Coding Conventions](https://docs.microsoft.com/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- [.NET CLI](https://docs.microsoft.com/dotnet/core/tools)

---

**سوال دارید؟** Issue باز کنید یا در Discussions بپرسید!

