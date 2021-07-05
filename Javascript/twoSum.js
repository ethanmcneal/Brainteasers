// array of nums
// target

const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++ ){
            if(j !== i && nums[i] + nums[j] == target){
                return [i, j]
            }   
        }
    }
    return -1 //returns -1 if no nums add up to the target
}

console.log(twoSum([1,2,3,4,5], 3))

// function that takes an array of numbers, and a target value,
// return the indexes of the two nums that add up to the target value