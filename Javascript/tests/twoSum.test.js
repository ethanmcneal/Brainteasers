const { test, expect } = require('@jest/globals')
const twoSum = require('../twoSum')

test('takes an array and target value, returns the indecies of the two values that add up to target', () => {
    expect(twoSum([1,2,3,4,5], 9)).toStrictEqual([3,4])
})