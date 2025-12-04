document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('[data-menu-btn]');
    const menu = document.querySelector('[data-megamenu]');
    const body = document.body;

    if (!btn || !menu) return;

    // initially inert
    menu.inert = true;
    menu.setAttribute('aria-hidden', 'true');

    function openMenu() {
        // console issue w/ aria-hidden. remove aria-hidden BEFORE focusing
        menu.setAttribute('aria-hidden', 'false');
        menu.inert = false;

        menu.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        body.classList.add('noscroll');

        // focus is now safe
        const firstLink = menu.querySelector('a');
        if (firstLink) firstLink.focus();
    }

    function closeMenu() {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');

        // only after closing, hide menu
        menu.inert = true;
        menu.setAttribute('aria-hidden', 'true');

        body.classList.remove('noscroll');
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
