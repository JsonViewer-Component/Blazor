# Contributing to JsonViewer.Blazor

First off, thank you for considering contributing to JsonViewer.Blazor! 🎉

It's people like you that make JsonViewer.Blazor such a great tool. We welcome contributions from everyone, whether it's:

- 🐛 Reporting a bug
- 💬 Discussing the current state of the code
- 📝 Submitting a fix
- 🚀 Proposing new features
- 📖 Improving documentation
- 🌐 Translating documentation

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [existing issues](https://github.com/JsonViewer-Component/Blazor/issues) to avoid duplicates.

When you create a bug report, please include as many details as possible:

- Use our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.yml)
- Include screenshots or GIFs if applicable
- Provide code samples to reproduce the issue
- Describe the expected vs actual behavior

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/JsonViewer-Component/Blazor/issues).

- Use our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.yml)
- Provide a clear description of the enhancement
- Explain why this enhancement would be useful
- Include code examples or mockups if applicable

### Your First Code Contribution

Unsure where to begin? You can start by looking through these issues:

- `good-first-issue` - Issues that should only require a few lines of code
- `help-wanted` - Issues that are a bit more involved

### Pull Requests

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💻 Development Setup

### Prerequisites

- [.NET 7.0 SDK](https://dotnet.microsoft.com/download) or later
- [Git](https://git-scm.com/downloads)
- IDE (Visual Studio 2022, VS Code, or Rider)

### Setup Steps

```bash
# Clone the repository
git clone https://github.com/JsonViewer-Component/Blazor.git

# Navigate to the project directory
cd Blazor

# Restore dependencies
dotnet restore

# Build the solution
dotnet build

# Run the demo application
dotnet run --project src/Blazor.Demo/Blazor.Demo.csproj

# Run tests
dotnet test
```

### Project Structure

```
Blazor/
├── src/
│   ├── Component/              # Main component library
│   │   ├── Core/
│   │   │   ├── JsonViewer.razor
│   │   │   └── Features/
│   │   ├── Models/
│   │   └── Services/
│   └── Blazor.Demo/           # Demo application
├── .github/
│   ├── workflows/             # CI/CD pipelines
│   └── ISSUE_TEMPLATE/       # Issue templates
├── Documents/                # Additional documentation
└── README.md
```

## 🔄 Pull Request Process

1. **Update Documentation**: Ensure any changes are documented
2. **Update Tests**: Add or update tests for your changes
3. **Update CHANGELOG**: Add your changes to [CHANGELOG.md](CHANGELOG.md)
4. **Follow Code Standards**: Ensure your code follows our coding standards
5. **Request Review**: Tag maintainers for review

### PR Requirements

- [ ] Code follows the project's coding standards
- [ ] Self-review performed
- [ ] Comments added to complex areas
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated and passing
- [ ] CHANGELOG updated

## 📏 Coding Standards

### C# Conventions

- **PascalCase** for class names, methods, and properties
- **camelCase** for local variables and parameters
- **_camelCase** for private fields
- Use `var` when the type is obvious
- Always use braces `{}` even for single-line statements

```csharp
// ✅ Good
public class MyComponent
{
    private readonly ILogger<MyComponent> _logger;

    public string PropertyName { get; set; }

    public async Task DoSomethingAsync()
    {
        if (condition)
        {
            await Task.CompletedTask;
        }
    }
}

// ❌ Bad
public class myComponent
{
    public string property_name;

    public void doSomething()
    {
        if (condition)
            return;
    }
}
```

### Razor/Blazor Conventions

- Use 4 spaces for indentation
- Parameters at the top of components
- Use `@inject` for dependency injection

```razor
@inject IMyService MyService

<div class="component">
    @if (ShowContent)
    {
        <p>@Message</p>
    }
</div>

@code {
    [Parameter]
    public string Message { get; set; } = string.Empty;

    [Parameter]
    public bool ShowContent { get; set; }

    protected override async Task OnInitializedAsync()
    {
        await base.OnInitializedAsync();
    }
}
```

### File Organization

- One class per file
- File name matches class name
- Group related files in directories

## 📝 Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, missing semi-colons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes
- `ci`: CI configuration changes

### Examples

```bash
feat(search): add keyboard shortcuts for navigation

Add Enter and Shift+Enter shortcuts to navigate between search matches.
Improves user experience when searching through large JSON files.

Closes #123
```

```bash
fix(theme): resolve localStorage persistence issue

Fixed bug where theme preference wasn't being saved correctly in some browsers.

Fixes #456
```

## 🧪 Running Tests

```bash
# Run all tests
dotnet test

# Run with verbose output
dotnet test --verbosity detailed

# Run specific test
dotnet test --filter "FullyQualifiedName~JsonViewerTests"

# Run with coverage
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

## 📦 Building for Production

```bash
# Build in Release mode
dotnet build -c Release

# Create NuGet package
dotnet pack -c Release -o ./packages
```

## 🔍 Code Review Process

All submissions require review. We use GitHub Pull Requests for this purpose:

1. Maintainers will review your code
2. Automated checks must pass
3. At least one approval required
4. All comments must be resolved
5. Merge when ready

## 🌟 Recognition

Contributors will be recognized in:

- [README.md](README.md) acknowledgments section
- Release notes for the version
- Project's contributors page

## 📞 Getting Help

- 💬 [GitHub Discussions](https://github.com/JsonViewer-Component/Blazor/discussions)
- 🐛 [Issue Tracker](https://github.com/JsonViewer-Component/Blazor/issues)
- 📧 Email: support@jsonviewer-component.com

## 📚 Additional Resources

- [Blazor Documentation](https://docs.microsoft.com/aspnet/core/blazor)
- [C# Coding Conventions](https://docs.microsoft.com/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

**Thank you for contributing to JsonViewer.Blazor!** 🙏

Your contributions make the open-source community an amazing place to learn, inspire, and create. Every contribution is appreciated!

---

*This Contributing Guide is adapted from open-source contribution guidelines best practices.*
