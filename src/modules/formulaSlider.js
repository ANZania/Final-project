const mobileFormulaSlider = () => {
    class SliderCarousel {
        constructor({
            main, 
            wrap,
            next,
            prev,
            slidesToShow = 3
        }) {
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.getElementById(next);
            this.prev = document.getElementById(prev);
            this.slidesToShow = slidesToShow;
            this.options = {
                position: 0,
                width: Math.floor(100 / this.slidesToShow)
            };
        }
    
        init() {
            this.addClasses();
            this.addStyle();
            this.addArrows();
            this.controlSlider();
        }
    
        addClasses() {
            this.main.classList.add('glo-main');
            this.wrap.classList.add('glo-wrap');
            console.log(this.slides);
            for (const item of this.slides) {
                item.classList.add('glo-slide');
            }; 
                
            this.next.id = 'glo-slider__next';
            this.prev.id = 'glo-slider__prev';
        }
    
        addStyle() {
            const style = document.createElement('style');
            style.id = 'sliderCaroudel-style';
            style.textContent = `
                .glo-main{
                    overflow: hidden;
                }
                .glo-wrap{
                    display: flex;
                    transition: transform 0.5s;
                    will-change: transform;
                }
                .glo-slide{
                    flex: 0 0 ${this.options.width}%;
                    margin: auto 0px;
                }
            `;
    
    
            document.head.appendChild(style);
        }
    
        addArrows() {
            this.wrap.append(this.prev);
            console.log(this.next);
            this.wrap.append(this.next);
        }
    
        controlSlider() {
            this.prev.addEventListener('click', this.prevSlider.bind(this)); 
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }
    
        prevSlider() {
            if (this.options.position === 0) {
                this.options.position = this.slides.length;
            } else {
                --this.options.position;
            }
        }
    
        nextSlider() {
            if (this.options.position === this.slides.length) {
                this.options.position = 0;
            } else {
                ++this.options.position;
            }
        }
    };
    
    const addPartnersSlider = () => {
    
        const partnersSlider = new SliderCarousel({
            main: '.companies-wrapper', 
            wrap: '.companies-hor', 
            next: 'arrow-left', 
            prev: 'arrow-right',
            slidesToShow: 4
        });
    
        partnersSlider.init();
    }
    
    addPartnersSlider();
}

const slider = new SliderCarousel('.formula-slider-wrap', '.formula-slider', '#formula-arrow_right', '#formula-arrow_left')