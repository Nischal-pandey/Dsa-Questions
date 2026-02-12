// Q=> Check if an Array is Sorted Given an array of size n, write a program to check if the given array is sorted in
//  (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.

class Solution {
    // Function to check if the array is sorted
    isSorted(arr, n) {
        for (let i = 1; i < n; i++) {
            if (arr[i] < arr[i - 1])  // If any element is smaller than the previous one, return false
                return false;
        }
        return true;  // Return true if the array is sorted
    }
}

// Driver code
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let obj = new Solution();

// Output result
console.log(obj.isSorted(arr, n) ? "True" : "False");
