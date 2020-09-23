const footerScroll = () => {
    const buttonFooter = document.querySelector('.button-footer');


    buttonFooter.addEventListener('click', event => {
        event.preventDefault();

        const blockId = buttonFooter.querySelector('a').getAttribute('href').substr(1);
        if (blockId) {
            document.getElementById(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };
    });
};

export default footerScroll;