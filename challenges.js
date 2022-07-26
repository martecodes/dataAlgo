function sameFrequency(a, b) {
  // good luck. Add any arguments you deem necessary.
  const mapA = {};
  const mapB = {};

  for (let num of a.toString().split("")) {
    mapA[num] = (mapA[num] || 0) + 1;
  }

  for (let num of b.toString().split("")) {
    mapB[num] = (mapB[num] || 0) + 1;
  }

  for (let num in mapA) {
    if (mapB[num]) {
      if (mapA[num] - mapB[num] > 0 || mapA[num] - mapB[num] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

function areThereDuplicates(arr) {
  // good luck. (supply any arguments you deem necessary.)
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = (map[arr[i]] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] > 1) return true;
  }

  return false;
}

function averagePair(arr, avg) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;

  while (left < arr.length) {
    if (right == left) right = left + 1;
    if (arr[left] + arr[right] / 2 == avg) return true;

    left++;
    right--;
  }

  return false;
}

function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  const sub = str1.split("");
  const str = str2.split("");

  for (let i = 0; i < str.length; i++) {
    if (sub.includes(str[i])) sub.shift();
  }

  return sub.length == 0 ? true : false;
}

function maxSubarraySum(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  let currentTotal = total;

  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}

function minSubArrayLen (nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }

    console.log(total);
  }
 
  return minLen === Infinity ? 0 : minLen;

}

function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);

    seen[char]= i + 1;

    console.log(seen)
  }

  return longest;

}
