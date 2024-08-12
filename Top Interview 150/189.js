/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    let tempArr = nums.slice(nums.length - k);
    nums.splice(nums.length - k, k);
    nums.splice(0, 0, ...tempArr);
};

console.log(rotate([-1,-100,3,99], 2))