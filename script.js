function toCase(text) {
  // write your code here
	let temp = text.toLowerCase();
	let temp2 = text.toUpperCase();
	const res = `${temp}-${temp2}`;
	return res;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
