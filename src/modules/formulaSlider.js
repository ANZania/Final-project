const mobileFormulaSlider = () => {
    const slides = document.querySelectorAll('.formula-slider__slide'),
        wrap = document.querySelector('.formula-slider-wrap'),
        btnPrev = document.getElementById('formula-arrow_left'),
        btnNext = document.getElementById('formula-arrow_right'),
        width = document.documentElement.clientWidth;

    let position = 0;
    let translate = 23;

    const addMainWrap = () => {
        const block = document.createElement('div');
        const slideBlock = wrap.children[0];
        wrap.append(block);
        block.append(slideBlock);
    }

    const setDefaultStyles = () => {
        slides.forEach((item) => {
            item.style.position = 'relative';
            //item.style.margin = '0px 30px';
            item.style.marginBottom = '300px';
            item.children[0].style.margin = 'auto';
            item.children[0].style.marginLeft = '70px';
            item.style.display = 'inline-block';
            item.style.alignItems = 'centre';
            item.style.transform = 'scale(0.6, 0.6)';
            item.style.flex = '0 0 12%';
            item.style.height = '100px';
            if (item.classList.contains('active-item')) {
                item.classList.remove('active-item');
            }

            wrap.children[2].children[0].style.width = '100%';
            //wrap.children[2].children[0].style.marginTop = '50px';
            wrap.children[2].children[0].style.margin = '50px 50px';
            wrap.children[2].children[0].style.height = '400px';
            wrap.children[2].children[0].style.display = 'flex';
            //wrap.children[2].children[0].style.overflow = 'hidden';
            wrap.children[2].children[0].style.alignItems = 'centre';
            wrap.children[2].style.overflow = 'hidden';
            wrap.style.height = '300px';
            wrap.style.width = '100%';
            wrap.style.alignItems = 'centre';
        })
    }

    const deleteSlides = () => {
        slides.forEach((item) => {
            item.style.display = 'none';
        });
        slides[position].style.display = 'inline-block';
        if (position === 0) {
            // const index = slides.length - 1;
            // slides[index].style.display = 'inline-block';
            slides[1].style.display = 'inline-block';
        } else if (position === slides.length - 1) {
            const index = slides.length - 2;
            slides[index].style.display = 'inline-block';
            // slides[0].style.display = 'inline-block';
        } else {
            const indexLeft = position - 1;
            const indexRight = position + 1;
            slides[indexLeft].style.display = 'inline-block';
            slides[indexRight].style.display = 'inline-block';
        }
    }

    const translateSlide = (action) => {
        if (action === 'next') {
            if (position === 0) {
                translate = 23;
            } else {
                translate = -8;
            }
        } else if (action === 'prev') {
            if (position === 0) {
                translate = 23;
            } else {
                translate = -8;
            }
        }
        deleteSlides();
        wrap.children[2].children[0].style.transform = `translateX(${translate}%)`;
    }

    const render = (action) => {
        setDefaultStyles();
        slides[position].classList.add('active-item');
        slides[position].style.transform = 'scale(0.9, 0.9)';
        translateSlide(action);
    }

    addMainWrap();
    setDefaultStyles();
    render();
    // setInterval(() => {
    //     if (position === slides.length - 1) {
    //         position = 0;
    //     } else {
    //         position++;
    //     }
    //     render('next');
    // }, 3000);

    btnNext.addEventListener('click', () => {
        if (position === slides.length - 1) {
            position = 0;
        } else {
            position++;
        }
        render('next');
    });
    btnPrev.addEventListener('click', () => {
        if (position === 0) {
            position = slides.length - 1;
        } else {
            position--;
        }
        render('prev');
    });

    
}   

//export default mobileFormulaSlider;