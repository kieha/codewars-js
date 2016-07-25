/*
	You probably know the "like" system from Facebook and other pages. People can "like" blog posts,
 	pictures or other items. We want to create the text that should be displayed next to such an item.
	Implement a function which must take in input array, containing the names of people who like an item. 
*/

function likes(names) {
	if (names.length === 0) {
		return 'no one likes this';
	}

	for (var i = 0; i < names.length; i++) {
		if (names.length === 1) {
			return `${names[0]} likes this`;
		}
		else if (names.length === 2) {
			return `${names[0]} and ${names[1]} like this`;
		}
		else if (names.length === 3) {
			return `${names[0]}, ${names[1]} and ${names[2]} like this`;
		}
		else {
			return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
		}
	}
}
