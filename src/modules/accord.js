const accordion = () => {

    document.body.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.accordion')) {
            document.querySelector('.accordion').querySelector('.msg-active').classList.remove('msg-active');
            target.classList.add('msg-active');
        }
    });
};

export default accordion;