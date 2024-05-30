function validateForm() {
    var nameInput = document.getElementById("name");
    var surnameInput = document.getElementById("surname");
    var phoneInput = document.getElementById("phone");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    // Проверка на пустые поля
    if (nameInput.value.trim() === "" || surnameInput.value.trim() === "" || phoneInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Все поля должны быть заполнены.");
        return false;
    }

    // Проверка на корректность имени и фамилии
    var nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (!nameRegex.test(nameInput.value) || !nameRegex.test(surnameInput.value)) {
        alert("Имя и фамилия должны содержать только буквы.");
        return false;
    }

   // Проверка на корректность номера телефона
   var phoneRegex = /^(\+7|8)\d{10}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        alert("Номер телефона должен быть в формате 89290390339 или +79290390339.");
        return false;
    }

    // Проверка на корректность email
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert("Введите корректный email.");
        return false;
    }

    // Проверка на корректность пароля
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
        alert("Пароль должен быть не менее 8 символов, содержать хотя бы одну заглавную букву и одну цифру.");
        return false;
    }

    return true;
}