const mobileFormulaSlider = () => {
    const slides = document.querySelectorAll('.formula-slider__slide'),
        btnPrev = document.getElementById('formula-arrow_left'),
        btnNext = document.getElementById('formula-arrow_right');

    let position = 1;

    slides.style.height = '150px';
    slides.style.width = '1500px';
    slides.parentNode.style.display = 'inline-block';
    slides.parentNode.style.owerflow = 'hidden';

    btnNext.addEventListener('click', () => {
        position++;
        
    })
}

export default mobileFormulaSlider;
