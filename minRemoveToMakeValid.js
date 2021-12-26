/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    const store = [];
    const checkList = [];
    let word = "";

    for (const c of s) {
        switch (c) {
            case "(":
            case ")":
                if(word.length > 0)
                {
                    store.push(word);
                    word = "";
                }

                if (c === ")" && checkList.length) {
                    checkList.pop();
                    store.push(c);
                } else if (c === "(") {
                    let idx = store.length;
                    checkList.push(idx);
                    store.push(c);
                }
                break;
            default:
                word += c;
                break;
        }
    }

    let result = "";
    for (let i = 0; i < store.length; i++) {
        const exist = store.includes[i];
        if (!exist) {
            result += store[i];
        }
    }

    return result;
};

minRemoveToMakeValid("lee(t(c)o)de)");

/*
 Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
Example 4:

Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"

*/
