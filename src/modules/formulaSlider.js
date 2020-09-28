const mobileFormulaSlider = () => {
    const slider = document.querySelector('.formula-slider'),
        formulaItem = document.querySelectorAll('.formula-slider__slide'),
        maxCount = formulaItem.length - 1;

    let count = 0,
        slideWidth;

    if (window.screen.width > 575) {
        slideWidth = formulaItem[1].offsetHeight;
    } else {
        slideWidth = formulaItem[0].offsetHeight;
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
        const translate = (count * slideWidth);
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

    // const slides = document.querySelectorAll('.formula-slider__slide'),
    //     wrap = document.querySelector('.formula-slider-wrap'),
    //     btnPrev = document.getElementById('formula-arrow_left'),
    //     btnNext = document.getElementById('formula-arrow_right');

    // let position = 0;
    // let translate = -10;

    // const addMainWrap = () => {
    //     const block = document.createElement('div');
    //     const slideBlock = wrap.children[0];
    //     wrap.append(block);
    //     block.append(slideBlock);
    // };

    // const setStyles = () => {
    //     const style = document.createElement('style');
    //     style.textContent = `
    //     @media (max-width: 576px) {
    //         .formula-slider__slide {
    //             transform: scale(0.6, 0.6);
    //         }
    //     }
    //     `;
    //     document.head.append(style);
    // };

    // setStyles();

    // const setDefaultStyles = () => {
    //     slides.forEach((item) => {
    //         item.style.position = 'relative';
    //         //item.style.margin = '0px 30px';
    //         item.style.marginBottom = '300px';
    //         item.children[0].style.margin = 'auto';
    //         item.children[0].style.marginLeft = '70px';
    //         item.style.display = 'inline-block';
    //         item.style.alignItems = 'centre';
    //         item.style.transform = 'scale(0.6, 0.6)';
    //         item.style.flex = '0 0 12%';
    //         item.style.height = '100px';
    //         if (item.classList.contains('active-item')) {
    //             item.classList.remove('active-item');
    //         }

    //         wrap.children[2].children[0].style.width = '600px';
    //         //wrap.children[2].children[0].style.marginTop = '50px';
    //         wrap.children[2].children[0].style.margin = '50px 50px';
    //         wrap.children[2].children[0].style.height = '400px';
    //         wrap.children[2].children[0].style.display = 'flex';
    //         //wrap.children[2].children[0].style.overflow = 'hidden';
    //         wrap.children[2].children[0].style.alignItems = 'centre';
    //         wrap.children[2].style.overflow = 'hidden';
    //         wrap.style.height = '300px';
    //         wrap.style.width = '100%';
    //         wrap.style.alignItems = 'centre';
    //     })
    // }
    // // const getCloneSlides = () => {
    // //     slides.forEach((item) => {
    // //         cloneSlides.push(item);
    // //     });
    // //     getCloneSlides.forEach((item) => )
    // // };

    // const deleteSlides = () => {
    //     wrap.children[2].innerHTML = '';
    //     if (position === 0) {
    //         wrap.children[2].insertAdjacentElement('beforeend', slides[5]);
    //         wrap.children[2].insertAdjacentElement('beforeend', slides[0]);
    //         wrap.children[2].insertAdjacentElement('beforeend', slides[1]);
    //     } else if (position === 5) {
    //         wrap.children[2].insertAdjacentElement('beforeend', slides[4]);
    //         wrap.children[2].insertAdjacentElement('beforeend', slides[5]);
    //         wrap.children[2].insertAdjacentElement('beforeend', slides[0]);
    //     } else {
    //         const index = position + 1;
    //         wrap.children[2].insertAdjacentElement('beforeend', slides[(position - 1)]);
    //         wrap.children[2].insertAdjacentElement('beforeend', slides[position]);
    //         wrap.children[2].insertAdjacentElement('beforeend', slides[index]);
    //     }

    //     wrap.children[2].children[0].style.transform = 'scale(0.6, 0.6)';
    //     wrap.children[2].children[0].style.display = 'inline-block';
    //     wrap.children[2].children[2].style.transform = 'scale(0.6, 0.6)';

    //     // slides[position].style.display = 'inline-block';
    //     // if (position === 0) {
    //     //     // const index = slides.length - 1;
    //     //     // slides[index].style.display = 'inline-block';
    //     //     slides[1].style.display = 'inline-block';
    //     // } else if (position === slides.length - 1) {
    //     //     const index = position - 1;
    //     //     slides[index].style.display = 'inline-block';
    //     //     // slides[0].style.display = 'inline-block';
    //     // } else {
    //     //     const indexLeft = position - 1;
    //     //     const indexRight = position + 1;
    //     //     slides[indexLeft].style.display = 'inline-block';
    //     //     slides[indexRight].style.display = 'inline-block';
    //     // }
    // }

    // const translateSlide = (action) => {
    //     if (action === 'next') {
    //         if (position === 0) {
    //             translate = 18;
    //         } else {
    //             translate = -8;
    //         }
    //     } else if (action === 'prev') {
    //         if (position === 0) {
    //             translate = 18;
    //         } else if (position === 5) {
    //             translate = 23;
    //         } else {
    //             translate = -8;
    //         }
    //     }
    //     deleteSlides();
    //     wrap.children[2].style.transform = `translateX(${translate}%)`;
    // }

    // const render = (action) => {
    //     setDefaultStyles();
    //     slides[position].classList.add('active-item');
    //     slides[position].style.transform = 'scale(0.9, 0.9)';
    //     translateSlide(action);
    // }

    // addMainWrap();
    // setDefaultStyles();
    // //getCloneSlides();
    // render();
    // // setInterval(() => {
    // //     if (position === slides.length - 1) {
    // //         position = 0;
    // //     } else {
    // //         position++;
    // //     }
    // //     render('next');
    // // }, 3000);

    // btnNext.addEventListener('click', () => {
    //     if (position === slides.length - 1) {
    //         position = 0;
    //     } else {
    //         position++;
    //     }
    //     render('next');
    // });
    // btnPrev.addEventListener('click', () => {
    //     if (position === 0) {
    //         position = slides.length - 1;
    //     } else {
    //         position--;
    //     }
    //     render('prev');
    // });
};


export default mobileFormulaSlider;