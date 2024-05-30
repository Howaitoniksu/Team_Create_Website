function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    input.value = value; 
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
    const name = nameInput.value;
    const phone = phoneInput.value;
    const date = dateInput.value;
    const phoneRegex = /^(\+7|8)\d{10}$/; 
    if (!phoneRegex.test(phone)) {
        alert("Номер телефона должен быть в формате 89290390339 или +79290390339.");
        return; 
    }

    if (!name || !phone || !date) {
        alert("Все поля должны быть заполнены");
    } else {
        alert("Форма отправлена!");
        saveData(name, phone, date);
        location.href = 'lifeAkk.html';
    }
}
function saveData(name, phone, date) {
    const data = [
        [name, phone, date]
    ];
    const csvContent = data.map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "testDrive.csv";
    link.click();
    URL.revokeObjectURL(url);
}