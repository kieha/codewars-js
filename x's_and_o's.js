/*
	Check to see if a string has the same amount of 'x's and 'o's.
	The method must return a boolean and be case insensitive.
	The string can contains any char.
*/

function XO(str) {
	if ((str.indexOf('x') === -1) && (str.indexOf('o') === -1)) {
		return true;
	}
	else {
		if (str.match(/o/gi) && str.match(/x/gi)) {
			if (str.match(/x/gi).length === str.match(/o/gi).length) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	}
}
