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

// Получение элементов формы
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const dateInput = document.getElementById('dateInput');

// Функция сохранения данных в CSV
function saveToCSV() {
  const name = nameInput.value;
  const phone = phoneInput.value;
  const date = dateInput.value;

  // Проверка номера телефона
  const phoneRegex = /^(\+7|8)\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Номер телефона должен быть в формате 89290390339 или +79290390339.");
    return;
  }

  // Проверка на заполненность всех полей
  if (!name || !phone || !date) {
    alert("Все поля должны быть заполнены");
  } else {
    // Добавление данных в массив
    csvData.push({ name: name, phone: phone, date: date });

    // Сохранение данных в localStorage
    localStorage.setItem('testDrive', JSON.stringify(csvData));

    alert("Записано");

    // Очистка полей формы
    nameInput.value = '';
    phoneInput.value = '';
    dateInput.value = '';
  }
}

// Функция загрузки CSV-файла
function downloadCSV() {
  const records = JSON.parse(localStorage.getItem('testDrive'));

  // Проверка на наличие записей
  if (!records || records.length === 0) {
    alert('Нет записей для сохранения!');
    return;
  }

  // Создание CSV-строки
  const csvHeader = "\uFEFF" + "Имя,Номер телефона,Дата\n";
  const csvRows = records.map(record => `${record.name},${record.phone},${record.date}`).join('\n');
  const csv = csvHeader + csvRows;

  // Создание ссылки для загрузки файла
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'testDrive.csv';

  // Загрузка файла
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}