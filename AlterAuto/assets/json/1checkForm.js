function checkForm(oldPassword, newPassword, repeatPassword) {
    let isValid = false;
  
    // Проверка на новый пароль не менее 8 символов
    if (newPassword.length < 8) {
      throw new Error('Новый пароль должен быть не менее 8 символов!');
    }
  
    // Проверка на совпадение нового пароля и повторного пароля
    if (newPassword !== repeatPassword) {
      throw new Error('Новый пароль и повторный пароль не совпадают!');
    }
  
    isValid = true; // Если проверки пройдены, isValid становится true
  
    if (isValid) {
     
      return true; 
    }
  }
  
  module.exports = checkForm;