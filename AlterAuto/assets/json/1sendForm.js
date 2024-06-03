function sendForm(name, phone, date) {
    // Проверяем номер телефона:
    const phoneRegex = /^(\+7|8)\d{10}$/; // Регулярное выражение для проверки формата
    if (!phoneRegex.test(phone)) {
      throw new Error("Номер телефона должен быть в формате 89290390339 или +79290390339.");
    }
  
    if (!name || !phone || !date) {
      throw new Error("Все поля должны быть заполнены");
    } else {
      // Здесь можно добавить код для сохранения данных (saveData) или отправки формы
      console.log("Форма отправлена!");
      return { name, phone, date }; // Возвращаем объект с данными
    }
  }
  
  module.exports = sendForm;