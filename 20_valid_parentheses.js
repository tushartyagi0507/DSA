/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    let size = s.length;
    for (let i =0; i < size; i++){
        if(map[s[i]]) stack.push(s[i]);
        else{
            if(stack.length == 0) return false; // nothing to match
           let top = stack.pop();
            if(s[i] != map[top]) return false
        }
    }

    return stack.length === 0;
};