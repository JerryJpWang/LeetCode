const almostPalindrome = function (s) {

    let totalLength = s.length;
    if (totalLength < 3) {
        return true;
    }

    s = s.toLowerCase();

    let left = 0;
    let right = s.length - 1;
    let isEven = totalLength % 2;
    let mid = Math.floor(totalLength / 2);
    let leftEnd = mid;
    let rightEnd = mid;

    if (isEven) {
        rightEnd = mid + 1;
    }

    let byPassCount = 2;

    let memory = {};

    while (left < leftEnd || right > rightEnd) {
        const lChar = s[left];
        const rChar = s[right];

        if (lChar !== rChar) {
            if (byPassCount === 2) {
                byPassCount--;
                // memory
                memory = {
                    left: left,
                    right: right,
                    leftEnd: leftEnd,
                    rightEnd: rightEnd,
                    isEven: isEven,
                };

                left++;
                if (isEven) {
                    leftEnd++;
                } else {
                    rightEnd++;
                }
                isEven = !isEven;
            } else if (byPassCount === 1) {
                byPassCount--;
                // restore
                left = memory.left;
                right = memory.right;
                leftEnd = memory.leftEnd;
                rightEnd = memory.rightEnd;
                isEven = memory.isEven;

                right--;
                if (isEven) {
                    rightEnd--;
                } else {
                    leftEnd--;
                }

                isEven = !isEven;
            } else {
                return false;
            }
        } else {
            if (left < leftEnd) {
                left++;
            }
            if (right > rightEnd) {
                right--;
            }
        }
    }

    return true;
};
