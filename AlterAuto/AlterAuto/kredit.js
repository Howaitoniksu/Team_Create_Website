function calculateCredit() {
  const vehiclePrice = parseFloat(document.getElementById('vehicle-price').value);
  const loanTerm = parseFloat(document.getElementById('loan-term').value);

  let interestRate;
  if (loanTerm >= 3 && loanTerm <= 6) {
      interestRate = 0.09;
  } else if (loanTerm >= 6 && loanTerm <= 9) {
      interestRate = 0.13;
  } else {
      interestRate = 0.15;
  }

  const monthlyPayment = (vehiclePrice * interestRate / 12 + vehiclePrice / loanTerm).toFixed(2);
  const totalInterest = ((vehiclePrice * interestRate * loanTerm) / 12).toFixed(2);
  const totalPayment = (vehiclePrice + totalInterest).toFixed(2);

  document.getElementById('monthly-payment').innerText = monthlyPayment + ' уб.';
  document.getElementById('total-interest').innerText = totalInterest + ' уб.';
  document.getElementById('total-payment').innerText = totalPayment + ' уб.';

  document.getElementById('results').style.display = 'block'; // Показываем результаты
}

export function calculateCredit(vehiclePrice, loanTerm) {
    let interestRate;
    if (loanTerm >= 3 && loanTerm <= 6) {
        interestRate = 0.09;
    } else if (loanTerm >= 6 && loanTerm <= 9) {
        interestRate = 0.13;
    } else {
        interestRate = 0.15;
    }
  
    const monthlyPayment = (vehiclePrice * interestRate / 12 + vehiclePrice / loanTerm).toFixed(2);
    const totalInterest = ((vehiclePrice * interestRate * loanTerm) / 12).toFixed(2);
    const totalPayment = (vehiclePrice + parseFloat(totalInterest)).toFixed(2);
  
    return {
      monthlyPayment,
      totalInterest,
      totalPayment
    };
  }