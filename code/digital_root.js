/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

/*
	Create a digital root function. A digital root is the recursive sum of all the
	digits in a number. Given n, take the sum of the digits of n. If that value has
	two digits, continue reducing in this way until a single-digit number is
	produced. This is only applicable to the natural numbers. E.g.
	digital_root(16)
	=> 1 + 6
	=> 7
*/

function digital_root(n) {
	var arr = n.toString().split('');
	var counter = 0;

	for (var i = 0; i < arr.length; i++) {
		counter += Number.parseInt(arr[i]);
	}
	if (counter.toString().length >= 2) {
		return digital_root(counter);
	}
	return counter;
}
