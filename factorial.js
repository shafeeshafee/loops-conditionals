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
