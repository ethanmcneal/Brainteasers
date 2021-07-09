//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
    let wordArray = str.split(' ')
    let res = []
    for(let i = 0; i < wordArray.length; i++){
        let word = wordArray[i].split('')
        if(word[0].match(/[a-z A-Z]/)){
        word.push(`${word[0]}ay`)
        word.splice(0, 1)}
        res.push(word.join(''))
        
    }
    return res.join(' ')
  }

module.exports = pigIt

// console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
// console.log(pigIt('Hello world !'));     // elloHay orldway !