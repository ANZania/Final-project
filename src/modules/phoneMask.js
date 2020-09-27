const phoneMask = () => {
    const inputNumber = document.querySelectorAll('input[name="phone"]');

    inputNumber.forEach(item => {

        item.addEventListener('focus', () => {
            const alarmMsg = item.closest('form').parentElement.querySelectorAll('.form-alarm-msg');

            if (alarmMsg.length > 0) {
                alarmMsg.forEach((item) => {
                    item.style.display = 'none';
                })
                
            }

            if (item.value === '') {
                item.value = '+7 (';
            }
        });
        item.addEventListener('input', (event) => {
            item.value = item.value.replace(/[^\d\(\)\-\+\ ]+/g, '').substr(0, 18);

            if (item.value.length < 4) {
                item.value = '+7 (';
            }
            if (item.value.length === 7 && event.data !== null) {
                item.value += ') ';
            }
            if (item.value.length === 12 && event.data !== null) {
                item.value += '-';
            }
            if (item.value.length === 15 && event.data !== null) {
                item.value += '-';
            }

        

        });
    });
};

export default phoneMask;