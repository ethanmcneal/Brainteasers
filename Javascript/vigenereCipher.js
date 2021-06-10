//https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3



function VigenèreCipher(key, abc) {
    let letterArr = abc.split('')
    let keyArr = key.split('')
    let i = 0
    this.encode = function (str) {
      let encodedString = []
      let arr = str.split('')
      
      while(arr.length > keyArr.length){
        
        keyArr.push(keyArr[i])
        i += 1
      }
      for(let i = 0; i < arr.length; i ++){
        if(arr[i] !== letterArr[letterArr.indexOf(arr[i])]){
          encodedString.push(arr[i])
        }else{
        let spaces = letterArr.indexOf(arr[i])
        let startingPoint = letterArr.indexOf(keyArr[i])
        if(startingPoint + spaces < letterArr.length){
        encodedString.push(letterArr[(startingPoint + spaces)])
        }else{
          encodedString.push(letterArr[(startingPoint - (letterArr.length - spaces))])
        }}
      }
      return encodedString.join('')
    };
     this.decode = function (str) {
      let decodedString = []
      let arr = str.split('')
      for(let i = 0; i < arr.length; i ++){
         if(!letterArr.includes(arr[i])){
          decodedString.push(arr[i])
        }else{
        let spaces = letterArr.indexOf(keyArr[i])
        let startingPoint = letterArr.indexOf(arr[i])
        if(startingPoint - spaces >= 0){
        decodedString.push(letterArr[(startingPoint - spaces)])
        }else{
          decodedString.push(letterArr[(startingPoint + (letterArr.length - spaces))])
        }}
      }
       return decodedString.join('')
    };
  }


var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

// creates a cipher helper with each letter substituted
// by the corresponding character in the key
var c = new VigenèreCipher(key, alphabet);

c.encode('codewars'); // returns 'rovwsoiv'
c.decode('laxxhsj');  // returns 'waffles'