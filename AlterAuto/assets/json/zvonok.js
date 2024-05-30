function checkPhone() {
    let phoneInput = document.getElementById('phone').value;
    let isValid = false;

    // Проверка формата 89290390339
    if (phoneInput.match(/^\d{11}$/)) { // 10 цифр
        isValid = true;
    }

    // Проверка формата +7290390399
    if (phoneInput.match(/^\+7\d{10}$/)) { // +7 и 10 цифр
        isValid = true;
    }

    if (isValid) {
        // Если номер телефона валидный, переходим на mainPage.html
        window.location.href = 'main.html';
    } else {
        // Если номер телефона не валидный, выводим сообщение об ошибке (например, alert)
        alert('Неверный формат номера телефона. Пожалуйста, введите номер в формате 89290390339 или +7290390399');
    }
}