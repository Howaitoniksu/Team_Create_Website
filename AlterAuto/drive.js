function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, ''); // Убираем все нецифровые символы
    if (value.length > 11) {
        value = value.slice(0, 11); // Ограничиваем длину до 11 символов
    }
    if (value.length >= 1 && value.charAt(0) === "8") {
        value = "+" + value; // Добавляем "+", если начинается с "8"
    }
    input.value = value;

    // Вызываем функцию для форматирования после ввода
    formatPhone(input);
}
function formatPhoneNumber(input) {
let phoneNumber = input.value;
if (phoneNumber.startsWith('+7')) {
phoneNumber = phoneNumber.slice(1);
}
input.value = phoneNumber.replace(/^(\d{1})(\d{3})(\d{2})(\d{2})(\d{2})$/, '+7 ($1) $2-$3-$4-$5');
}

function checkDate(input) {
    const today = new Date();
    const selectedDate = new Date(input.value);

    if (selectedDate < today) {
       alert("Дата должна быть больше или равна сегодняшней дате");
       input.value = today.toISOString().slice(0, 10);
    }
}

function sendForm() {
    const name = document.getElementById("nameInput").value;
    const phone = document.getElementById("phoneInput").value;
    const date = document.getElementById("dateInput").value;

    if (!name || !phone || !date) {
        alert("Все поля должны быть заполнены");
    } else {
        alert("Форма отправлена!");
        location.href = 'lifeAkk.html';
    }
}