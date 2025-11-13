// @ts-nocheck

const html = document.documentElement;
const scrollButton = document.querySelector('.scroll-to-top');

document.addEventListener('scroll', () => {
    const isVisible = html.scrollTop > 40;

    scrollButton.classList.toggle('visible', isVisible);
    scrollButton.hidden = !isVisible;

    if (isVisible) {
        scrollButton.removeAttribute('tabindex');
        scrollButton.setAttribute('aria-hidden', 'false');
    } else {
        scrollButton.setAttribute('tabindex', '-1');
        scrollButton.setAttribute('aria-hidden', 'true');
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
