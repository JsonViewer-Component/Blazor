# GitHub Workflows & Automation

This directory contains all GitHub Actions workflows and automation configurations for JsonViewer.Blazor.

## 📁 Directory Structure

```
.github/
├── workflows/              # CI/CD workflows
│   ├── build.yml          # Build & test on PR/push
│   ├── deploy-pages.yml   # Deploy demo to GitHub Pages
│   ├── nuget-publish.yml  # Publish to NuGet
│   ├── codeql.yml         # Security analysis
│   ├── labeler.yml        # Auto-label PRs
│   ├── greet-new-contributors.yml
│   └── stale.yml          # Mark stale issues
├── ISSUE_TEMPLATE/        # Issue templates
│   ├── bug_report.yml
│   ├── feature_request.yml
│   ├── question.yml
│   └── config.yml
├── DISCUSSION_TEMPLATE/   # Discussion templates
│   └── ideas.yml
├── PULL_REQUEST_TEMPLATE.md
├── FUNDING.yml            # Sponsor configuration
├── dependabot.yml         # Dependency updates
└── labeler.yml            # Label configuration
```

## 🔄 Workflows

### Build & Test (`build.yml`)
- **Trigger**: Push to main/develop, Pull requests
- **Actions**:
  - Restore dependencies
  - Build solution
  - Run tests
  - Code coverage
  - Format check
  - Code analysis

### Deploy GitHub Pages (`deploy-pages.yml`)
- **Trigger**: Push to main, Manual
- **Actions**:
  - Build Blazor WASM
  - Configure base path
  - Deploy to GitHub Pages

### Publish to NuGet (`nuget-publish.yml`)
- **Trigger**: Release published, Manual
- **Actions**:
  - Build & test
  - Create NuGet package
  - Publish to NuGet.org

### CodeQL Security (`codeql.yml`)
- **Trigger**: Push, PR, Weekly schedule
- **Actions**:
  - Security analysis
  - Vulnerability scanning
  - Code quality checks

### Auto Labeler (`labeler.yml`)
- **Trigger**: Pull request
- **Actions**:
  - Auto-label based on file changes

### Greet Contributors (`greet-new-contributors.yml`)
- **Trigger**: First issue/PR
- **Actions**:
  - Welcome message
  - Helpful resources

### Stale Management (`stale.yml`)
- **Trigger**: Daily schedule
- **Actions**:
  - Mark stale issues/PRs
  - Close inactive items

## 🔐 Secrets Required

The following secrets need to be configured in repository settings:

- `NUGET_API_KEY` - For publishing to NuGet.org

## 🏷️ Labels

Labels are automatically applied based on:
- File changes (component, demo, docs, etc.)
- Issue/PR type (bug, feature, question)
- Status (stale, in-progress, etc.)

## 📋 Issue & PR Templates

### Issue Templates
- **Bug Report**: Detailed bug reporting with environment info
- **Feature Request**: Feature suggestions with priority
- **Question**: Ask questions about usage

### Pull Request Template
- Comprehensive checklist
- Code quality requirements
- Testing requirements
- Documentation requirements

## 🤝 Contributing

See the main [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

## 🔄 Workflow Badges

Add these to your README:

```markdown
[![Build Status](https://github.com/JsonViewer-Component/Blazor/actions/workflows/build.yml/badge.svg)](https://github.com/JsonViewer-Component/Blazor/actions/workflows/build.yml)
[![Deploy Pages](https://github.com/JsonViewer-Component/Blazor/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/JsonViewer-Component/Blazor/actions/workflows/deploy-pages.yml)
[![CodeQL](https://github.com/JsonViewer-Component/Blazor/actions/workflows/codeql.yml/badge.svg)](https://github.com/JsonViewer-Component/Blazor/actions/workflows/codeql.yml)
```

## 📞 Support

If you have questions about workflows or need help with automation:
- 💬 [GitHub Discussions](https://github.com/JsonViewer-Component/Blazor/discussions)
- 📧 Email: ci-cd@jsonviewer-component.com

