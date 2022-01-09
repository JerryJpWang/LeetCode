// 34. Find First and Last Position of Element in Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let head = nums[0];
    let tail = nums[nums.length - 1];

    let headIdx = -1;
    let tailIdx = -1;

    if (!nums || !nums.length) {
        return [-1, -1];
    }

    if (target < head || target > tail) {
        return [-1, -1];
    }

    if (head === target) {
        headIdx = 0;
    }

    if (tail === target) {
        tailIdx = nums.length - 1;
    }

    if (headIdx !== -1 && tailIdx !== -1) {
        return [headIdx, tailIdx];
    }

    let leftIdx = 0;
    let rightIdx = nums.length - 1;

    if (headIdx === -1 && tailIdx === -1) {
        while (rightIdx - leftIdx > 1) {
            let checkPoint = Math.floor((rightIdx - leftIdx) / 2) + leftIdx;
            let checkValue = nums[checkPoint];
            if (checkValue === target) {
                headIdx = findTarget(nums, target, leftIdx, checkPoint, "<");
                tailIdx = findTarget(nums, target, checkPoint, rightIdx, ">");
                break;
            } else if (checkValue > target) {
                rightIdx = checkPoint;
            } else if (checkValue < target) {
                leftIdx = checkPoint;
            }
        }
    } else {
        if (headIdx === -1) {
            headIdx = findTarget(nums, target, leftIdx, rightIdx, "<");
        } else if (tailIdx === -1) {
            tailIdx = findTarget(nums, target, leftIdx, rightIdx, ">");
        }
    }

    return [headIdx, tailIdx];
};

function findTarget(nums, target, leftIdx, rightIdx, direct) {
    while (rightIdx - leftIdx > 1) {
        let checkPoint = Math.floor((rightIdx - leftIdx) / 2) + leftIdx;
        let checkValue = nums[checkPoint];
        if (checkValue === target) {
            if (direct === "<") {
                rightIdx = checkPoint;
            } else if (direct === ">") {
                leftIdx = checkPoint;
            }
        } else if (checkValue < target) {
            leftIdx = checkPoint;
        } else if (checkValue > target) {
            rightIdx = checkPoint;
        }
    }

    if (rightIdx - leftIdx <= 1) {
        if (direct === "<") {
            if (target === nums[leftIdx]) {
                return leftIdx;
            } else {
                return rightIdx;
            }
        } else if (direct === ">") {
            if (target === nums[rightIdx]) {
                return rightIdx;
            } else {
                return leftIdx;
            }
        }
    }
}

searchRange([1, 2, 3], 3);
searchRange([1, 2, 3], 1);
searchRange([5, 7, 7, 8, 8, 10], 8);

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
