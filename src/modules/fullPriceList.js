const addFullPriceList = () => {
    const priceList = document.querySelector('.popup-repair-types'),
        popupMenu = document.querySelector('.popup-menu'),
        popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu'),
        width = document.documentElement.clientWidth,
        navListPopupRepair = document.querySelector('.nav-list-popup-repair');
    let marginCount = 0;

    const openPopup = () => {
        priceList.style.visibility = 'visible';
    };
    const closeDialogMenu = () => {
        popupMenu.style.visibility = 'hidden';

        if (width <= 576) {
            popupDialogMenu.style.top = '0px';
        } else {
            popupDialogMenu.style.right = '0px';
        }
    };

    document.body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('#nav-arrow-popup-repair_right')) {
            if (marginCount < 2550) {
                marginCount += 510;
                navListPopupRepair.style.transform = `translateX(-${marginCount}px)`;
            }
        }

        if (target.closest('#nav-arrow-popup-repair_left')) {
            if (marginCount > 0) {
                marginCount -= 510;
                navListPopupRepair.style.transform = `translateX(-${marginCount}px)`;
            }
        }

        if (target.closest('.link-list-menu')) {
            openPopup();
            closeDialogMenu();
        } else if (target.closest('.link-list-repair')) {
            openPopup();
        }

        if ((target.matches('.close') || !target.closest('.popup-dialog-repair-types')) && target.closest('.popup-repair-types')) {
            priceList.style.visibility = 'hidden';
        }

    })

}



export default addFullPriceList;