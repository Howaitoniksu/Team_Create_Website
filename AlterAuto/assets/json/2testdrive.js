function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, ''); // Убираем все нецифровые символы
    input.value = value; // Устанавливаем очищенное значение в поле ввода
}

function checkDate(input) {
    const today = new Date();
    const selectedDate = new Date(input.value);

    if (selectedDate < today) {
        // alert("Дата должна быть больше или равна сегодняшней дате");
        throw new Error("Дата должна быть больше или равна сегодняшней дате");
        input.value = today.toISOString().slice(0, 10);
    }
}

function saveToCSV(name, phone, date) {
  // Проверка номера телефона
  const phoneRegex = /^(\+7|8)\d{10}$/;
  if (!phoneRegex.test(phone)) {
    // alert("Номер телефона должен быть в формате 89290390339 или +79290390339.");
    throw new Error("Номер телефона должен быть в формате 89290390339 или +79290390339.");
  }

  // Проверка на заполненность всех полей
  if (!name || !phone || !date) {
    // alert("Все поля должны быть заполнены");
    throw new Error("Все поля должны быть заполнены");
  } 
  return true;
}