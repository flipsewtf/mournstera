// megamenu + update tab
document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('[data-menu-btn], [data-update-btn]');
    const menus = document.querySelectorAll('[data-megamenu], [data-update]');

    if (!toggles.length || !menus.length) return;

    function closeAll(exceptMenu = null) {
        menus.forEach((menu) => {
            if (menu === exceptMenu) return;
            const btn = document.querySelector(`[aria-controls="${menu.id}"]`);
            menu.classList.remove('open');
            if (btn) {
                btn.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    toggles.forEach((btn) => {
        const menuId = btn.getAttribute('aria-controls');
        const menu = document.getElementById(menuId);
        if (!menu) return;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = menu.classList.contains('open');
            if (isOpen) {
                closeAll();
            } else {
                closeAll(menu); // close others!!
                menu.classList.add('open');
                btn.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    document.addEventListener('click', (e) => {
        // close all if click is outside any open menu pls
        const openMenu = Array.from(menus).find((menu) => menu.classList.contains('open'));
        if (!openMenu) return;
        const btn = document.querySelector(`[aria-controls="${openMenu.id}"]`);
        if (!openMenu.contains(e.target) && (!btn || !btn.contains(e.target))) {
            closeAll();
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') closeAll();
    });
});
