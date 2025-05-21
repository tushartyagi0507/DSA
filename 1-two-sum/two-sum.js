/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++ ){
        for(let j = 0; j < nums.length && i != j ; j ++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};

const nums = [2, 7, 11, 15]
twoSum(nums, 9)