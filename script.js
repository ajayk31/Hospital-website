const hamburger = document.querySelector('.navbar__content--hamburger');
const hamburgerChange = document.querySelector('.navbar__content');



hamburger.addEventListener('click', () => {
    hamburgerChange.classList.toggle('change');
})

