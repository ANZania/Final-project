const openBurgerMenu = () => {
    const menuIcon = document.querySelector('.menu__icon'),
        popupMenu = document.querySelector('.popup-menu'),
        popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu');

    menuIcon.addEventListener('click', () => {
        popupMenu.style.visibility = 'visible';
        popupDialogMenu.style.right = '639px';
    });

    popupDialogMenu.addEventListener('click', event => {
        const target = event.target;

        if (target.matches('.close-menu')) {
            popupMenu.style.visibility = 'hidden';
            popupDialogMenu.style.right = '0px';
        } else if (target.matches('.menu-link')) {
            event.preventDefault();

            popupMenu.style.visibility = 'hidden';
            popupDialogMenu.style.right = '0px';

            const blockId = target.getAttribute('href').substr(1);
            if (blockId) {
                document.getElementById(blockId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
};

export default openBurgerMenu;