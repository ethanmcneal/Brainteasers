

const solveExpression = require('../findTheUnknownDigit')

test('addition', () => {
    expect(solveExpression('1+1=?')).toEqual(2)
    expect(solveExpression('1+?=5')).toEqual(4)
})

test('multiplication', () => {
    expect(solveExpression('123*45?=5?088')).toEqual(6)
    expect(solveExpression('??*??=302?')).toEqual(5)
})

test('negatives', () => {
    expect(solveExpression('-5?*-1=5?')).toEqual(0)
    expect(solveExpression('-5--?=-1')).toEqual(4)
})

test('unsolvable => -1', () => {
    expect(solveExpression('??+??=??')).toEqual(-1)
    expect(solveExpression('19--45=5?')).toEqual(-1)
})

test('? cannot be number already defined in expression', () => {
    expect(solveExpression('?*11=??')).toEqual(2)
    expect(solveExpression('??*1=??')).toEqual(2)
})