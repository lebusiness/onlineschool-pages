let switchs = document.querySelectorAll('.switch-item');
const title = document.querySelector('.main-promo__title');
const card = document.querySelector('.main-promo__card');

if (window.innerWidth < 1100) {
    card.style.background = "#ff66c4";
}

const addCardStyle = (titleInner, backgroundColor, backgroundUrl) => {
    title.innerHTML = titleInner;
    if (window.innerWidth < 1100) {
        card.style.background = backgroundColor;
    } else {
        card.style.background = backgroundUrl;
    }
    card.style.backgroundSize = "cover";
}
const changePromo = (switchBtn) => {
    switchs.forEach(item => {
        item.classList.remove('switch-item--active')
    })
    switchBtn.classList.add('switch-item--active');

    if (switchBtn == switchs[0]) {
        addCardStyle(
            'Тебя ждет успех <br> в Online School', 
            '#39b7ff', 
            "url('./imgs/main-promo/3.jpg')"
    )
    } else if (switchBtn == switchs[1]) {
        addCardStyle(
            'Тебя ждет успех, <br> когда преподаватель <br> всегда поддержит', 
            '#7ed957', 
            "url('./imgs/main-promo/2.jpg')"
        )
    } else if (switchBtn == switchs[2]) {
        addCardStyle(
            'Тебя ждет успех, <br> когда занятия <br> тебе в радость', 
            '#ff66c4', 
            "url('./imgs/main-promo/1.jpg')"
        )
    } else if (switchBtn == switchs[3]) {
        addCardStyle(
            'Тебя ждет успех, <br> если видишь <br> прогресс', 
            '#fcbd25', 
            "url('./imgs/main-promo/4.jpg')"
        )
    }
}

const autochangePromo = setInterval(() => {
    let activeIndex;
    switchs.forEach((item, index)=> {
        if(item.classList.contains('switch-item--active')) {
            activeIndex = index;
        };
    })
    if(activeIndex == (switchs.length - 1)) {
        changePromo(switchs[0]);
    } else {
        changePromo(switchs[activeIndex+1]);
    }
}, 2500)

switchs.forEach(i => {
    i.addEventListener('click', e => {
        changePromo(e.currentTarget);
        clearInterval(autochangePromo);
    });
})
