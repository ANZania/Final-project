const partnersCarousel = () => {
    const partnersSlider = document.querySelector('.partners-slider'),
        partnersSliderSlide = document.querySelectorAll('.partners-slider__slide');

    let count = 0,
        slideWidth,
        maxCount;

    if (window.screen.width > 575) {
        maxCount = partnersSliderSlide.length - 3;
        slideWidth = 389;
    } else {
        maxCount = partnersSliderSlide.length - 1;
        slideWidth = 200;
    }

    partnersSlider.parentElement.style.overflow  = 'hidden';
    partnersSlider.parentElement.style.display = 'flex';
    const setStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
        @media (max-width: 575px) {
            .partners-slider__slide {
                flex: 0 0 100%;
            }
        }
        .partners-slider {
            display: flex;
            flex-direction: row !important;
        }
        
        .partners-slider__slide {
            max-width: 100% !important;
            flex: 0 0 33%;
        }
        `;
        document.head.appendChild(style);
    };

    setStyles();


    partnersSlider.style.transform = 'translateX(50px)';

    document.body.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('#partners-arrow_left')) {
            count--;
            if (count < 0) {
                count = maxCount;
            }

            if (count === 0 && !(window.screen.width > 575)) {
                partnersSlider.style.transform = `translateX(50px)`;
            } else if (count === maxCount && !(window.screen.width > 575)) {
                partnersSlider.style.transform = `translateX(-850px)`;
            } else {
                partnersSlider.style.transform = `translateX(-${count * slideWidth}px)`;
            }
        }

        if (target.closest('#partners-arrow_right')) {
            count++;
            if (count > maxCount) {
                count = 0;
            }
            if (count === 0 && !(window.screen.width > 575)) {
                partnersSlider.style.transform = `translateX(50px)`;
            } else if (count === maxCount && !(window.screen.width > 575)) {
                partnersSlider.style.transform = `translateX(-850px)`;
            } else {
                partnersSlider.style.transform = `translateX(-${count * slideWidth}px)`;
            }
        }
    });

};

export default partnersCarousel;