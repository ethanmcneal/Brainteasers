//https://www.codewars.com/kata/55983863da40caa2c900004e/javascript

//Next bigger number with the same digits

const nextBigger = (num) => {
	let currentNum = num;
	let numArr = currentNum.toString(10).split("").map(Number);
	let nextBiggestNum = numArr.sort((a, b) => b - a).join("");
	if (nextBiggestNum == num) {
		return -1;
	}
	while (currentNum < nextBiggestNum) {
		currentNum++;
		let currentNumArray = currentNum.toString(10).split("").map(Number);
		if (checkIfNumContainsSameDigits(currentNumArray, numArr)) {
			nextBiggestNum = currentNum;
		}
	}
	return nextBiggestNum;
};
const checkIfNumContainsSameDigits = (currentNumArray, numArr) => {
	return currentNumArray.sort().join("") === numArr.sort().join("");
};

// somewhat of a brute-force solution, but works well
module.exports = nextBigger


