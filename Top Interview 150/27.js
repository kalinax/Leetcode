/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let length = nums.length // just for the memory
    for (let i = 0; i < length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i = i-1
        }
    }
    return nums.length;
};