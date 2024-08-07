/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let frequencyMap = new Map();

    for (let num of nums) {
        if (frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        } else {
            frequencyMap.set(num, 1);
        }
    }

    let majorityCount = Math.floor(nums.length / 2);
    for (let [num, count] of frequencyMap) {
        if (count > majorityCount) {
            return num;
        }
    }
};

console.log(majorityElement([2,2,1,1,1,2,2]));