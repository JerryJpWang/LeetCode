const isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    const map = {
        "}": "{",
        "[": "]",
        "(": ")",
    };

    const bucket = [];

    for (const item of s) {
        switch (item) {
            case "{":
            case "(":
            case "[":
                bucket.push(item);
                break;
            case "}":
            case ")":
            case "]":
                if (bucket.length) {
                    return false;
                }
                let prev = bucket.pop();
                if (map[item] !== prev) {
                    return false;
                }
                break;
            default:
                return false;
        }
    }

    return (bucket.length) ? false : true;
};