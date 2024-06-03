function checkDate(inputDate) {
    const today = new Date();
    const selectedDate = new Date(inputDate);
  
    if (selectedDate < today) {
      throw new Error("Дата должна быть больше или равна сегодняшней дате");
    }
  
    return today.toISOString().slice(0, 10); // Возвращаем сегодняшнюю дату в формате YYYY-MM-DD
  }
  
  module.exports = checkDate;