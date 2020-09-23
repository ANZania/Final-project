const addPhoneProlapse = () => {
    const arrow = document.querySelector('.header-contacts__arrow'),
        phoneNumberSecond = document.querySelector('.header-contacts__phone-number-accord a'),
        phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord');

    const rotateArrow = (value) => {
        arrow.style.transform = `rotate(${value}deg)`;
    };

    const togglePhone = () => {
        if (phoneNumberSecond.style.opacity == 0) {
            phoneNumberAccord.style.top = '30px';
            phoneNumberSecond.style.opacity = 1;

            rotateArrow(180);
            
        } else if (phoneNumberSecond.style.opacity == 1) {
            phoneNumberAccord.style.top = '0px';
            phoneNumberSecond.style.opacity = 0;

            rotateArrow(0);
        }
    };

    arrow.addEventListener('click', togglePhone);

}

export default addPhoneProlapse;