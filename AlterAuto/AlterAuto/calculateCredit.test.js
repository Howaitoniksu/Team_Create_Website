import { expect } from '@playwright/test';

test('calculateCredit function', async () => {
  const vehiclePrice = 1000000;
  const loanTerm = 6;

  const monthlyPayment = (vehiclePrice * 0.13 / 12 + vehiclePrice / loanTerm).toFixed(2);
  const totalInterest = ((vehiclePrice * 0.13 * loanTerm) / 12).toFixed(2);
  const totalPayment = (vehiclePrice + parseFloat(totalInterest)).toFixed(2);

  const result = calculateCredit(vehiclePrice, loanTerm);

  expect(result.monthlyPayment).toEqual(monthlyPayment);
  expect(result.totalInterest).toEqual(totalInterest);
  expect(result.totalPayment).toEqual(totalPayment);
});