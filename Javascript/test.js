let numArr = [5,4,3,2,1]
let x = numArr
    x[0] += 1
        console.log(x, numArr) // => [1,2,3,4,5], [1,2,3,4,5]

// let x = numArr just makes x an alias for numArr, while let x = numArr.map(num => num) makes two seperate arrays