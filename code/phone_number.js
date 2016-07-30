/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

/*
	Write a function that accepts an array of 10 integers (between 0 and 9),
	that returns a string of those numbers in the form of a phone number.
	createPhoneNumber([1,2,3,4,5,6,7,8,9,0]) // => returns "(123) 456-7890"
 */

function createPhoneNumber(numbers) {
	return numbers.join('').replace(/^(\d{3})/, '\($1\) ').replace(/(\S{4}$)/, '-$1');
}
