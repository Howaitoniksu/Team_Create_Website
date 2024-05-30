function checkForm() {
    const oldPassword = document.getElementById("oldPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const repeatPassword = document.getElementById("repeatPassword").value;

    // Проверка на пустоту
    if (oldPassword.trim() === "" || newPassword.trim() === "" || repeatPassword.trim() === "") {
        alert("Все поля должны быть заполнены.");
        return false;
    }

    // Проверка нового пароля на сложность
    if (!validatePassword(newPassword)) {
        alert("Новый пароль должен быть не менее 8 символов, содержать как минимум 2 цифры, 1 символ и как минимум одну заглавную и одну строчную буквы.");
        return false;
    }

    // Проверка на совпадение паролей
    if (newPassword !== repeatPassword) {
        alert("Пароли не совпадают.");
        return false;
    }

    // Если все проверки пройдены, то форма отправляется
    alert("Пароль успешно изменен!");
    return true; // Возвращаем true, чтобы форма отправлялась
}

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// Функция для показа/скрытия пароля
function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const icon = document.getElementById(inputId + "Icon");

    passwordInput.type === "password" ? passwordInput.type = "text" : passwordInput.type = "password";
    icon.classList.toggle("invisible"); // Добавляем/удаляем класс "invisible" с иконки
}