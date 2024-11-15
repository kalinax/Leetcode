/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
            return true; // Found the two numbers
        } else if (sum < target) {
            left++; // Move left pointer to increase the sum
        } else {
            right--; // Move right pointer to decrease the sum
        }
    }

    return false; // No pair found
};

console.log(twoSum([2,7,11,15], 9));