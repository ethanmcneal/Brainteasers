
const { test, expect } = require('@jest/globals')
const functions = require('../railsEncoder')

test('encode message', () => {
    expect(functions.encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 4)).toStrictEqual('WIREEEDSEEEACAECVDLTNROFO')
    expect(functions.encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3)).toStrictEqual('WECRLTEERDSOEEFEAOCAIVDEN')

})

test('decode message', () => {
    expect(functions.decodeRailFenceCipher('WIREEEDSEEEACAECVDLTNROFO', 4)).toStrictEqual('WEAREDISCOVEREDFLEEATONCE')
    expect(functions.decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3)).toStrictEqual('WEAREDISCOVEREDFLEEATONCE')

})
