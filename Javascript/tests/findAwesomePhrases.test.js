const { test } = require("@jest/globals");
const isInteresting = require("../findAwesomePhrases");

test("number should be interesting and return 2", () => {
	expect(isInteresting(1234, [1337])).toEqual(2);
	expect(isInteresting(2222, [1337])).toEqual(2);
	expect(isInteresting(5432, [1337])).toEqual(2);
});

test("number should be almost interesting and return 1", () => {
	expect(isInteresting(1233, [1337])).toEqual(1);
	expect(isInteresting(99, [1337])).toEqual(1);
	expect(isInteresting(5431, [1337])).toEqual(1);

});

test("num should be included in the cool number array and return 2", () => {
	expect(isInteresting(1337, [1337, 42, 7])).toEqual(2);
	expect(isInteresting(4201, [1337, 4201, 700])).toEqual(2);
	expect(isInteresting(702, [1337, 42, 702])).toEqual(2);
});

test("num should not be interesting and return 0", () => {
	expect(isInteresting(103, [1337, 42, 7])).toEqual(0);
	expect(isInteresting(41, [1337, 4201, 700])).toEqual(0);
	expect(isInteresting(992, [1337, 42, 702])).toEqual(0);
});