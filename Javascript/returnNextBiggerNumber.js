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

console.log(nextBigger(12)); // returns 21
console.log(nextBigger(513)); // returns 531
console.log(nextBigger(2017)); // returns 2071

console.time('✅')

// console.log(nextBigger(89999999)); // 11.890s, really not efficient at all for huge gaps in numbers, but hey it works

console.timeEnd('✅')

// top answer on codewars :
function nextBigger2(n){
    console.log(n);
    var chars = n.toString().split('');
    var i = chars.length-1;
    while(i > 0) {
      if (chars[i]>chars[i-1]) break;
      i--;
    }
    if (i == 0) return -1;
    var suf = chars.splice(i).sort();
    var t = chars[chars.length-1];
    for (i = 0; i < suf.length; ++i) {
      if (suf[i] > t) break;
    }
    chars[chars.length-1] = suf[i]
    suf[i] = t;
    var res = chars.concat(suf);
    var num = parseInt(res.join(''));
    console.log("->" +num);
    return num;
  }

console.time('here')

console.log(nextBigger2(8999999999999)); // .254ms

console.timeEnd('here')