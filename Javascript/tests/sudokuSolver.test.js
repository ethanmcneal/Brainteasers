const { test, expect } = require("@jest/globals");
const sudoku = require("../sudokuSolver");

function validSolution(board) {
	let valid = true;
	const testValiditiy = (arr) => {
		let set = new Set(arr);
		if (arr.includes(0) || [...set].length !== 9) {
			return false;
		} else {
			return true;
		} //takes a column, row, or cube, abd makes a set, if the set.length === 9 is true or does not include a 0, returns true
	};
    //row testing
	for (i = 0; i < board.length; i++) {
		if (!valid) break;
		let row = [];
		for (j = 0; j < board.length; j++) {
			row.push(board[i][j]);
		}
		valid = testValiditiy(row);
	}

	//column testing
	for (i = 0; i < board.length; i++) {
		let col = [];
		for (j = 0; j < board.length; j++) {
			col.push(board[j][i]);
		}
		valid = testValiditiy(col);
		if (!valid) break;
	}

	//3x3 testing
	let row = 0;
	let column = 0;
	while (row < 9 && column < 9) {
		let cube = [];
		for (i = row; i < row + 3; i++) {
			for (j = column; j < column + 3; j++) {
				cube.push(board[i][j]);
			}
		}
		row += 3;
		valid = testValiditiy(cube);
		if (!valid) break;
		if (row == 9 && column != 9) {
			column += 3;
			row = 0;
		}
	}
	return valid;
}
let puzzleOne = [
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

let puzzleTwo = [
	[3, 0, 6, 5, 0, 8, 4, 0, 0],
	[5, 2, 0, 0, 0, 0, 0, 0, 0],
	[0, 8, 7, 0, 0, 0, 0, 3, 1],
	[0, 0, 3, 0, 1, 0, 0, 8, 0],
	[9, 0, 0, 8, 6, 3, 0, 0, 5],
	[0, 5, 0, 0, 9, 0, 6, 0, 0],
	[1, 3, 0, 0, 0, 0, 2, 5, 0],
	[0, 0, 0, 0, 0, 0, 0, 7, 4],
	[0, 0, 5, 2, 0, 6, 3, 0, 0],
];

test("tests if solution is valid", () => {
	expect(validSolution(sudoku(puzzleOne))).toBeTruthy();
	expect(validSolution(sudoku(puzzleTwo))).toBeTruthy();
});
