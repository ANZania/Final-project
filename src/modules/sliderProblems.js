const sliderProblems = () => {
    const problemsSlider = document.querySelector('.problems-slider'),
        problemsItem = document.querySelectorAll('.problems-item.problems-slider__slide'),
        maxCount = problemsItem.length - 1;

    let count = 0,
        slideWidth;

    if (window.screen.width > 575) {
        slideWidth = problemsItem[1].offsetHeight;
    } else {
        slideWidth = problemsItem[0].offsetHeight;
    }

    const setStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
        .problems .problems-item__icon:hover .svg-wrap {
            transform: rotate(45deg);
        }
        
        .problems .problems-item__icon:hover .problems-item__icon-inner {
            opacity: 1;
        }
        
        .problems .problems-item__icon:hover .problems-item-popup {
            visibility: visible;
            opacity: 1;
        }
        
        .rotate.problems-item-popup:before {
            content: '';
            transform: rotate(180deg) !important;
        }
        
        .rotate.problems-item-popup-1:before {
            content: '';
            transform: rotate(0) !important;
        }
        @media (max-width: 1024px) {
            .problems-item.problems-slider__slide {
                opacity: 0;
            }
        
            .problems-item {
                transition: 0s !important;
            }
        
            .problems-item.problems-slider__slide.active-item {
                opacity: 1;
            }
            
        }
        `;
        document.head.appendChild(style);
    };

    setStyles();

    const changeSlide = () => {
        problemsItem.forEach((item, index) => {
            if (index === count) {
                item.classList.add('active-item');
            } else {
                item.classList.remove('active-item');
            }

        });
        const translate = (count * slideWidth);
        problemsSlider.style.transform = `translateY(-${translate}px)`;
    };

    changeSlide();

    document.body.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('#problems-arrow_left')) {
            count--;
            if (count < 0) {
                count = maxCount;
            }
        }

        if (target.closest('#problems-arrow_right')) {
            count++;
            if (count > maxCount) {
                count = 0;
            }
        }
        changeSlide();
    });
};

export default sliderProblems;