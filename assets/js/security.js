/**
 * SGM Network - Global Security Script
 * Protects against basic inspection, copying, and reverse engineering.
 */
(function () {
    // 1. Disable Right Click
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    }, false);

    // 2. Disable Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+U, etc.)
    document.addEventListener('keydown', function (e) {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+I (Chrome, Edge, Firefox Developer Tools)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+J (Chrome, Edge Developer Tools - Console)
        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+C (Chrome, Edge Developer Tools - Inspector)
        if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+U (View Source)
        if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+S (Save Page)
        if (e.ctrlKey && (e.key === 'S' || e.key === 's' || e.keyCode === 83)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+P (Print Page)
        if (e.ctrlKey && (e.key === 'P' || e.key === 'p' || e.keyCode === 80)) {
            e.preventDefault();
            return false;
        }
    }, false);

    // 3. Disable Text/Image Dragging
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
    }, false);

    // 4. Disable Text Selection via JS (fallback to CSS)
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    }, false);

    // 5. DevTools Detection - Debugger Trap
    function devtoolsTrap() {
        setInterval(function () {
            (function () {
                return false;
            }["constructor"]("debugger")());
        }, 100);
    }

    // Start debugger trap
    // devtoolsTrap(); // Disabled for Live Server compatibility

})();
