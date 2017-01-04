/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

/*
  Complete the solution so that it splits the string into pairs of two characters.
  If the string contains an odd number of characters then it should replace the
  missing second character of the final pair with an underscore ('_').

  solution('abc') // should return ['ab', 'c_']
  solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

function solution(str) {
	if ((str.length) % 2 !== 0) {
		str = str + '_';
	}
	return str.match(/.{1,2}/g);
}
