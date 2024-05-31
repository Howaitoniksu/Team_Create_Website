function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value)) {
        input.style.border = "1px solid red"; // Красная рамка, если email не валиден
    } else {
        input.style.border = "1px solid #C78E66"; // Стандартная рамка, если email валиден
    }
}

function sendForm() {
    
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !isValidEmail || !message) {
        alert("Пожалуйста, заполните все поля.");
    } else {
        alert("Смс отправлено");
    }
}

let csvData = []; // Массив для хранения данных

function saveToCSV() {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('messageInput').value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !isValidEmail || !message) {
        alert("Пожалуйста, заполните все поля.");
    } else {
        csvData.push([name, email, message]);

    alert("Сообщение отправлено");
    }
    
}

function downloadCSV() {
    const csvContent = csvData.map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "support.csv";
    link.click();
    URL.revokeObjectURL(url);
}