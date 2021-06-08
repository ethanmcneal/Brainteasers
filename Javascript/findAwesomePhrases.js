//https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript


// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array


// note: any number lower than 99 will always return 0
// figuring out the best way to return the 1 when needed will be the hardest part

// return 2 if interesting, 1 if an interesting number is upcoming, 0 if not interesting

const isInteresting = (num, phrases) => {if(true){let coolNum = false} if(num == 98 || num == 99){return 1} else if(num < 100){return 0}for(let i = 2; i > -1; i--){let numArr = (num).toString(10).split("").map(Number)
        for(let j = 0; j < numArr.length -1; j ++){numArr[j] + 1 == (numArr[j + 1]) || (numArr[j] == numArr[numArr.length - (j+1)] && numArr[j+1] == numArr[numArr.length - (j+2)]) || (numArr[j] - 1 == (numArr[j + 1])) ? coolNum = true : numArr[j] == 9 && numArr[j + 1] == 0 ? coolNum == true : (coolNum = false, j += numArr.length)}if(coolNum  || phrases.includes(num) || numArr.filter((num, i) => i != 0).join('') == 0){ return i == 0 ? 1 : i }num += 1}return 0}

console.log(isInteresting(1234, [1337]) === 2)

// thought it was interesting that I could condense it down to two lines lol,
// here is a *slightly* more readable version

const isInterestingReadable = (num, phrases) => {
	let coolNum = false;
	if (num == 98 || num == 99) {
		return 1;
	} else if (num < 100) {
		return 0;
	}
	for (let i = 2; i > -1; i--) {
		let numArr = num.toString(10).split("").map(Number);
		for (let j = 0; j < numArr.length - 1; j++) {
			if (
				numArr[j] + 1 == numArr[j + 1] ||
				(numArr[j] == numArr[numArr.length - (j + 1)] &&
					numArr[j + 1] == numArr[numArr.length - (j + 2)]) ||
				numArr[j] - 1 == numArr[j + 1]
			) {
				coolNum = true;
			} else if (numArr[j] == 9 && numArr[j + 1] == 0) {
				coolNum == true;
			} else {
				coolNum = false;
				j += numArr.length;
			}
		}
		if (
			coolNum ||
			phrases.includes(num) ||
			numArr.filter((num, i) => i != 0).join("") == 0
		) {
			return i == 0 ? 1 : i;
		}
		num += 1;
	}
	return 0;
};

