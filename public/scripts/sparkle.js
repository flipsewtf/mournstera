const flipse = document.querySelector('.sparkle-wrap');
const sparkles = flipse.querySelector('.sparkles');

flipse.addEventListener('mouseenter', () => {
    sparkles.classList.add('sparkle-boop');

    setTimeout(() => {
        sparkles.classList.remove('sparkle-boop');
    }, 1200);
});
