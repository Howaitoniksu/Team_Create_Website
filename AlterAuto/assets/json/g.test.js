const calculateCredit = require('./1kredit.js');

  test('Цена: 2000000, Месяцев: 5', () => {
    const vehiclePrice = 2000000;
    const loanTerm = 5;
    const expectedResult = {
      monthlyPayment: '415000.00', 
      totalInterest: '75000.00',
      totalPayment: 2075000.00
    };
    const result = calculateCredit(vehiclePrice, loanTerm);
    expect(result.monthlyPayment).toBe(expectedResult.monthlyPayment);
    expect(result.totalInterest).toBe(expectedResult.totalInterest);
    expect(result.totalPayment).toBe(expectedResult.totalPayment);
  });

  test('возвращает правильные значения для срока кредита в 6 месяцев', () => {
    const vehiclePrice = 1000000;
    const loanTerm = 6;
  
    const result = calculateCredit(vehiclePrice, loanTerm);
  
    expect(result.monthlyPayment).toBe('174166.67');
    expect(result.totalInterest).toBe('45000.02');
    expect(result.totalPayment).toBe(1045000.02);
  });


  const sendForm  = require('./1sendForm.js');

  test('возвращает объект данных', () => {
    const name = 'Иван Иванов';
    const phone = '+79290390339';
    const date = '2024-03-15';
    
    const result = sendForm(name, phone, date);
    expect(result).toEqual({ name, phone, date });
  });
  

  const validateForm  = require('./1testdrive.js');
test('все поля заполнены правильно', () => {
    const name = 'Иван';
    const surname = 'Иванов';
    const phone = '89290390339';
    const email = 'ivan.ivanov@example.com';
    const password = 'password123';
  
    const result = validateForm(name, surname, phone, email, password);
    expect(result).toBe(true);
  });

  test('email введен некорректно', () => {
    expect(() => validateForm('Иван', 'Иванов', '89290390339', 'invalidemail', 'password123')).toThrowError("Введите корректный email.");
  });


  const generateRandomCode = require('./1generetion.js'); 

  test('возвращает код длиной 6 по умолчанию', () => {
    const code = generateRandomCode();
    expect(code).toHaveLength(6);
  });

  test('возвращает код заданной длины', () => {
    const code = generateRandomCode(4);
    expect(code).toHaveLength(4);
  });

  const checkForm = require('./1checkForm.js'); // Путь к вашему файлу checkForm.js

  test('все поля пароля заполнены правильно', () => {
    const oldPassword = 'oldpassword';
    const newPassword = 'newpassword123';
    const repeatPassword = 'newpassword123';
  
    const result = checkForm(oldPassword, newPassword, repeatPassword);
    expect(result).toBe(true);
  });

  test('новый и старый пароль не совпадают', () => {
    const oldPassword = 'oldpassword';
    const newPassword = 'newpassword123';
    const repeatPassword = 'wrongpassword';
  
    expect(() => checkForm(oldPassword, newPassword, repeatPassword)).toThrowError('Новый пароль и повторный пароль не совпадают!');
  });

  const checkDate = require('./1checkdata.js'); 

  test('введенная дата находится в прошлом', () => {
    const inputDate = '2023-12-31'; // Прошлое
  
    expect(() => checkDate(inputDate)).toThrowError("Дата должна быть больше или равна сегодняшней дате");
  });