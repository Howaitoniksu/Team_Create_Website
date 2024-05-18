function generateRandomCode() {
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code;
  }
  function sendSms(phoneNumber, code) {
    // Формируем URL для отправки SMS
    const url = `https://email:api_key@gate.smsaero.ru/v2/sms/send?number=${phoneNumber}&text=${encodeURIComponent(`Ваш код: ${code}`)}&sign=SMS Aero`;
    console.log(`SMS отправлено на номер ${phoneNumber}: Код - ${code}`);
  }
  // Пример использования:
  const phoneNumber = "+79092970715"; 
  const code = generateRandomCode();
  sendSms(phoneNumber, code);
  