const mobileFormulaSlider = () => {
    const slider = document.querySelector('.formula-slider'),
        formulaItem = document.querySelectorAll('.formula-slider__slide'),
        maxCount = formulaItem.length - 1;

    let count = 0,
        slideHeigth;

    if (document.documentElement.clientWidth > 575) {
        slideHeigth = formulaItem[1].offsetHeight;
    } else {
        slideHeigth = formulaItem[0].offsetHeight;
    }

    const setStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 1024px) {
                .formula-slider__slide {
                    opacity: 0;
                }
            
                .formula-item {
                    transition: 0s !important;
                }
            
                .formula-slider__slide.active-item {
                    opacity: 1;
                }
                
            }
            `;
        document.head.appendChild(style);
    };

    setStyles();

    const changeSlide = () => {
        formulaItem.forEach((item, index) => {
            if (index === count) {
                item.classList.add('active-item');
            } else {
                item.classList.remove('active-item');
            }

        });
        const translate = (count * slideHeigth);
        slider.style.transform = `translateY(-${translate}px)`;
    };

    changeSlide();

    document.body.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('#formula-arrow_left')) {
            count--;
            if (count < 0) {
                count = maxCount;
            }
        }

        if (target.closest('#formula-arrow_right')) {
            count++;
            if (count > maxCount) {
                count = 0;
            }
        }
        changeSlide();
    });
};


export default mobileFormulaSlider;