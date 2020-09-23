const openBurgerMenu = () => {
    const menuIcon = document.querySelector('.menu__icon'),
        popupMenu = document.querySelector('.popup-menu'),
        popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu');

    const width = document.documentElement.clientWidth;

    const openDialogMenu = () => {
        popupMenu.style.visibility = 'visible';

        if (width <= 576) {
            popupDialogMenu.style.top = '545px';
        } else {
            popupDialogMenu.style.right = '639px';
        }
    };

    const closeDialogMenu = () => {
        popupMenu.style.visibility = 'hidden';

        if (width <= 576) {
            popupDialogMenu.style.top = '0px';
        } else {
            popupDialogMenu.style.right = '0px';
        }

    }

    menuIcon.addEventListener('click', openDialogMenu);

    popupDialogMenu.addEventListener('click', event => {
        const target = event.target;

        if (target.matches('.close-menu')) closeDialogMenu();
    });
};

export default openBurgerMenu;