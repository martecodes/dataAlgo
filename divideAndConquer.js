/*
    Given a sorted array of integers, write a function called search,
    that accepts a value and returns the index where the value passed to
    the function is located. If the value is not found return -1
*/

//Naive solution
function searchNaive(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }

    return -1;
}

//Refactor solution
function search(arr, target) {
    let min = 0;
    let max = arr.length-1;

    while (min <= max) {
        let mid = Math.floor(min + (max-min)/2);

        if (arr[mid] < target) {
            min = mid + 1;
        } else if (arr[mid] > target) {
            max = mid-1;
        } else if (arr[mid] == target){
            return mid;
        }
    }

    return -1;
}

console.log("Naive: "+searchNaive([1,2,3,4,5,6,7,8,9,10], 7));
console.log("Refactor: "+search([1,2,3,4,5,6,7,8,9,10], 7));