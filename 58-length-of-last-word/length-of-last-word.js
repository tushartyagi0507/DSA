/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const str = s.trim().split(" ")
    const lastword = str[str.length - 1]
    return lastword.length

};

lengthOfLastWord("Hello World")