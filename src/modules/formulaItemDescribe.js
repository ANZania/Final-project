const formulaDescribe = () => {
    const icons = document.querySelectorAll('.formula-item__icon'),
        popups = document.querySelectorAll('.formula-item-popup');


    icons.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            const height = item.getBoundingClientRect().top,
                itemHeight = item.offsetHeight;
            
                item.classList.add('active-item');

            if (height < (itemHeight + 130)) {
                item.parentNode.style.zIndex=999;
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
            item.classList.remove('active-item');

            popups[index].style.visibility = 'hidden';
            item.parentNode.style.zIndex = 1;
            popups[index].style.zIndex = 1;
        });
    });
};

export default formulaDescribe;