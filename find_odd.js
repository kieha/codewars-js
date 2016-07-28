/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

/*
	Given an array, find the integer that appears an odd number of times.
	There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
	var obj = {};
	A.map(function(number) {
		if (obj[number] === undefined) {
			obj[number] = 1;
		}
		else {
			obj[number] += 1;
		}
	});
	for (var i in obj) {
		if (obj[i] % 2 !== 0) {
			return parseInt(i);
		}
	}
}
