const { test, expect } = require("@jest/globals");
const solution = require("../rangeExtraction");

test("if an integers count up from each-other +1, reformat array to combine them", () => {
	expect(
		solution([
			-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19,
			20,
		]),
	).toEqual("-6,-3-1,3-5,7-11,14,15,17-20");
});
