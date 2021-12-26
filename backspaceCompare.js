var backspaceCompare = function (s, t) {
    let sArr = getbackspaceResult(s);
    let tArr = getbackspaceResult(t);

    if (sArr.length === tArr.length) {
        for (let i = 0; i < sArr.length; i++) {
            if (sArr[i] !== tArr[i]) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
};

function getbackspaceResult(rawString) {
    let arr = [];
    for (let i of rawString) {
        if (i === "#") {
            arr.pop();
        } else {
            arr.push(i);
        }
    }
    return arr;
}
