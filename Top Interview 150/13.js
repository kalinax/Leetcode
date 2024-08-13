/**
 * @param {string} s
 * @return {number}
 */

let numbers = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}
var romanToInt = function(s) {
    let result = 0;
    for (let i = 0;  i < s.length ; i++) {
        if (s.charAt(i) === 'I') {
            if (s.charAt(i + 1) === 'V') {
                result = result + 4
                i++
            } else if (s.charAt(i + 1) === 'X') {
                result = result + 9
                i++
            } else {
                result = result + numbers[s.charAt(i)];
            }
        } else if (s.charAt(i) === 'X') {
            if (s.charAt(i + 1) === 'L') {
                result = result + 40
                i++
            } else if (s.charAt(i + 1) === 'C') {
                result = result + 90
                i++
            } else {
                result = result + numbers[s.charAt(i)];
            }
        } else if (s.charAt(i) === 'C') {
            if (s.charAt(i + 1) === 'D') {
                result = result + 400
                i++
            } else if (s.charAt(i + 1) === 'M') {
                result = result + 900
                i++
            } else {
                result = result + numbers[s.charAt(i)];
            }
        } else {
            result = result + numbers[s.charAt(i)];
        }
    }
    return result;
};

console.log(romanToInt("LVIII"))