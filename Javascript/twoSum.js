// array of nums
// target

const twoSum = (nums, target) => {
    let res
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++ ){
            if(j !== i && nums[i] + nums[j] == target){
                res = [j, i]
            }   
        }
    }
    return res
}

console.log(twoSum([1,2,3,4,5], 3))

// function that takes an array of numbers, and a target value,
// return the indexes of the two nums that add up to the target value