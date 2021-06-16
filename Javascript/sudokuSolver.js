//https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript


function nextEmpty(puzzle) {
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      if (puzzle[i][j] === 0) {
        return [i, j];
			}
		}
	}
	return [-1, -1]; //checks next space that is a 0, returns -1,-1 if all spaces filled
}

function checkRow(puzzle, row, value) {
  for (let i = 0; i < puzzle[row].length; i++) {
    if (puzzle[row][i] === value) {
      return false;
		}
	}
  
	return true; //returns true if the attempted value does not exist in that row
}

function checkColumn(puzzle, column, value) {
  for (let i = 0; i < 9; i++) {
    if (puzzle[i][column] === value) {
      return false;
		}
	}
  
	return true; // returns true if attempted value does not exist in that column
}

function checkSquare(puzzle, row, column, value) {
  boxRow = Math.floor(row / 3) * 3; // finds the top row in the current 3x3 that the row exists in
	boxCol = Math.floor(column / 3) * 3; //finds the leftmost column in the 3x3 the column exists in
  
	for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (puzzle[boxRow + r][boxCol + c] === value) return false; //tests all values in 3x3, if the value exists in them returns false
		}
	}
  
	return true;
}

function checkValue (puzzle, row, column, value) {
  return (
    checkRow(puzzle, row, value) &&
		checkColumn(puzzle, column, value) &&
		checkSquare(puzzle, row, column, value)
    );
  }; //combines all 3 checks into one function
  
  const sudoku = (puzzle) => {
    let nextEmptySpot = nextEmpty(puzzle)
    if(nextEmptySpot[0] == -1){
      return puzzle //if our check value returns -1 the puzzle is finished and it returns it
    }
    for(let i = 0; i <= 9; i ++){
      if(checkValue(puzzle, nextEmptySpot[0], nextEmptySpot[1], i)){ //does all our checks
        puzzle[nextEmptySpot[0]][nextEmptySpot[1]] = i
        sudoku(puzzle) //re-runs the function
      }
    }
    if(nextEmpty(puzzle)[0] !== -1){
      puzzle[nextEmptySpot[0]][nextEmptySpot[1]] = 0
    }

    return puzzle
  }
  
  let puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

console.log(sudoku(puzzle))
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] */

// got stuck and ended up looking to a medium article for help

//https://medium.com/swlh/backtracking-algorithm-to-solve-sudoku-puzzle-in-javascript-732aedcf5e2

//sad I didn't solve this with my own brain but I learned a lot nonetheless
