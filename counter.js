//NAIVE SOLUTION

function sameNaive(arr1, arr2) {
    //O(n^2)
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        //O(n)
        let correctIndex = arr2.indexOf(arr1[i] ** 2); //O(n)
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

//REFACTORED
function sameRefactor(arr1, arr2) {
    //O(n)
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; //O(n)
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1; //O(n)
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    
    return true;
}

//Anagram
function anagram(str1, str2) {
    //Time Complexity is O(n + n) => O(n)
    if (str1.length !== str2.length) return false;

    //obj that is going to keep count of the letters of str1
    //loop that obj checking each keys with the char of str2
    //to check ount we subtract if a char matches
    //loop is looking for false at end of functon returning true

    const counter = {};

    for (const char of str1) {
        //O(n)
        counter[char] ? ++counter[char] : (counter[char] = 1);
    }

    for (const char of str2) {
        //O(n)
        if (counter[char]) {
            --counter[char];
        } else {
            return false;
        }
    }

    return true;
}

//NAIVE SOLUTION Time Complexity = O(n^2)
function sumZeroNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

//REFACTOR SOLUTION  Time Complexity = O(n)w3
function sumZeroRefactor(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            --right;
        } else {
            ++left;
        }
    }
}

function countUniqueValues(arr) {
    //Time Complexity = O(n)
    let l = 0;
    let r = 1;

    while (r < arr.length) {
        if (arr[l] !== arr[r]) {
            ++l;
            arr[l] = arr[r];
        } else {
            r++;
        }
    }

    return l + 1;
}
