/**
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    quickSort(nums, 0, nums.length - 1);
    return nums[nums.length - k];
};

function quickSort(nums, left, right) {
    if (right - left < 1) {
        return;
    }

    const target = nums[left];
    let pivot = left;

    for (let i = left + 1; i <= right; i++) {
        const compare = nums[i];
        if (compare <= target) {
            if (i === pivot + 1) {
                // append
                pivot = i;
            } else {
                // swap
                pivot = pivot + 1;
                nums[i] = nums[pivot];
                nums[pivot] = compare;
            }
        }
    }

    if (pivot !== left) {
        nums[left] = nums[pivot];
        nums[pivot] = target;
    }

    // left
    quickSort(nums, left, pivot - 1);

    // right
    quickSort(nums, pivot + 1, right);
}
