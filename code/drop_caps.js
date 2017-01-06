/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

/*
  DropCaps means that the first letter of the starting word of the paragraph should be in caps
  and the remaining lowercase, same like you see in the newspaper.
  But for a change lets do that for each and every word of the given String.
  Your task is to capitalize very word that has length greater than 2, leaving
  smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

Example:
dropCap('apple') => "Apple"
dropCap('apple of banana'); => "Apple of Banana"
dropCap('one   space'); => "One   Space"
dropCap('   space WALK   '); => "   Space Walk   "
*/

function dropCap(n) {
	return n.split(' ').map(function (word) {
		if (word.length > 2) {
			word = word.toLowerCase();
			word = word[0].toUpperCase() + word.slice(1);
		}
		return word;
	}).join(' ');
}
