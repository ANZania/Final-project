const toggleConsult = () => {
    const popupConsultation = document.querySelector('.popup-consultation');

    document.body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.button_wide')) {
            popupConsultation.style.visibility = 'visible';
        }
        if (target.closest('.popup-consultation')) {
            if (!target.closest('.feedback-wrap') || target.closest('.close-consultation')) {
                popupConsultation.style.visibility = 'hidden';
            }
        }
    });
};

export default toggleConsult;