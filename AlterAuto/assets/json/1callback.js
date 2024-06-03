async function CallbackInput(phoneNumber) {
  const response = await fetch('http://localhost:8000/api/callbacks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone_number: phoneNumber }),
  });
  const data = await response.json();

  if (!data.success) {
    return;
  }

  // В реальном коде вы бы перенаправили пользователя на mainPage.html
  //  window.location.href = 'mainPage.html';
}

module.exports = CallbackInput;