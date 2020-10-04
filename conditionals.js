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
