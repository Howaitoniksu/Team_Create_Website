const { calculateCredit } = require('./kredit');

test('Test calculateCredit function with valid input', () => {
  // Mock the document.getElementById method
  const getElementByIdMock = jest.spyOn(document, 'getElementById').mockImplementation((id) => {
    if (id === 'vehicle-price') {
      return { value: '2000000' };
    } else if (id === 'loan-term') {
      return { value: '12' };
    }
    return null;
  });

  // Call the calculateCredit function
  calculateCredit();

  // Assert that the document.getElementById method was called with the correct arguments
  expect(getElementByIdMock).toHaveBeenCalledTimes(2);
  expect(getElementByIdMock).toHaveBeenCalledWith('vehicle-price');
  expect(getElementByIdMock).toHaveBeenCalledWith('loan-term');

  // Assert that the monthlyPayment, totalInterest, and totalPayment elements were updated with the correct values
  expect(document.getElementById('monthly-payment').innerText).toBe('191666.67 руб.');
  expect(document.getElementById('total-interest').innerText).toBe('600000.00 руб.');
  expect(document.getElementById('total-payment').innerText).toBe('2600000.00 руб.');

  // Restore the original document.getElementById method
  getElementByIdMock.mockRestore();
});