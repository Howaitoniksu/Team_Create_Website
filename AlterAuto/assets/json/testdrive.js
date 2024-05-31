function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, ''); // Убираем все нецифровые символы
    input.value = value; // Устанавливаем очищенное значение в поле ввода
}

function checkDate(input) {
    const today = new Date();
    const selectedDate = new Date(input.value);

    if (selectedDate < today) {
        alert("Дата должна быть больше или равна сегодняшней дате");
        input.value = today.toISOString().slice(0, 10);
    }
}
     let csvData = []; // Массив для хранения данных

function saveToCSV() {
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
    csvData.push([name, phone, date]);

    alert("Записано");
    }
}

function downloadCSV() {
    const csvContent = csvData.map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "testDrive.csv";
    link.click();
    URL.revokeObjectURL(url);
}