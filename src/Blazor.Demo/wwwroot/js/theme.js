// Theme helper functions for demo page
window.demoTheme = {
    // Set theme attribute on document element
    setTheme: function(theme) {
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    },
    
    // Get theme from localStorage
    getTheme: function() {
        try {
            return localStorage.getItem('demo-theme') || 'dark';
        } catch {
            return 'dark';
        }
    },
    
    // Save theme to localStorage and trigger storage event for JsonViewer
    saveTheme: function(theme) {
        try {
            localStorage.setItem('demo-theme', theme);
            localStorage.setItem('json-viewer-theme', theme);
            
            // Trigger storage event manually for same-window update
            // This will notify JsonViewer component to update its theme
            window.dispatchEvent(new StorageEvent('storage', {
                key: 'json-viewer-theme',
                newValue: theme,
                oldValue: localStorage.getItem('json-viewer-theme'),
                url: window.location.href,
                storageArea: localStorage
            }));
            
            return true;
        } catch {
            return false;
        }
    }
};
