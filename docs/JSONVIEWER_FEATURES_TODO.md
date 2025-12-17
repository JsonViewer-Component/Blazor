## JsonViewer Component – Feature TODO Roadmap

Below is a **prioritized roadmap** you can turn directly into **GitHub issues**.
For each feature there is: an **Issue title**, a **short description**, and a **task checklist**.

---

## Milestone: Core UX & Editing (MVP+)

### 1. Inline JSON value editing (basic edit mode)

- **Issue Title**: `Add inline JSON value editing (basic edit mode)`
- **Description**:
  Enable users to edit primitive JSON values (string, number, boolean, null) directly from the viewer UI. The change should be reflected in the underlying JSON model and exposed via a component callback/event so consumers can react to updates (e.g., save to server).
- **Tasks**:
  - [ ] Add edit controls for primitive values (e.g. click to edit, or small edit icon).
  - [ ] Validate edited values according to their JSON type.
  - [ ] Update internal JSON model when a value changes.
  - [ ] Expose an `OnJsonChanged` (or similar) callback with the updated JSON.
  - [ ] Add basic docs and a minimal demo in the sample app.

---

### 2. Live JSON validation feedback

- **Issue Title**: `Provide live JSON validation and error feedback`
- **Description**:
  Add live JSON validation so that invalid JSON input (e.g., from a bound string or edit mode) shows clear error messages. When the JSON is invalid, the viewer should fail gracefully and show the error instead of crashing or silently failing.
- **Tasks**:
  - [ ] Add JSON parsing/validation with clear error messages.
  - [ ] Display validation errors in the UI (error panel or inline banner).
  - [ ] Ensure invalid JSON does not break the component rendering.
  - [ ] Optionally surface error details via a callback/event.
  - [ ] Document how validation works and how consumers can handle errors.

---

### 3. Node selection and events API

- **Issue Title**: `Add node selection support and selection events`
- **Description**:
  Allow users to select a node (object, array, property, value) in the JSON tree and expose selection information to the parent application. This enables features like context menus, external inspectors, or property editors.
- **Tasks**:
  - [ ] Add visual selection state for a node (e.g., highlight selected row).
  - [ ] Expose an `OnNodeSelected` (or similar) event with JSON path and value.
  - [ ] Ensure keyboard/mouse selection behavior is consistent.
  - [ ] Add an example that logs the selected node information.
  - [ ] Document the selection API.

---

## Milestone: Advanced Navigation & Query

### 4. JSONPath query input and results highlighting

- **Issue Title**: `Add JSONPath query input with result highlighting`
- **Description**:
  Provide an input where users can type a JSONPath expression and see all matching nodes highlighted in the viewer. Optionally show the list of matches (paths/values) in a side panel.
- **Tasks**:
  - [ ] Add a JSONPath input UI to the component (configurable to show/hide).
  - [ ] Evaluate JSONPath expressions against the current JSON.
  - [ ] Highlight all matched nodes in the tree view.
  - [ ] Optionally show a list of matched paths/values.
  - [ ] Handle invalid JSONPath with a friendly error message.
  - [ ] Document JSONPath usage and limitations.

---

### 5. Enhanced search and navigation between matches

- **Issue Title**: `Enhance search with next/previous navigation and filters`
- **Description**:
  Improve the existing search feature by allowing users to jump between matches (next/previous) and optionally filter by key, value, or data type.
- **Tasks**:
  - [ ] Add "Next" / "Previous" navigation for search results.
  - [ ] Optionally add filters: search in keys, values, or both.
  - [ ] Optionally add filter by data type (string, number, bool, etc.).
  - [ ] Make the current match clearly highlighted.
  - [ ] Ensure performance is acceptable for medium/large JSON.
  - [ ] Update docs and demos to show the new search UX.

---

## Milestone: Visualization & Insights

### 6. JSON statistics panel (advanced insights)

- **Issue Title**: `Add advanced JSON statistics and insights panel`
- **Description**:
  Provide an optional statistics panel that gives insights into the JSON structure (counts, depth, type distribution, approximate size, etc.). This can build upon or extend any existing statistics feature.
- **Tasks**:
  - [ ] Compute basic metrics: total nodes, objects, arrays, max depth.
  - [ ] Compute per-type counts (string, number, bool, null, etc.).
  - [ ] Estimate JSON size in bytes/KB.
  - [ ] Display metrics in a compact panel next to or above the viewer.
  - [ ] Allow enabling/disabling the stats panel via a parameter.
  - [ ] Document the statistics feature and configuration.

---

### 7. Smart expand/collapse controls

- **Issue Title**: `Implement smart expand/collapse controls for JSON tree`
- **Description**:
  Improve the expand/collapse behavior with global controls (expand/collapse all) and a configurable default depth, so complex JSON structures remain manageable and fast to explore.
- **Tasks**:
  - [ ] Add "Expand all" and "Collapse all" actions (optional UI buttons).
  - [ ] Add a parameter for default expansion depth (e.g., `DefaultExpandDepth`).
  - [ ] Ensure expand/collapse operations are efficient for large JSON.
  - [ ] Preserve expand/collapse state when possible (e.g., when re-rendering with same data).
  - [ ] Update documentation with examples for configuration.

---

## Milestone: Large JSON & Performance

### 8. Large JSON virtualization and lazy loading

- **Issue Title**: `Optimize rendering for large JSON documents (virtualization)`
- **Description**:
  Add performance optimizations (such as virtualization and/or lazy loading) to handle large JSON documents without freezing the UI. Only visible portions of the tree should be rendered at any time.
- **Tasks**:
  - [ ] Identify performance bottlenecks with large JSON samples.
  - [ ] Implement virtualization or incremental rendering for tree nodes.
  - [ ] Optionally add a soft limit or warning for very large inputs.
  - [ ] Ensure scrolling and interaction remain smooth.
  - [ ] Add a demo page with a large JSON file.
  - [ ] Document performance considerations and any configuration options.

---

## Milestone: Theming & Integration

### 9. Theming with CSS variables and dark mode

- **Issue Title**: `Improve theming support and dark mode customization`
- **Description**:
  Enhance theming by exposing key colors and styles via CSS variables and making sure dark mode looks polished. Consumers should be able to easily align the JSON viewer with their app theme.
- **Tasks**:
  - [ ] Identify key style tokens (background, text, borders, selection, etc.).
  - [ ] Expose them as CSS variables or clear class hooks.
  - [ ] Ensure dark mode theme is consistent and readable.
  - [ ] Add examples for overriding styles from a parent app.
  - [ ] Update documentation with theming guidance.

---

### 10. Improved copy/export options

- **Issue Title**: `Enhance copy and export options for JSON and nodes`
- **Description**:
  Extend the existing copy/export functionality to support copying a node or subtree as JSON, and exporting either the whole document or a selected part with pretty-print or minified formats.
- **Tasks**:
  - [ ] Add option to copy a single node or subtree as JSON.
  - [ ] Support copy/export of full JSON in pretty/minified modes.
  - [ ] Expose configuration for which copy/export options are visible.
  - [ ] Ensure exported JSON is always valid and uses current state.
  - [ ] Add documentation and examples.
