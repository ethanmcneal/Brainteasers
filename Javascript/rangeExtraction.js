//https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list){
     let countingUp = []
     let res = []
     for(let i = 0; i < list.length; i++){
       if(list[i] - 1 == list[i - 1] || list[i] + 1 == list[i+ 1]){
         countingUp.push(list[i])
           if(list[i] + 1 !== list[i + 1] && countingUp.length > 2){
             res.push(`${countingUp[0]}-${countingUp[countingUp.length - 1]}`)
             countingUp = []
           }  else if (list[i] + 1 !== list[i + 1] && countingUp.length <= 2){
             res.push(countingUp)
             countingUp = []
           }
       } else {
         res.push(list[i])
       }
     }
     return res.join(',')
   }
   

   console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))

   // I think this is a pretty elegant solution