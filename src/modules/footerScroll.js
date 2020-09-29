const footerScroll = () => {

    document.body.addEventListener('click', (event) => {
        let target = event.target;

        if (target.closest('.button-footer')) {
            target = target.closest('.button-footer');
            event.preventDefault();

            const blockId = target.querySelector('a').getAttribute('href').substr(1);
            if (blockId) {
                document.getElementById(blockId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
};

export default footerScroll;