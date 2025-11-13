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
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        btn.setAttribute('aria-pressed', theme === 'dark');
        btn.setAttribute('aria-label', theme === 'dark' ? 'Enable light mode' : 'Enable dark mode');
    }

    // initialize
    applyTheme(getStoredTheme());

    btn.addEventListener('click', function () {
        const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });
})();
