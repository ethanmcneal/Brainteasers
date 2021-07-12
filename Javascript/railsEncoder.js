//https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript

// my first 3Kyu kata

const functions = {

encode: function encodeRailFenceCipher(string, numberRails, lengths) {
    let letterArray = string.split('')
    let res = []
    while(res.length != numberRails){res.push([])}
    let count = 1;
    let countingUp = true
    for(let i = 0; i < letterArray.length; i++){
        if(count < numberRails){
            res[count - 1].push(letterArray[i])
            count == 1 ? countingUp = true : ''
        } else if(count == numberRails){
            res[count - 1].push(letterArray[i])
            countingUp = false
        }
        countingUp ? count += 1 : count = count - 1
    }
    // console.log('res', res.map(arr => arr.join('')).join(''))
    return lengths ? res.map(arr => arr.length) : res.map(arr => arr.join('')).join('')
    //res.map(arr => arr.join('')).join('')
  },

//   console.log(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 4)) // WECRLTEERDSOEEFEAOCAIVDEN
                                                                    //WIREEEDSEEEACAECVDLTNROFO

  decode: function decodeRailFenceCipher(string, numberRails) {
    let letterArray = string.split('')
    let res = []
    let decodedLetters = []
    while(res.length != numberRails){res.push([])}
    let lengths = encodeRailFenceCipher(string, numberRails, true)
    let count = 0
    
    for(let i = 0; i < letterArray.length; i ++){
        res[count].length < lengths[count] ? res[count].push(letterArray[i]) 
        : (count += 1, res[count].push(letterArray[i]))
        }
    for(let i = 0; i < res[0].length; i ++){
        count = 0
        while(count <= numberRails - 1){
            decodedLetters.push([res[count][i]])
            count += 1  
        }
        count = count - 2
        while(count > 0){
        decodedLetters.push(res[count][i + 1])
        res[count].splice([i + 1],1)
        count = count - 1
        }
    }
    return decodedLetters.join('')
  }
}
module.exports = functions
  console.log(decodeRailFenceCipher('WIREEEDSEEEACAECVDLTNROFO', 4)) // => "WEAREDISCOVEREDFLEEATONCE"
                                    //WIREEEDSEEEACAECVDLTNROFO
