const { test, expect } = require("@jest/globals");
const nextBigger = require('../returnNextBiggerNumber')

test("Returns the next bigger number that contains the same digits as param", () => {
    expect(nextBigger(12)).toBe(21)
    expect(nextBigger(513)).toBe(531)
    expect(nextBigger(1002)).toBe(1020)
    expect(nextBigger(23)).toBe(32)

})

test("Returns -1 if param is the biggest possible num", () => {
    expect(nextBigger(21)).toBe(-1)
    expect(nextBigger(500)).toBe(-1)
    expect(nextBigger(21000)).toBe(-1)
    expect(nextBigger(33)).toBe(-1)

})