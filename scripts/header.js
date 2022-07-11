
const header = document.querySelector('.header');
const headerBtn = document.querySelector('.header__btn');

window.addEventListener('scroll', (e) => {
    if(e.currentTarget.pageYOffset > 0) {
        header.classList.add('header--active');
        headerBtn.classList.add('header__btn--active');
    } else {
        header.classList.remove('header--active');
        headerBtn.classList.remove('header__btn--active');
    }
})