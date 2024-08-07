/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m,n);
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);

    console.log(nums); // just to see the result in console
};

merge([[1,2,3,0,0,0]]);