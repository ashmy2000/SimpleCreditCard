// // Luhn10 Check for credit card
function isValidCreditCardNumber(creditCardNumber) {
    //card number between 12-19 and string. 
    if (!creditCardNumber || typeof creditCardNumber !== 'string' || creditCardNumber.length < 12 || creditCardNumber.length > 19) {
      return false;
    }
  
    // Remove all non-digit characters from the credit card number
  
    
  
  const digits = creditCardNumber.replace(/\D/g, '');
  
    // Check if the remaining characters form a valid Luhn 10 number
    const sum = Array.from(digits).reverse().reduce((acc, digit, i) => {
      const value = parseInt(digit, 10);
      return acc + (i % 2 === 0 ? value : (value < 5 ? value * 2 : (value * 2) - 9));
    }, 0);
  
    return sum % 10 === 0;
  };

  module.exports = isValidCreditCardNumber; 
