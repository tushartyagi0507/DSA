/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0 
    let right = nums.length -1 

    while (right >= left){
        middle = Math.floor((left+right)/ 2) // 
        if(nums[middle] == target){
            return middle 
        }
        else if (nums[middle] < target){
            left = middle + 1
        }
        else{
            right = middle - 1
        }
    }

    return -1
    
};

const arr = [-1,0,3,5,9,12]
search(arr, 9)