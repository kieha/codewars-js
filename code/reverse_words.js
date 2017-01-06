/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

/*
  Write a reverseWords function that accepts a string a parameter, and reverses
  each word in the string.Every space should stay, so you cannot use words from Prelude.

  Example:
  reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"

*/
function reverseWords(str) {
	var stringArray = [];

	str.trim().split(' ').forEach(function (word) {
		word = word.split('').reverse().join('');
		stringArray.push(word);
	});

	return stringArray.join(' ');
}
