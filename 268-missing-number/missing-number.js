/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length
    let expectedSum = n * (n+1)/2;
    let sum = nums.reduce((acc,val)=> acc+val, 0)
    const missingNumber = expectedSum - sum
    return missingNumber
};

