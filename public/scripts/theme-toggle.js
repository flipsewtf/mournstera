//theme toggle

(function () {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    const root = document.documentElement;

    // Initialize stored theme
    const storedTheme =
        localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light');

    root.setAttribute('data-theme', storedTheme);
    btn.setAttribute('aria-pressed', storedTheme === 'dark');
    btn.setAttribute(
        'aria-label',
        storedTheme === 'dark' ? 'Enable light mode' : 'Enable dark mode'
    );

    btn.addEventListener('click', () => {
        const current = root.getAttribute('data-theme');
        const target = current === 'dark' ? 'light' : 'dark';

        root.setAttribute('data-theme', target);
        localStorage.setItem('theme', target);

        btn.setAttribute('aria-pressed', target === 'dark');
        btn.setAttribute(
            'aria-label',
            target === 'dark' ? 'Enable light mode' : 'Enable dark mode'
        );
    });
})();
