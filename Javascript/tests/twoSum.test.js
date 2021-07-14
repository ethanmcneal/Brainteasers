const { test, expect } = require('@jest/globals')
const twoSum = require('../twoSum')

test('takes an array and target value, returns the indecies of the two values that add up to target', () => {
    expect(twoSum([1,2,3,4,5], 9)).toStrictEqual([3,4])
    expect(twoSum([5,8,12,33,2000], 2008)).toStrictEqual([1,4])

})

test('returns -1 is solution is impossible', () => {
    expect(twoSum([1,2,3,4,5,6], 2)).toStrictEqual(-1)
    expect(twoSum([5,8,12,33,2000], 4000)).toStrictEqual(-1)

})