/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let i = 0;
//     let n = nums.length;
//     let map = {}
//     for(i; i < n ; i++){
//         map[nums[i]] = i
//     }

//     for(i; i < n; i++){
//         let pairToFind = target - nums[i];
//         if(map[pairTofind] && map[pairToFind] != i){
//             return [i, map[pairToFind]]
//         }
//     }
// };


var twoSum = function(nums, target) {
    let n = nums.length;
    let map = {};
    
    for(let i = 0; i < n; i++) {
        map[nums[i]] = i;
    }

    for(let i = 0; i < n; i++) {
        let pairToFind = target - nums[i];
        if (pairToFind in map && map[pairToFind] !== i) {
            return [i, map[pairToFind]];
        }
    }
}; 