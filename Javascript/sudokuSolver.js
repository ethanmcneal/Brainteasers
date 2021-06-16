//https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript

function nextEmpty(puzzle) {
	for (let i = 0; i < puzzle.length; i++) {
		for (let j = 0; j < puzzle[i].length; i++) {
			if (puzzle[i][j] === 0) {
				return [i, j];
			}
		}
	}
	return [-1, -1];
}

function checkRow(puzzle, row, value) {
	for (var i = 0; i < puzzle[row].length; i++) {
		if (puzzle[row][i] === value) {
			return false;
		}
	}

	return true;
}

function checkColumn(puzzle, column, value) {
	for (var i = 0; i < puzzle.length; i++) {
		if (puzzle[i][column] === value) {
			return false;
		}
	}

	return true;
}

function checkSquare(puzzle, row, column, value) {
	boxRow = Math.floor(row / 3) * 3;
	boxCol = Math.floor(column / 3) * 3;

	for (var r = 0; r < 3; r++) {
		for (var c = 0; c < 3; c++) {
			if (puzzle[boxRow + r][boxCol + c] === value) return false;
		}
	}

	return true;
}

const checkValue = (puzzle, row, column, value) => {
	return (
		checkRow(puzzle, row, value) &&
		checkColumn(puzzle, column, value) &&
		checkSquare(puzzle, row, column, value)
	);
};


const sudoku = (puzzle) => {
  const nextEmpty = nextEmpty(puzzle)
  if(nextEmpty == [-1, -1]){
    return puzzle
  }
  for(let i = 0; i < 9; i ++){
    if(checkValue(puzzle, nextEmpty[0], nextEmpty[1], i)){
      puzzle[nextEmpty[0]][nextEmpty[1]] = i
    }
  }
  sudoku(puzzle)
}

var puzzle = [
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

sudoku(puzzle);
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
