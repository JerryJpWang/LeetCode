var trap = function (height) {
    let i = 0;
    let rock = [];
    let result = 0;
    while (i < height.length - 1) {
        let rightMax = {
            idx: 0,
            height: 0
        }

        for (let j = i + 1; j < height.length; j++) {
            if (height[j] >= height[i]) {
                const width = j - i - 1;
                const h = Math.min(height[i], height[j]);

                let rockSum = 0;
                rock.forEach((val) => {
                    rockSum += val;
                });

                result += width * h - rockSum;

                rock = [];
                i = j;
                break;
            }

            rock.push(height[j]);
            if (height[j] > rightMax.height) {
                rightMax.height = height[j];
                rightMax.idx = j;
            }

            if (j === height.length - 1) {
                // check rightMax 
                const width = rightMax.idx-i-1;
                const h = Math.min(height[i], rightMax.height);

                let rockSum = 0;
                for(let r=0; r<width; r++)
                {
                    rockSum += rock[r]
                }
                let temp = width * h - rockSum;
                result += temp;

                rock = [];

                if(temp > 0){
                    i = rightMax.idx;
                } else {
                    i++;
                }
            }
        }
    }

    return result;
};

//trap([0,1,0,2,1,0,1,3,2,1,2,1]) //6
//trap([4, 2, 0, 3, 2, 5]); // 9
//trap([4, 2, 3]); //1
trap([6,8,5,0,0,6,5]); //1
