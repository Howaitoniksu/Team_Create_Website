function validateForm(name, surname, phone, email, password) {
   
    if (name.trim() === "" || surname.trim() === "" || phone.trim() === "" || email.trim() === "" || password.trim() === "") {
      throw new Error("Все поля должны быть заполнены.");
    }
  
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Введите корректный email.");
    }
  
    return true; 
  }
  
  module.exports = validateForm;
  