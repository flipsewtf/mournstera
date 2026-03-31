// @ts-nocheck
(() => {
    const buttons = document.querySelectorAll('.theme-toggle');
    if (!buttons.length) return;

    const root = document.documentElement;
    const storageKey = 'monstera-theme';

    const getStoredTheme = () => localStorage.getItem(storageKey);
    const getSystemTheme = () =>
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const getTooltipText = (theme) => (theme === 'dark' ? 'Enable light mode' : 'Enable dark mode');

    const applyTheme = (theme) => {
        root.classList.add('no-transition');
        root.setAttribute('data-theme', theme);

        buttons.forEach((btn) => {
            btn.ariaPressed = String(theme === 'dark');
            btn.setAttribute('aria-label', getTooltipText(theme));
            btn.setAttribute('data-tooltip', getTooltipText(theme));
        });

        // Wait long enough for the paint to settle, then re-enable transitions
        setTimeout(() => {
            root.classList.remove('no-transition');
        }, 50); // 50ms is imperceptible to humans but reliable
    };

    const setUserTheme = (theme) => localStorage.setItem(storageKey, theme);

    // Initial theme: stored OR system
    applyTheme(getStoredTheme() || getSystemTheme());

    // Button click: toggle and store
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            setUserTheme(next);
        });
    });

    // **Always** listen to system changes, override even if user clicked
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    mql.addEventListener('change', (e) => {
        const systemTheme = e.matches ? 'dark' : 'light';
        applyTheme(systemTheme);
        // optional: overwrite storage so it reflects system
        localStorage.setItem(storageKey, systemTheme);
    });
})();
