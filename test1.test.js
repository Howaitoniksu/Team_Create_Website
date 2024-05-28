const { calculateCredit } = require('./kredit');
test('Test monthly payment for vehicle price 10000 and loan term 3 years', () => {
    document.getElementById = jest.fn().mockReturnValue({
      value: '2000000'
    });
  
    document.getElementById('loan-term').value = '12';
  
    expect(document.getElementById('191666.67 руб.').innerText).toBe('191666.67 руб.');
  });