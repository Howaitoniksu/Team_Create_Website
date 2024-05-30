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
  
  function sendForm() {
    const name = nameInput.value;
    const phone = phoneInput.value;
    const date = dateInput.value;
  
    // Проверяем номер телефона:
    const phoneRegex = /^(\+7|8)\d{10}$/; // Регулярное выражение для проверки формата
    if (!phoneRegex.test(phone)) {
      alert("Номер телефона должен быть в формате 89290390339 или +79290390339.");
      return; // Прерываем выполнение, если формат неверный
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
    // Проверяем, есть ли файл testDrive.csv, иначе создаем его
    const file = "testDrive.csv";
    let existingData = "";
  
    const xhr = new XMLHttpRequest();
    xhr.open("GET", file, false); // Синхронный запрос
    xhr.send();
  
    if (xhr.status === 200) {
      // Файл существует, считываем его содержимое
      existingData = xhr.responseText;
    }
  
    // Добавляем новые данные в строку
    const newData = `${name},${phone},${date}\n`;
    const newFileContent = existingData + newData;
  
    // Сохраняем файл
    const blob = new Blob([newFileContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.href = url;
    link.download = file;
    link.click();
  
    window.URL.revokeObjectURL(url); // Освобождаем ресурс
  }