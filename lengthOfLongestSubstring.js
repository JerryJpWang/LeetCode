var lengthOfLongestSubstring = function (s) {

    let map = {};
    let width = 0;
    let i = 0;
    while (i < s.length) {
        const current = s[i];
        map[current] = (map[current] || 0) + 1;

        let isDuplicate = false;
        for (let idx in map) {
            if (map[idx] > 1) {
                isDuplicate = true;
            }
        }
        if (isDuplicate) {
            const headIdx = i - width;
            const headVal = s[headIdx];
            map[headVal]--;
        } else {
            width++;
        }

        i++;
    }

    return width;
};


abcbedefhijk 
     defh     