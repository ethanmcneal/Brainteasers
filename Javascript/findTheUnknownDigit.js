//https://www.codewars.com/kata/546d15cebed2e10334000ed9/train/javascript

function solveExpression(exp) {
  let arr = exp.split("=")[0].toString().split("");
  let expressions = ["-", "+", "*"];
  let firstNum = "";
  let secondNum = "";
  let expression = "";
  let answer = exp.split("=").pop();
  let currentPos = 1;
  let res = -1;
  for (let i = 0; i < arr.length; i++) {
    // arr[i] == "?" ? (arr[i] = "g") : "";
    if (!expressions.includes(arr[i])) {
      currentPos == 1
        ? (firstNum += arr[i])
        : currentPos == 2
        ? (secondNum += arr[i])
        : "";
    } else if (arr[i] == "-") {
      firstNum == ""
        ? (firstNum += arr[i])
        : expression !== ""
        ? (secondNum += arr[i])
        : ((expression += arr[i]), (currentPos += 1));
    } else {
      expression += arr[i];
      currentPos += 1;
    }
  }
  let j = 0;
  if (answer.replace(/\?/g, `${j}`).split("-").join('').split('')[0] == "0" && answer.length > 1) {
    j += 1;
  }
  for (j; j < 10; j++) {  
    while(
      firstNum.split("").includes(`${j}`) ||
      secondNum.split("").includes(`${j}`) ||
      answer.split("").includes(`${j}`)
    ) {
      j += 1;
    }

    let x = firstNum.replace(/\?/g, `${j}`);
    let y = secondNum.replace(/\?/g, `${j}`);
    let z = answer.replace(/\?/g, `${j}`);
    console.log(x, y, z);

    if (expression == "+") {
      if (parseInt(x) + parseInt(y) == parseInt(z)) {
        res = j;
        j += 10;
      }
    }
    if (expression == "-") {
      if (parseInt(x) - parseInt(y) == parseInt(z)) {
        res = j;
        j += 10;
      }
    }

    if (expression == "*") {
      if (parseInt(x) * parseInt(y) == parseInt(z)) {
        res = j;
        j += 10;
      }
    }
  }
  console.log(exp);
  return res;
}

console.log(solveExpression("-?56373--9216=-?47157"));

// describe('Fixed tests', function() {
//     it('Example tests', function() {
//       var data = [
//         ['1+1=?', 2],
//         ['123*45?=5?088', 6],
//         ['-5?*-1=5?', 0],
//         ['19--45=5?', -1],
//         ['??*??=302?', 5],
//         ['?*11=??', 2],
//         ['??*1=??', 2],
//         ['??+??=??', -1]];
//       for(let [exp, expected] of data) Test.assertEquals(solveExpression(exp), expected);
//     });
//   });
