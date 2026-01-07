document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('[data-menu-btn]'); // main menu button
    const menu = document.querySelector('[data-menu-container]'); // container overlay
    const body = document.body;
    // We no longer have extra close buttons, so toggleButtons can just include the main button if needed
    const toggleButtons = [btn]; // kept for possible future expansion
    let releaseFocusTrap = null; // store function to release focus trap

    if (!btn || !menu) return;

    // Start FULLY hidden and unfocusable
    menu.inert = true; // prevents tabbing into menu when closed
    menu.setAttribute('aria-hidden', 'true'); // hide from screen readers
    btn.setAttribute('aria-expanded', 'false'); // initial state of button

    // FUNCTION: trap focus inside menu
    function trapFocus(container) {
        const focusable = container.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        function handleTab(e) {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus(); // wrap focus backwards
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus(); // wrap focus forwards
                }
            }
        }

        container.addEventListener('keydown', handleTab);
        return () => container.removeEventListener('keydown', handleTab);
    }

    // FUNCTION: open menu
    function openMenu() {
        menu.removeAttribute('aria-hidden'); // show to AT
        menu.inert = false; // enable interaction
        menu.classList.add('open'); // visible overlay
        btn.setAttribute('aria-expanded', 'true'); // button state
        body.classList.add('noscroll'); // prevent page scroll

        // Move focus into menu (first link)
        const firstLink = menu.querySelector('a');
        if (firstLink) firstLink.focus();

        // trap focus inside menu while open
        releaseFocusTrap = trapFocus(menu);

        btn.classList.add('pressed'); // add visual pressed state
    }

    // FUNCTION: close menu
    function closeMenu({ returnFocus = false } = {}) {
        menu.classList.remove('open'); // hide overlay
        btn.setAttribute('aria-expanded', 'false'); // button state

        menu.inert = true; // disable interaction
        menu.setAttribute('aria-hidden', 'true'); // hide from AT

        body.classList.remove('noscroll'); // restore scrolling

        btn.classList.remove('pressed'); // remove pressed state

        if (releaseFocusTrap) {
            releaseFocusTrap(); // release focus trap
            releaseFocusTrap = null;
        }

        if (returnFocus) btn.focus(); // return focus to toggle button if requested
    }

    // Toggle menu via main button
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.contains('open') ? closeMenu({ returnFocus: true }) : openMenu();
    });

    // Ensure Space / Enter activates main button
    btn.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            btn.click();
        }
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!menu.classList.contains('open')) return;
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            closeMenu({ returnFocus: true });
        }
    });

    // Close menu on Escape key
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            closeMenu({ returnFocus: true });
        }
    });

    // Mobile overlay click: optional, but since there's no extra background button, we keep it
    menu.addEventListener('click', (e) => {
        if (window.matchMedia('(min-width: 48rem)').matches) return; // desktop: ignore
        if (e.target === menu) closeMenu({ returnFocus: false }); // click on overlay
    });
});
