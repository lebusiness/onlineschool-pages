const switcherBtns = document.querySelectorAll('.price__title-sub');
const switcherWrapp = document.querySelectorAll('.price__toggle-wrapper');

const [soloWrapp, pareWrapp] = switcherWrapp;
const [soloBtn, pareBtn] = switcherBtns;

const classSwitcher = (oldElem, newElem, modiff) => {
    oldElem.classList.remove(modiff);
    newElem.classList.add(modiff);
}

switcherBtns.forEach(i => {
    i.addEventListener('click', (e)=> {
        if(e.target === soloBtn) {
            classSwitcher(pareBtn, soloBtn, 'title-sub--active');
            classSwitcher(pareWrapp, soloWrapp, 'price__toggle-wrapper--active');
        } else {
            classSwitcher(soloBtn, pareBtn, 'title-sub--active');
            classSwitcher(soloWrapp, pareWrapp, 'price__toggle-wrapper--active');
        }
    })
})