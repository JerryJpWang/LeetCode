var lengthOfLongestSubstring = function (s) {
    let map = {};
    let width = 0;
    let max = 0;

    let left = 0;

    let i = 0;
    while (i < s.length) {
        const current = s[i];
        const dupIdx = map[current];

        if (dupIdx) {
            let nextcheck = dupIdx + 1;
            map = {};
            left = width;

            while (nextcheck <= i) {
                const nextWord = s[nextcheck];
                if (map[nextWord]) {
                    map = {};
                    nextcheck = map[nextWord] + 1;                    
                    left = width;
                } else {
                    map[nextWord] = nextcheck;
                    nextcheck++;
                    left--;
                }
            }            
        } else {
            map[current] = i;

            if(left === 0)
            {
                width++;
            } else {
                left--;
            }

            max = Math.max(max, width);
        }

        i++;
    }

    return max;
};
