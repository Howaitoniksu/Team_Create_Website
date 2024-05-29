function generateRandomCode() {
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code;
  }

  const sendEmail = async() =>{
    let emailClient = document.querySelector('.enter').value;
    const response = await fetch('https://iis.ngknn.ru/NGKNN/МамшеваЮС/MedicMadlab/api/SendCode', {
      headers: {
        'User-email': emailClient
      }
    })
    if(!response.ok)
    {
      throw Error (':(')
    }
    return response.json()
  }
  