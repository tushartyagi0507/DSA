/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let r = 0;
    let l = numbers.length -1;
    while(r < l){
    if(numbers[r]+numbers[l] == target) return [r+1,l+1];
    if(numbers[r] + numbers[l] > target) l--;
    else r++
    }

};