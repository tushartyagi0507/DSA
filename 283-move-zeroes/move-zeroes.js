/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n = nums.length;
    let k = 0;

    for(i=0; i< n; i++){
        if(nums[i] != 0){
            nums[k] = nums[i]
            k++
        }
    }

    for(let i=k; i< n; i++){
        nums[i] = 0;
    }
};