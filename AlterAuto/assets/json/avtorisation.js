function validateForm() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    // Проверка на пустые поля
    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Все поля должны быть заполнены.");
        return false;
    }

    // Проверка на корректность email
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert("Введите корректный email.");
        return false;
    }
    return true;
}