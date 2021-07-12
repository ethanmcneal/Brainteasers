
const { test, expect } = require('@jest/globals')
const functions = require('../railsEncoder')

test('encode message', () => {
    expect(functions.encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 4)).toBe('WIREEEDSEEEACAECVDLTNROFO')
    expect(functions.encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3)).toBe('WECRLTEERDSOEEFEAOCAIVDEN')

})

//   console.log(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 4)) // WECRLTEERDSOEEFEAOCAIVDEN
                                                                    //WIREEEDSEEEACAECVDLTNROFO