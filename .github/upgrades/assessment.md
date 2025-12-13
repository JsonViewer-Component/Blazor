# Projects and dependencies analysis

This document provides a comprehensive overview of the projects and their dependencies in the context of upgrading to .NETCoreApp,Version=v8.0.

## Table of Contents

- [Executive Summary](#executive-Summary)
  - [Highlevel Metrics](#highlevel-metrics)
  - [Projects Compatibility](#projects-compatibility)
  - [Package Compatibility](#package-compatibility)
  - [API Compatibility](#api-compatibility)
- [Aggregate NuGet packages details](#aggregate-nuget-packages-details)
- [Top API Migration Challenges](#top-api-migration-challenges)
  - [Technologies and Features](#technologies-and-features)
  - [Most Frequent API Issues](#most-frequent-api-issues)
- [Projects Relationship Graph](#projects-relationship-graph)
- [Project Details](#project-details)

  - [src\Blazor.Demo\Blazor.Demo.csproj](#srcblazordemoblazordemocsproj)
  - [src\Component\Component.csproj](#srccomponentcomponentcsproj)


## Executive Summary

### Highlevel Metrics

| Metric | Count | Status |
| :--- | :---: | :--- |
| Total Projects | 2 | 1 require upgrade |
| Total NuGet Packages | 4 | 1 need upgrade |
| Total Code Files | 4 |  |
| Total Code Files with Incidents | 1 |  |
| Total Lines of Code | 165 |  |
| Total Number of Issues | 2 |  |
| Estimated LOC to modify | 0+ | at least 0.0% of codebase |

### Projects Compatibility

| Project | Target Framework | Difficulty | Package Issues | API Issues | Est. LOC Impact | Description |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| [src\Blazor.Demo\Blazor.Demo.csproj](#srcblazordemoblazordemocsproj) | net8.0 | ✅ None | 0 | 0 |  | AspNetCore, Sdk Style = True |
| [src\Component\Component.csproj](#srccomponentcomponentcsproj) | net6.0;net7.0;net8.0;net9.0;net10.0 | 🟢 Low | 1 | 0 |  | ClassLibrary, Sdk Style = True |

### Package Compatibility

| Status | Count | Percentage |
| :--- | :---: | :---: |
| ✅ Compatible | 3 | 75.0% |
| ⚠️ Incompatible | 0 | 0.0% |
| 🔄 Upgrade Recommended | 1 | 25.0% |
| ***Total NuGet Packages*** | ***4*** | ***100%*** |

### API Compatibility

| Category | Count | Impact |
| :--- | :---: | :--- |
| 🔴 Binary Incompatible | 0 | High - Require code changes |
| 🟡 Source Incompatible | 0 | Medium - Needs re-compilation and potential conflicting API error fixing |
| 🔵 Behavioral change | 0 | Low - Behavioral changes that may require testing at runtime |
| ✅ Compatible | 4631 |  |
| ***Total APIs Analyzed*** | ***4631*** |  |

## Aggregate NuGet packages details

| Package | Current Version | Suggested Version | Projects | Description |
| :--- | :---: | :---: | :--- | :--- |
| Microsoft.AspNetCore.Components.Web | 6.0.36 | 8.0.22 | [Component.csproj](#srccomponentcomponentcsproj) | NuGet package upgrade is recommended |
| Microsoft.AspNetCore.Components.WebAssembly | 8.0.11 |  | [Blazor.Demo.csproj](#srcblazordemoblazordemocsproj) | ✅Compatible |
| Microsoft.AspNetCore.Components.WebAssembly.DevServer | 8.0.11 |  | [Blazor.Demo.csproj](#srcblazordemoblazordemocsproj) | ✅Compatible |
| Microsoft.SourceLink.GitHub | 8.0.0 |  | [Blazor.Demo.csproj](#srcblazordemoblazordemocsproj)<br/>[Component.csproj](#srccomponentcomponentcsproj) | ✅Compatible |

## Top API Migration Challenges

### Technologies and Features

| Technology | Issues | Percentage | Migration Path |
| :--- | :---: | :---: | :--- |

### Most Frequent API Issues

| API | Count | Percentage | Category |
| :--- | :---: | :---: | :--- |

## Projects Relationship Graph

Legend:
📦 SDK-style project
⚙️ Classic project

```mermaid
flowchart LR
    P1["<b>📦&nbsp;Blazor.Demo.csproj</b><br/><small>net8.0</small>"]
    P2["<b>📦&nbsp;Component.csproj</b><br/><small>net6.0;net7.0;net8.0;net9.0;net10.0</small>"]
    P1 --> P2
    click P1 "#srcblazordemoblazordemocsproj"
    click P2 "#srccomponentcomponentcsproj"

```

## Project Details

<a id="srcblazordemoblazordemocsproj"></a>
### src\Blazor.Demo\Blazor.Demo.csproj

#### Project Info

- **Current Target Framework:** net8.0✅
- **SDK-style**: True
- **Project Kind:** AspNetCore
- **Dependencies**: 1
- **Dependants**: 0
- **Number of Files**: 21
- **Lines of Code**: 14
- **Estimated LOC to modify**: 0+ (at least 0.0% of the project)

#### Dependency Graph

Legend:
📦 SDK-style project
⚙️ Classic project

```mermaid
flowchart TB
    subgraph current["Blazor.Demo.csproj"]
        MAIN["<b>📦&nbsp;Blazor.Demo.csproj</b><br/><small>net8.0</small>"]
        click MAIN "#srcblazordemoblazordemocsproj"
    end
    subgraph downstream["Dependencies (1"]
        P2["<b>📦&nbsp;Component.csproj</b><br/><small>net6.0;net7.0;net8.0;net9.0;net10.0</small>"]
        click P2 "#srccomponentcomponentcsproj"
    end
    MAIN --> P2

```

### API Compatibility

| Category | Count | Impact |
| :--- | :---: | :--- |
| 🔴 Binary Incompatible | 0 | High - Require code changes |
| 🟡 Source Incompatible | 0 | Medium - Needs re-compilation and potential conflicting API error fixing |
| 🔵 Behavioral change | 0 | Low - Behavioral changes that may require testing at runtime |
| ✅ Compatible | 0 |  |
| ***Total APIs Analyzed*** | ***0*** |  |

<a id="srccomponentcomponentcsproj"></a>
### src\Component\Component.csproj

#### Project Info

- **Current Target Framework:** net6.0;net7.0;net8.0;net9.0;net10.0
- **Proposed Target Framework:** net6.0;net7.0;net8.0;net9.0;net10.0;net8.0
- **SDK-style**: True
- **Project Kind:** ClassLibrary
- **Dependencies**: 0
- **Dependants**: 1
- **Number of Files**: 14
- **Number of Files with Incidents**: 1
- **Lines of Code**: 151
- **Estimated LOC to modify**: 0+ (at least 0.0% of the project)

#### Dependency Graph

Legend:
📦 SDK-style project
⚙️ Classic project

```mermaid
flowchart TB
    subgraph upstream["Dependants (1)"]
        P1["<b>📦&nbsp;Blazor.Demo.csproj</b><br/><small>net8.0</small>"]
        click P1 "#srcblazordemoblazordemocsproj"
    end
    subgraph current["Component.csproj"]
        MAIN["<b>📦&nbsp;Component.csproj</b><br/><small>net6.0;net7.0;net8.0;net9.0;net10.0</small>"]
        click MAIN "#srccomponentcomponentcsproj"
    end
    P1 --> MAIN

```

### API Compatibility

| Category | Count | Impact |
| :--- | :---: | :--- |
| 🔴 Binary Incompatible | 0 | High - Require code changes |
| 🟡 Source Incompatible | 0 | Medium - Needs re-compilation and potential conflicting API error fixing |
| 🔵 Behavioral change | 0 | Low - Behavioral changes that may require testing at runtime |
| ✅ Compatible | 4631 |  |
| ***Total APIs Analyzed*** | ***4631*** |  |

