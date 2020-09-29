const formulaDescribe = () => {
    if (window.screen.width > 1024) {
        const icons = document.querySelectorAll('.formula-item__icon'),
            popups = document.querySelectorAll('.formula-item-popup');

        const setStyles = () => {
            const style = document.createElement('style');
            style.textContent = `
                .formula-item-popup {
                    font-weight: 300 !important;
                }
                .formula-popup-text {
                    font-weight: 300;
                }
            `;
            document.head.appendChild(style);
        };

        setStyles();

        icons.forEach((item, index) => {
            item.classList.remove('active-item');
            popups[index].visibility = 'none';
            popups[index].style.transform = 'rotate(0deg)';
            if (window.screen.width > 1024) {
                item.addEventListener('mouseover', () => {
                    const height = item.getBoundingClientRect().top,
                        itemHeight = item.offsetHeight;

                    item.classList.add('active-item');

                    if (height < (itemHeight + 130)) {
                        item.parentNode.style.zIndex = 999;
                        let text = popups[index].textContent;

                        popups[index].style.transform = 'rotate(180deg)';
                        popups[index].innerHTML = `<div class="formula-popup-text"> ${text}</div>`;
                        popups[index].querySelector('.formula-popup-text').style.transform = 'rotate(180deg)';
                        popups[index].style.top = '90px';
                        popups[index].style.visibility = 'visible';

                        popups[index].style.opacity = 1;
                        popups[index].style.zIndex = 999;
                    } else {
                        item.parentNode.style.zIndex = 999;
                        popups[index].style.zIndex = 999;

                        popups[index].style = '';

                        if (popups[index].querySelector('.formula-popup-text')) {
                            popups[index].querySelector('.formula-popup-text').style = '';
                        }
                        popups[index].style.transform = 'rotate(0deg)';
                        popups[index].style.visibility = 'visible';
                        popups[index].style.opacity = 1;
                    }
                });
                item.addEventListener('mouseout', () => {
                    if (window.screen.width > 1024) {
                        let text = popups[index].textContent;
                        popups[index].style.transform = 'rotate(0deg)';
                        popups[index].innerHTML = `<div class="formula-popup-text"> ${text}</div>`;
                        popups[index].querySelector('.formula-popup-text').style.transform = 'rotate(0deg)';
                        popups[index].style.top = '0px';

                        popups[index].style.visibility = 'hidden';
                        item.parentNode.style.zIndex = 1;
                        popups[index].style.zIndex = 1;
                        
                        item.classList.remove('active-item');
                    }
                });
            }
        });
    }
};

export default formulaDescribe;