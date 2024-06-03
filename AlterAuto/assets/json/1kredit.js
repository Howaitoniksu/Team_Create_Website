function calculateCredit(vehiclePrice, loanTerm) {
    let interestRate;
    if (loanTerm >= 3 && loanTerm <= 6) {
        interestRate = 0.09;
    } else if (loanTerm >= 6 && loanTerm <= 9) {
        interestRate = 0.13;
    } else {
        interestRate = 0.15;
    }

    const monthlyInterestRate = interestRate / 12; 
    const monthlyPayment = (vehiclePrice * monthlyInterestRate + vehiclePrice / loanTerm).toFixed(2);
    const totalInterest = (monthlyPayment * loanTerm - vehiclePrice).toFixed(2);
    const totalPayment = (vehiclePrice + parseFloat(totalInterest));

    return { // Вернуть объект с результатами
        monthlyPayment,
        totalInterest,
        totalPayment
    };
}

module.exports = calculateCredit;