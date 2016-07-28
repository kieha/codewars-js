/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

// Capitalize every word of the input string

String.prototype.toJadenCase = function () {
	var newString = '';
	this.split(' ').forEach(function(word) {
		var newWord = word[0].toUpperCase() + word.slice(1);
		newString = newString + newWord + ' ';
	});

	return newString.trim();
};
