/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let stringCompare = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    return stringCompare === stringCompare.split("").reverse().join("");
};

console.log(isPalindrome(" "))