/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    if(x == 0) return true
     if(x % 10 == 0) return false
    const value = String(x)
    for(i = 0; i < value.length / 2 ; i++){
        if(value[i] == value[value.length -1 -i]){
            
        } else {
            return false
        }
    }
    return true
};

isPalindrome(121)

/** 
var isPalindrome = function(x) {
    // Negative numbers and numbers ending in 0 (except 0) can't be palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf = 0;

    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // Check for even and odd number of digits
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};
*/
