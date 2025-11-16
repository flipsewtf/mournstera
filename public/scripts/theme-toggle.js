// @ts-nocheck
(() => {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    const root = document.documentElement;

    function getStoredTheme() {
        return (
            localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        );
    }

    function applyTheme(theme) {
        // temporarily disable transitions
        root.classList.add('no-transition');

        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        btn.setAttribute('aria-pressed', theme === 'dark');
        btn.setAttribute('aria-label', theme === 'dark' ? 'Enable light mode' : 'Enable dark mode');

        // and force reflow to flush any pending transitions
        void root.offsetWidth;

        // remove the class so hover transitions work normally again
        root.classList.remove('no-transition');
    }

    // initialize
    applyTheme(getStoredTheme());

    btn.addEventListener('click', function () {
        const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });
})();
