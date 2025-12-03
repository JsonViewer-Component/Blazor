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
│   └── Blazor.Demo/            # Demo application
│       ├── Pages/
│       ├── Shared/
│       └── wwwroot/
│
├── .vscode/                    # VS Code settings
│   ├── settings.json
│   ├── launch.json
│   ├── tasks.json
│   └── *.code-snippets
│
├── .github/                    # CI/CD
│   └── workflows/
│
├── docs/                       # Documentation
├── docker/                     # Docker configuration
├── assets/                     # Static assets
│
├── .editorconfig               # Format rules
├── Directory.Build.props       # Shared MSBuild settings
├── global.json                 # .NET SDK version
└── nuget.config                # NuGet settings
```

## ⚡ Useful Commands

### Build & Run

```bash
# Build entire Solution
dotnet build

# Build only Component
dotnet build src/Component/Component.csproj

# Run Demo
dotnet run --project src/Blazor.Demo/Blazor.Demo.csproj

# Watch Mode (Hot Reload)
dotnet watch --project src/Blazor.Demo/Blazor.Demo.csproj
```

### Clean & Restore

```bash
# Clean
dotnet clean

# Restore packages
dotnet restore

# Clean + Restore + Build
dotnet clean && dotnet restore && dotnet build
```

### Format & Lint

```bash
# Format code
dotnet format

# Check format without changes
dotnet format --verify-no-changes

# Code analysis
dotnet build -warnaserror
```

### Package Management

```bash
# List outdated packages
dotnet outdated

# Update specific package
dotnet add package PackageName --version x.x.x

# Remove package
dotnet remove package PackageName

# Create NuGet Package
dotnet pack src/Component/Component.csproj -c Release -o ./packages
```

## 🐛 Debugging

### VS Code

1. Press `F5` or use the Debug panel
2. Use available launch configurations:
   - **Launch Blazor WASM Demo**: Run Demo
   - **Debug Component Library**: Debug Component
   - **Attach to Process**: Attach to running process

### Browser DevTools

```javascript
// Access Blazor in Browser Console
Blazor.start();

// View logs
console.log('Blazor app loaded');
```

### Breakpoints

In `.razor` files:

```csharp
@code {
    protected override async Task OnInitializedAsync()
    {
        // Breakpoint works here
        await base.OnInitializedAsync();
    }
}
```

## 🧪 Testing

```bash
# Run all tests
dotnet test

# Run with detailed output
dotnet test --verbosity detailed

# Run specific tests
dotnet test --filter "FullyQualifiedName~JsonViewerTests"

# Coverage
dotnet test --collect:"XPlat Code Coverage"
```

### Writing Tests

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

## 📦 Production Build

```bash
# Release build
dotnet build -c Release

# Publish
dotnet publish src/Blazor.Demo/Blazor.Demo.csproj \
  -c Release \
  -o ./publish

# Create NuGet Package
dotnet pack src/Component/Component.csproj \
  -c Release \
  -o ./packages \
  /p:Version=1.0.0
```

### Docker

```bash
# Build Image
docker build -t jsonviewer-blazor -f docker/Dockerfile .

# Run
docker run -d -p 8080:80 jsonviewer-blazor

# Use Docker Compose
docker-compose -f docker/docker-compose.yml up -d
```

## 🔧 Advanced Settings

### Hot Reload

Hot Reload is enabled by default. To disable:

```bash
dotnet watch run --no-hot-reload
```

### Custom Configuration

In `appsettings.Development.json`:

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
# Use dotnet-trace
dotnet tool install --global dotnet-trace

# Trace the application
dotnet trace collect --process-id <PID>

# Analyze
speedscope trace.nettrace
```

## 🔍 Debugging Tips

### Blazor Specific

```csharp
// Log in Browser Console
Console.WriteLine("Debug message");

// Use IJSRuntime
await JSRuntime.InvokeVoidAsync("console.log", "Message from C#");
```

### Source Link

For debugging in NuGet packages:

```xml
<PropertyGroup>
  <PublishRepositoryUrl>true</PublishRepositoryUrl>
  <EmbedUntrackedSources>true</EmbedUntrackedSources>
  <DebugType>embedded</DebugType>
</PropertyGroup>
```

## 📱 Mobile Development

For testing on mobile:

```bash
# Run with specific IP
dotnet run --urls "http://0.0.0.0:5000"

# Access from mobile
http://<your-ip>:5000
```

## 🚀 Tips & Tricks

### Faster Build

```bash
# Use parallel build
dotnet build -m

# Clear NuGet cache
dotnet nuget locals all --clear
```

### VS Code Tasks

Use Tasks available in `.vscode/tasks.json`:

- `Ctrl+Shift+B`: Build
- From Command Palette: `Tasks: Run Task`

### Snippets

Useful snippets in `.vscode/*.code-snippets`:

- `blazor-component`: Blazor component
- `api-controller`: API Controller
- `service-impl`: Service implementation

## 🆘 Common Issues

### Build Errors

```bash
# Clear cache
dotnet clean
dotnet nuget locals all --clear
dotnet restore
dotnet build
```

### Hot Reload Not Working

```bash
# Restart dotnet watch
Ctrl+C
dotnet watch run
```

### Port In Use

```bash
# Change port in launchSettings.json
"applicationUrl": "https://localhost:5002;http://localhost:5001"
```

## 📚 Useful Resources

- [Blazor Docs](https://docs.microsoft.com/aspnet/core/blazor)
- [C# Coding Conventions](https://docs.microsoft.com/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- [.NET CLI](https://docs.microsoft.com/dotnet/core/tools)

---

**Have questions?** Open an issue or ask in Discussions!

