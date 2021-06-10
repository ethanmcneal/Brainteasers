//https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript

function encodeRailFenceCipher(string, numberRails, lengths) {
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
    // console.log(res)
    return lengths ? res.map(arr => arr.length) : res.map(arr => arr.join('')).join('')
    //res.map(arr => arr.join('')).join('')
  }

  console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3)) // WECRLTEERDSOEEFEAOCAIVDEN

  function decodeRailFenceCipher(string, numberRails) {
    let letterArray = string.split('')
    let res = []
    let decodedLetters = []
    while(res.length != numberRails){res.push([])}
    let lengths = encodeRailFenceCipher(string, numberRails, true)
    let count = 0
    // console.log(res[0].length)
    for(let i = 0; i < letterArray.length; i ++){
        res[count].length < lengths[count] ? res[count].push(letterArray[i]) 
        : (count += 1, res[count].push(letterArray[i]))
        }
    for(let i = 0; i < letterArray.length; i ++){
        count = 0
        while(count <= numberRails - 1){
            decodedLetters.push([res[count][i]])
            count += 1  
        }
        count = count - 2
        decodedLetters.push(res[count][i + 1])
        res[count].splice([i + 1],1)
    }
    return decodedLetters.join('')
  }


  console.log(decodeRailFenceCipher('WIREEEDSEEEACAECVDLTNROFO', 4)) // => "WEAREDISCOVEREDFLEEATONCE"
