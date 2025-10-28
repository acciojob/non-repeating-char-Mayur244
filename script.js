function firstNonRepeatedChar(str) {
 // Write your code here
	let freq = new Map();

	for(let ch of str){
		freq.set(ch, (freq.get(ch) || 0) + 1);
	}

	for(let [ch, count] of freq){
		if(count === 1){
			return ch;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
