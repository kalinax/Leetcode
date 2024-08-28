/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

    let words = s.split(" ");
    let map = new Map()

    if (words.length != pattern.length) return false;
    if (new Set(words).size !== new Set(pattern).size) return false;

    for (let i = 0; i < words.length; i++) {
        if(map.has(pattern[i]) && 
            map.get(pattern[i]) !== words[i]) return false
        map.set(pattern[i], words[i])
    }
    return true
};

console.log(wordPattern('abba', 'cat dog dog cat'))