/**
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function (nums, k) {
    let sorted = seperate(nums);
    let length = sorted.length;

    return sorted[length - k];
};

function seperate(arr) {
    let length = arr.length;

    if (length > 2) {
        let leftLength = Math.floor(length / 2);
        let left = arr.splice(0, leftLength);
        return mergeArr(seperate(left), seperate(arr));
    }

    if (length === 1) {
        return arr;
    }

    if (length === 2) {
        let first = arr[0];
        let second = arr[1];

        if (first > second) return [second, first];

        return arr;
    }

    return result;
}

function mergeArr(left, right) {
    let result = [];

    while (left.length && right.length) {
        let leftValue = left[0];
        let rightValue = right[0];

        if (leftValue < rightValue) {
            result.push(leftValue);
            left.shift();
        } else {
            result.push(rightValue);
            right.shift();
        }
    }

    if (left.length > 0) {
        result = [...result, ...left];
    } else if (right.length > 0) {
        result = [...result, ...right];
    }

    return result;
}