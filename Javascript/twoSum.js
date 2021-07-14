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

// function that takes an array of numbers, and a target value,
// return the indexes of the two nums that add up to the target value

module.exports = twoSum