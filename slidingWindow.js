/* 
    Write a function called maxSubrraySum which accepts
    an array of integers and a nber called navigator. the 
    function should calculate the maximum sum of n consecutive
    elements in the array.
*/

// arr = [1,2,5,2,8,1,5] n = 2 -> 10
// arr = [1,2,5,2,8,1,5] n = 4 -> 17

// Naive solution
function maxSubrraySum(arr, n) { //O(N^2)
    if (n > arr.length) return null;

    let max = -Infinity;

    for (let i = 0; i < arr.length-n; i++) {
        temp = 0;

        for (let j = 0; j < n; j++) {
            temp += arr[i+j];
        }

        if (temp > max) {
            max = temp;
        }
        
    }

    return max;
}

console.log("Naive Solution: "+maxSubrraySum([1,2,5,2,8,1,5], 4));

// Refactor solution
function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < n) return null;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];   
    }

    tempSum = maxSum;

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i-n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log("Refactor Solution: "+maxSubarraySum([1,2,5,2,8,1,5], 4));
