/**
 * SGM Network - Admin Absolute Security Script
 * Maximum protection for the Admin page.
 * Blocks all devtools access and actively destroys page if inspection is detected.
 */
(function () {
    // 1. Extreme Keyboard Blocking
    document.addEventListener('keydown', function (e) {
        // Prevent F1-F12
        if (e.keyCode >= 112 && e.keyCode <= 123) {
            e.preventDefault();
            return false;
        }

        // Prevent all Ctrl/Cmd combos related to copying/inspecting
        if (e.ctrlKey || e.metaKey) {
            const forbiddenKeys = ['I', 'J', 'U', 'S', 'C', 'P', 'X', 'A', 'i', 'j', 'u', 's', 'c', 'p', 'x', 'a'];
            if (forbiddenKeys.includes(e.key) || e.shiftKey) {
                e.preventDefault();
                return false;
            }
        }
    }, true);

    // 2. Disable Right Click instantly in capturing phase
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, true);

    // 3. Disable drag and selection
    document.addEventListener('dragstart', function (e) { e.preventDefault(); }, true);
    document.addEventListener('selectstart', function (e) { e.preventDefault(); }, true);

    // 4. Extreme DevTools Trap
    function burnItDown() {
        console.warn("DevTools inspection detected (Disabled for Live Server compatibility).");
    }

    /*
    const devtools = function () { };
    devtools.toString = function () {
        burnItDown();
        return '-';
    };

    setInterval(function () {
        // Debugger Trap
        Function("debugger")();

        // Console timing check (console opens slow down execution)
        const t1 = performance.now();
        debugger;
        const t2 = performance.now();
        if (t2 - t1 > 100) {
            burnItDown();
        }

        // Profile trap
        console.profile(devtools);
        console.profileEnd(devtools);
    }, 50);

    // 5. Check window size discrepancy (indicates open DevTools)
    function checkSize() {
        const threshold = 160;
        if ((window.outerWidth - window.innerWidth > threshold) ||
            (window.outerHeight - window.innerHeight > threshold)) {
            burnItDown();
        }
    }

    // Check multiple times per second
    setInterval(checkSize, 500);

    // Clear console aggressively
    setInterval(function () {
        console.clear();
        console.log("%cSTOP!", "color: red; font-size: 50px; font-weight: bold;");
        console.log("%cThis is a restricted area.", "color: black; font-size: 20px;");
    }, 1000);
    */

})();
