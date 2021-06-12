//https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript


//the kata said brute force would work, but I want to avoid that if possible
// going to try the rows and columns check first, I don't even know where to start when it comes to checking
//the 3x3 grids
function sudoku(puzzle, prevPuzzle) {
     let columns = {0: [], 1: [], 2:[],3: [], 4: [], 5:[],6: [], 7: [], 8:[]}
     for(row in puzzle){
         for(let i = 0; i < puzzle[row].length; i ++){
             columns[i].push(puzzle[row][i])
         }
     }
     solve(columns, puzzle)
  }

  const solve = (columns, puzzle) => {
    for(row in puzzle){
        for(let i = 0; i < puzzle[row].length; i ++){
            if(puzzle[row][i] == 0){
                
            }
        }
    }
  }


  // each array should contain each digit in 1-9 only once
  // once an array has a number, no other arrays should have that number in the same index
  // i.e. puzzle[0][0] = 5, so puzzle[1-8][0] cannot be 5 

var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];


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