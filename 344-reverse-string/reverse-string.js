/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let n = s.length;
    for(i=0; i < Math.ceil(n/2); i++){
        let temp;
        temp = s[i]
        s[i] = s[n-i-1]
        s[n-i-1] = temp
    }
    return s
};

const s = ["h","e","l","l","o"]

reverseString(s)
