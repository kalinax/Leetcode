/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    let i = 0;

    let j = height.length - 1;

    let max = 0;

    while (i < j) {
        
        let area = Math.min(height[i], height[j]) * (j - i)
        if (area > max) {
            max = area;
        } else if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }

    return max;
};

console.log(maxArea([1,1]));