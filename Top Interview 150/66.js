/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const forLenght = digits.length - 1;
    for (let i = forLenght; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }    
    digits.unshift(1);
    return digits;
};

console.log(plusOne([9]))