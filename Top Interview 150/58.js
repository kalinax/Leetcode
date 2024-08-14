/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let strArr = s.split(/(\s+)/).filter(string => string && string.trim());
    return strArr[strArr.length - 1].length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))