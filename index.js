function calculateTax(amount) {
  return amount * 0.10;
}




function convertToUpperCase(string) {
	return string.toUpperCase();
}

function findMaximum(num1,num2) {
	return Math.max(num1,num2);
}

function isPalindrome(word) {
	const reversed = word.split('').reverse().join('');
	return word === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * discountPercentage / 100);
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };