/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let n = nums.length;
    let k = 0;
    let max = 0;

    for (i=0; i< n; i++){
        if(nums[i] == 1){
            k++;
        }
        else{
            max = Math.max(k, max)
            k =0
        }
    }
    return Math.max(k, max)
};