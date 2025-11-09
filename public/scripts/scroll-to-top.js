const html = document.documentElement;
const scrollButton = document.querySelector('.scroll-to-top');

document.addEventListener('scroll', () => {
    const isVisible = html.scrollTop > 70;
    scrollButton.classList.toggle('visible', isVisible);
    scrollButton.hidden = !isVisible;
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
