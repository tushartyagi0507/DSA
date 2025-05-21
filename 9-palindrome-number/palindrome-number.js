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