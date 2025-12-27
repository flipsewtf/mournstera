// @ts-nocheck
(() => {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    const root = document.documentElement;
    const storageKey = 'theme';

    // Read user preference if any
    const getStoredTheme = () => localStorage.getItem(storageKey);

    // Check system preference
    const getSystemTheme = () =>
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    // Apply theme and update button
    const applyTheme = (theme) => {
        root.classList.add('no-transition');

        root.setAttribute('data-theme', theme);
        btn.setAttribute('aria-pressed', theme === 'dark');
        btn.setAttribute('aria-label', theme === 'dark' ? 'Enable light mode' : 'Enable dark mode');

        void root.offsetWidth; // force reflow
        root.classList.remove('no-transition');
    };

    // Save user preference
    const setUserTheme = (theme) => localStorage.setItem(storageKey, theme);

    // Determine initial theme
    const initialTheme = getStoredTheme() || getSystemTheme();
    applyTheme(initialTheme);

    // Click handler: toggle theme
    btn.addEventListener('click', () => {
        const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        setUserTheme(next); // lock in user preference
    });

    // Listen to system changes only if no user preference
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    mql.addEventListener('change', (e) => {
        if (!getStoredTheme()) {
            const systemTheme = e.matches ? 'dark' : 'light';
            applyTheme(systemTheme);
        }
    });
})();
