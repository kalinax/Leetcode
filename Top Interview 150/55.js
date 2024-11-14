/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let numsLength = nums.length
    if (numsLength == 1) return true
    let maxdist = 0;
    for (let i = 0; i < numsLength; i++) {
        if (maxdist < 0) {
            return false;
        } else if (nums[i] > maxdist) {
            maxdist = nums[i];
        }
        maxdist--;
    }
    return true;
};

console.log(canJump([3,2,1,0,4]))