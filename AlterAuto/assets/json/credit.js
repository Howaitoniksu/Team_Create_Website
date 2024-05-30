function calculateCredit() {
    const vehiclePrice = parseFloat(document.getElementById('vehicle-price').value);
    const loanTerm = parseFloat(document.getElementById('loan-term').value);

    // Проверка ввода
    if (isNaN(vehiclePrice) || vehiclePrice <= 0 || isNaN(loanTerm) || loanTerm <= 0) {
        alert("Пожалуйста, введите корректные значения стоимости автомобиля и срока кредита.");
        return; 
    }
    let interestRate;
    if (loanTerm >= 3 && loanTerm <= 6) {
        interestRate = 0.09;
    } else if (loanTerm >= 6 && loanTerm <= 9) {
        interestRate = 0.13;
    } else {
        interestRate = 0.15;
    }

    const monthlyPayment = (vehiclePrice * interestRate / 12 + vehiclePrice / loanTerm);
    const totalInterest = ((vehiclePrice * interestRate * loanTerm) / 12);
    const totalPayment = (vehiclePrice + totalInterest);

    document.getElementById('monthly-payment').innerText = monthlyPayment.toFixed(2) + ' руб.';
    document.getElementById('total-interest').innerText = totalInterest.toFixed(2) + ' руб.';
    document.getElementById('total-payment').innerText = totalPayment.toFixed(2) + ' руб.';

    // document.getElementById('main-container').classList.add('hidden'); // Скрываем форму
    document.getElementById('results').style.display = 'block'; // Показываем результаты
}

function hideResults() {
    document.getElementById('results').style.display = 'none';
}