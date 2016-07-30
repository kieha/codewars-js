/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

/*
	Write a function toWeirdCase that accepts a string, and returns the same
	string with all even indexed characters in each word upper cased, and all odd
	indexed characters in each word lower cased.
	e.g. toWeirdCase( "String" );//=> returns "StRiNg"
 */

function toWeirdCase(string) {
	var newString = [];
	var splitString = string.toLowerCase().split(' ');
	splitString.forEach(function(word) {
		word = word.split('');
		for (var i = 0; i < word.length; i++) {
			if (i % 2 === 0) {
				word[i] = word[i].toUpperCase();
			}
		}
		newString.push(word.join(''));
	});
	return newString.join(' ');
}
