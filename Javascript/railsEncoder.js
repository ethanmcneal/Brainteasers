//https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript

function encodeRailFenceCipher(string, numberRails) {
    let letterArray = string.split('')
    let res = [[],[],[]]
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
    return res.map(arr => arr.join('')).join('')
  }

  console.log(encodeRailFenceCipher("Hello, World!", 3),)
    //"Hoo!el,Wrdl l"
   //  Hoo!el,Wrdl l
  //"WECRLTEERDSOEEFEAOCAIVDEN"
 //  WECRLTEERDSOEEFEAOCAIVDEN

//   W       E       C       R       L       T       E
//    E   R   D   S   O   E   E   F   E   A   O   C  
//     A       I       V       D       E       N    