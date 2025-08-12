/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n= nums.length
    let hash = {}

    for(let i=0; i< n; i++){
        let pair = target - nums[i]
        if(hash[pair] !== undefined){
            return [hash[pair], i]
        }
            hash[nums[i]] = i;
    }
};