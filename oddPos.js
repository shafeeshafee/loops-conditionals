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
