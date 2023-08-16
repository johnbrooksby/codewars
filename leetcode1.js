var maxSlidingWindow = function(nums, k) {
   
    // Below works, but the code is too slow
   
    let maxArray = []
    let maxNum = -Infinity
    // for (let i = 0; i <= nums.length - k; i++){
    //     for (let j = i; j < k + i; j++){
    //         if (nums[j] > maxNum) {
    //             maxNum = nums[j]
    //         }
    //     }
    //     maxArray.push(maxNum)
    //     maxNum = -Infinity
    // }
    // return maxArray
}

console.log(maxSlidingWindow([3,4,2,1,-3,6,7],3))