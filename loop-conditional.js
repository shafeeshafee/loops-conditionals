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

// B.) Write a function that returns elements on odd positions in a list.

let animals = ["panda", "giraffe", "hyena", "macaw", "elephant", "cat", "rhinoceros", "hippo", "koala", "red fox", "chameleon"];

const oddPos = (arr) => {
	let oddArr = arr.filter((item, index) => {
		if (index % 2 === 1) {
			return item;
		}
	});
	return oddArr;
};

oddPos(animals);

// C.) Function factorial(n) {
// }
// Compute the factorial of any given number.

const factorial = (n) => {
	if (n === 0) return 1;
	let nums = [];

	for (let i = n; i > 0; i--) {
		nums.push(i);
	}

	let product = nums.reduce((a, b) => a * b);
	return product;
};

factorial(5);

// D.) Conditional Practice
// Write an if statement and determine a condition where:
// If mpg is less than or equal to 10, console “gas guzzler”
// If mpg is  between 11 - 16, console “Planet still frowns upon this, and so does your wallet”
// If mpg is between 17-20, console “ it’s palpable”
// If mpg is between 21-29, console “ Atmosphere smiles at your decision”
// If mpg is between 30-35, console “ Not many gas stops will be taken”
// If mpg is above 35 console “ The fish of the sea smile at your conservation”
// If mpg is 120 console “/if you are using the Tom Ogle fuel system, props”
// After testing each one, change the mpg variable to ensure it is good.

let mpg = 25;

switch (true) {
	case mpg >= 120:
		console.log("If you are using the Tom Ogle fuel system, props");
		break;
	case mpg > 35:
		console.log("The fish of the sea smile at your conservation");
		break;
	case mpg >= 30:
		console.log("Not many gas stops will be taken");
		break;
	case mpg >= 21:
		console.log("Atmosphere smiles at your decision");
		break;
	case mpg >= 17:
		console.log("It's palpable");
		break;
	case mpg >= 11:
		console.log("Planet still frowns upon this, and so does your wallet");
		break;
	case mpg <= 10:
		console.log("Gas guzzler");
		break;
	default:
		console.log("Invalid number");
} // included both endpoints for instruction "between 17 - 20", etc... for all cases
