document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('[data-menu-btn]');
    const menu = document.querySelector('[data-megamenu]');

    if (!btn || !menu) return;

    // Initially inert
    menu.inert = true;
    menu.setAttribute('aria-hidden', 'true');

    function openMenu() {
        menu.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        menu.inert = false;

        const firstLink = menu.querySelector('a');
        if (firstLink) firstLink.focus();
    }

    function closeMenu() {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        menu.inert = true;
    }

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.contains('open') ? closeMenu() : openMenu();
    });

    document.addEventListener('click', (e) => {
        if (!menu.classList.contains('open')) return;
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            closeMenu();
            btn.focus();
        }
    });
});
