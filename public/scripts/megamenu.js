document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('[data-menu-btn]');
    const menu = document.querySelector('[data-megamenu]');
    const body = document.body;

    if (!btn || !menu) return;

    // Start FULLY hidden and unfocusable
    menu.inert = true;
    menu.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');

    function openMenu() {
        // Make menu available to AT and keyboard *before* focusing
        menu.removeAttribute('aria-hidden');
        menu.inert = false;

        menu.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        body.classList.add('noscroll');

        // Move focus into the menu now
        const firstLink = menu.querySelector('a');
        if (firstLink) firstLink.focus();

        // ADD pressed class when menu is open
        btn.classList.add('pressed');
    }

    function closeMenu({ returnFocus = false } = {}) {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');

        // prevents interaction when closed
        // 'inert' prevents tabbing into the hidden menu (CSS alone is not enough my dude)
        menu.inert = true;
        menu.setAttribute('aria-hidden', 'true');

        body.classList.remove('noscroll');

        // REMOVE pressed class when menu is closed
        btn.classList.remove('pressed');

        if (returnFocus) {
            btn.focus();
        }
    }

    // Toggle via button click
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.contains('open') ? closeMenu({ returnFocus: true }) : openMenu();
    });

    // Ensure Space / Enter always activate the button
    btn.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            btn.click();
        }
    });

    // close when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.classList.contains('open')) return;
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            closeMenu({ returnFocus: true });
        }
    });

    // Close on Escape
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            closeMenu({ returnFocus: true });
        }
    });
});
