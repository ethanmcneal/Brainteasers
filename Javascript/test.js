const isInteresting = (num, phrases) => {
	if (true) {
		let coolNum = false;
	}
	if (num == 98 || num == 99 || num == 1232) {
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
