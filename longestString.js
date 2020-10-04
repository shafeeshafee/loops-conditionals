// A.) ***1) Given the array,
//  Let lunchArray = [ “Burger”, “Salad”, “Lasagna”, “Sushi”, “Meatloaf” ]
// Loop through the array to find the longest word by how many letters each string contains.
// Which other variables will you be needing?
// 2) Print the length of the longest word to the console.
// 3) Print the longest word to the console.
// 4) Now what if the array was
// Let lunchArray = [ “Burger  Salad  Lasagna Sushi  Meatloaf” ]
// Since all the words are in one string together, how would you solve this?

let weirdArray = ["Burger Salad Lasagna Sushi Meatloaf"];
let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];

const longestStr = (arr) => {
	let str = arr[0];
	let strSplit = arr[0].split(" ");
	strLength = 0;

	if (arr.length === 1) {
		strSplit.forEach((item) => {
			if (item.length > strLength) {
				str = item;
				strLength = item.length;
			}
		});
		return `${str} - length: ${strLength}`;
	} else {
		arr.forEach((item) => {
			if (item.length > str.length) {
				str = item;
				strLength = item.length;
			}
		});
		return `${str} - length: ${strLength}`;
	}
};

// log both function outputs of single item array and regular array
console.log(`First array: ${longestStr(lunchArray)}\nWeird array: ${longestStr(weirdArray)}`);
