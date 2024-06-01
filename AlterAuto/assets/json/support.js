function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value)) {
        input.style.border = "1px solid red"; // Красная рамка, если email не валиден
    } else {
        input.style.border = "1px solid #C78E66"; // Стандартная рамка, если email валиден
    }
}

function sendForm() {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const messageInput = document.getElementById('messageInput');
    
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !isValidEmail || !message) {
        alert("Пожалуйста, заполните все поля.");
    } else {
        alert("Смс отправлено");
    }
}

// Функция сохранения данных в CSV
function saveToCSV() {
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const messageInput = document.getElementById('messageInput');
  
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !isValidEmail || !message) {
    alert("Пожалуйста, заполните все поля.");
  } else {
    // Используйте одно и то же имя переменной для хранения данных
    csvData.push({ name: name, email: email, message: message }); 
    localStorage.setItem('suport', JSON.stringify(csvData));
    alert("Записано");
  }
}

// Функция загрузки CSV-файла
function downloadCSV() {
  // Используйте одно и то же имя переменной для загрузки данных
  const records = JSON.parse(localStorage.getItem('suport')); 
  if (!records || records.length === 0) {
    alert('Нет записей для сохранения!');
    return;
  }
 
  const csvHeader = "\uFEFF" + "Имя, Почта, Комментарий\n";
  const csvRows = records.map(record => `${record.name},${record.email},${record.message}`).join('\n');
  const csv = csvHeader + csvRows;

  // Создание ссылки для загрузки файла
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'support.csv';

  // Загрузка файла
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

let csvData = []; // Массив для хранения данных