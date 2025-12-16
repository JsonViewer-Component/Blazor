namespace Component.Models;

/// <summary>
/// Model for JSON Path information
/// </summary>
public class JsonPathInfo
{
    /// <summary>
    /// Full JSON path (e.g., $.user.profile.name)
    /// </summary>
    public string Path { get; set; } = string.Empty;

    /// <summary>
    /// Property name
    /// </summary>
    public string PropertyName { get; set; } = string.Empty;

    /// <summary>
    /// Property value as string
    /// </summary>
    public string PropertyValue { get; set; } = string.Empty;

    /// <summary>
    /// Property type (String, Number, Boolean, Object, Array, Null)
    /// </summary>
    public string PropertyType { get; set; } = string.Empty;

    /// <summary>
    /// Is this path currently selected
    /// </summary>
    public bool IsSelected { get; set; }

    /// <summary>
    /// Depth level in JSON structure
    /// </summary>
    public int Level { get; set; }
}
