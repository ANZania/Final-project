const openBurgerMenu = () => {
    const menuIcon = document.querySelector('.menu__icon'),
        popupMenu = document.querySelector('.popup-menu'),
        popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu');

    let width = document.documentElement.clientWidth;

    const openDialogMenu = () => {
        popupMenu.style.visibility = 'visible';

        if (width <= 576) {
            popupDialogMenu.style.top = '594px';
        } else if (width <= 1024) {
            popupDialogMenu.style.right = '549px';
        } else {
            popupDialogMenu.style.right = '639px';
        }
    };

    const closeDialogMenu = () => {
        popupMenu.style.visibility = 'hidden';

        popupDialogMenu.style.top = '0px';
        popupDialogMenu.style.right = '0px';

    };

    menuIcon.addEventListener('click', openDialogMenu);

    popupDialogMenu.addEventListener('click', event => {
        const target = event.target;

        if (target.matches('.close-menu')) closeDialogMenu();
        if (target.matches('.menu-link') && !target.closest('.link-list-menu')) {
            event.preventDefault();

            closeDialogMenu();

            const blockId = target.getAttribute('href').substr(1);
            if (blockId) {
                document.getElementById(blockId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });

    window.addEventListener('resize', () => {
        width = document.documentElement.clientWidth;
        closeDialogMenu();
        openDialogMenu();
    });
};

export default openBurgerMenu;