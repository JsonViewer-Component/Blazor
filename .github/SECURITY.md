# Security Policy

## 🔒 Reporting Security Vulnerabilities

The JsonViewer.Blazor team takes security seriously. We appreciate your efforts to responsibly disclose your findings and will make every effort to acknowledge your contributions.

### 📧 How to Report a Security Vulnerability

**Please DO NOT report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by emailing:

**security@jsonviewer-component.com**

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

### 📋 What to Include in Your Report

Please include as much of the following information as possible:

- **Type of issue** (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- **Full paths of source file(s)** related to the manifestation of the issue
- **Location of the affected source code** (tag/branch/commit or direct URL)
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept or exploit code** (if possible)
- **Impact of the issue**, including how an attacker might exploit it

This information will help us triage your report more quickly.

## 🛡️ Supported Versions

We provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.0.2-beta   | :white_check_mark: |
| 0.0.1-beta   | :x:                |
| < 0.0.1 | :x:                |

## 🔄 Security Update Policy

- **Critical vulnerabilities**: Patch released within 24-48 hours
- **High severity**: Patch released within 7 days
- **Medium severity**: Patch released in next scheduled release
- **Low severity**: Evaluated for inclusion in future releases

## 🎯 Security Best Practices

When using JsonViewer.Blazor, we recommend:

### Input Validation

```csharp
// Always validate JSON input before passing to the component
try
{
    var validatedJson = JsonDocument.Parse(userInput);
    jsonViewerData = validatedJson.RootElement.ToString();
}
catch (JsonException)
{
    // Handle invalid JSON
}
```

### Content Security Policy (CSP)

Ensure your application has appropriate CSP headers:

```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' 'unsafe-inline' 'unsafe-eval';
               style-src 'self' 'unsafe-inline';">
```

### Data Sanitization

```csharp
// Sanitize user input before display
public string SanitizeJsonData(string input)
{
    // Remove any potential XSS vectors
    return System.Text.RegularExpressions.Regex.Replace(
        input,
        @"<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>",
        string.Empty,
        System.Text.RegularExpressions.RegexOptions.IgnoreCase
    );
}
```

## 🔍 Known Security Considerations

### JSON Size Limits

By default, JsonViewer.Blazor handles JSON files efficiently, but extremely large files (>100MB) may cause performance issues or memory exhaustion:

```csharp
// Implement size limits
if (jsonString.Length > 104857600) // 100MB
{
    throw new InvalidOperationException("JSON file too large");
}
```

### Browser Security

The component operates within browser security constraints:

- Respects Same-Origin Policy
- No external network requests
- Local storage usage is configurable

## 📜 Disclosure Policy

When we receive a security bug report, we will:

1. **Confirm the problem** and determine affected versions
2. **Audit code** to find any similar problems
3. **Prepare fixes** for all supported versions
4. **Release new versions** as soon as possible
5. **Publish security advisory** on GitHub

## 🏆 Security Hall of Fame

We recognize security researchers who help keep our project safe:

<!-- Security researchers will be listed here -->

*Be the first to responsibly disclose a vulnerability!*

## 🔐 Cryptographic Signatures

All official releases are:
- Tagged in Git with GPG signature
- Published to NuGet with package signing
- Verified through GitHub Actions

## 📞 Contact

- **Security Email**: security@jsonviewer-component.com
- **General Email**: support@jsonviewer-component.com
- **GitHub**: [@JsonViewer-Component/Blazor](https://github.com/JsonViewer-Component/Blazor)

## 🤝 Acknowledgments

We thank the security community for their responsible disclosure and assistance in keeping JsonViewer.Blazor secure.

---

**Last Updated**: December 2025

For more information about our security practices, please visit our [Security Documentation](https://jsonviewer-component.github.io/Blazor/security).

