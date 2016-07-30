/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

/*
	You have to create a method, that corrects a given time string. There was a
	problem in addition, so many of the time strings are broken. Time-Format
	is european. So from "00:00:00" to "23:59:59".
	E.g.
	"09:10:01" -> "09:10:01"
	"11:70:10" -> "12:10:10"
	"19:99:99" -> "20:40:39"
	"24:01:01" -> "00:01:01"
*/

function timeCorrect(timestring) {
	var timeFormat = /(\d{2}\:\d{2}\:\d{2})/;
	if(!timestring) {
		return timestring;
	}
	else if((timestring === null) || (timeFormat.test(timestring) !== true)) {
		return null;
	} else {
		var timeArr = timestring.split(':');
		if (Number(timeArr[2]) >= 60) {
			timeArr[2] = (Number(timeArr[2]) - 60).toString();
			if (Number(timeArr[2]).toString().length === 1) {
				timeArr[2] = '0'.concat(timeArr[2]);
			}
			timeArr[1] = (Number(timeArr[1]) + 1).toString();
		}
		if (Number(timeArr[1]) >= 60) {
			timeArr[1] = (Number(timeArr[1]) - 60).toString();
			if (Number(timeArr[1]).toString().length === 1) {
				timeArr[1] = '0'.concat(timeArr[1]);
			}
			timeArr[0] = (Number(timeArr[0]) + 1).toString();
		}
		if (Number(timeArr[0]) >= 24) {
			if ((Number(timeArr[0] % 24).toString().length === 2)) {
				timeArr[0] = (Number(timeArr[0] % 24)).toString();
			} else {
				timeArr[0] = '0'.concat((Number(timeArr[0] % 24)).toString());
			}
		}
	}
	return timeArr.join(':');
}

console.log(timeCorrect('19:99:09'));
console.log(timeCorrect('11:64:10'));
console.log(timeCorrect('19:99:99'));
console.log(timeCorrect('24:01:01'));
console.log(timeCorrect('23:06:10'));
