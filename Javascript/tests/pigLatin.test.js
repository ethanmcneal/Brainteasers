const { test, expect } = require("@jest/globals");
const pigIt = require('../pigLatin')

test('string should be turned into pig latin', () => {
    expect(pigIt('Hello World')).toEqual('elloHay orldWay')
    expect(pigIt('I hate Pigs')).toEqual('Iay atehay igsPay')
})

test('punctuation should be left alone', () => {
    expect(pigIt('Hello World !')).toEqual('elloHay orldWay !')
    expect(pigIt('I , hate Pigs !')).toEqual('Iay , atehay igsPay !')
})