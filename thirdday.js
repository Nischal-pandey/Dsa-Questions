// Function to find the second smallest element in the array
function secondSmallest(arr, n) {
    // Edge case: if the array has fewer than 2 elements
    if (n < 2) {
        return -1;
    }

    let small = Infinity;
    let second_small = Infinity;

    // Loop through the array to find the second smallest element
    for (let i = 0; i < n; i++) {
        // Update the smallest and second smallest values
        if (arr[i] < small) {
            second_small = small;
            small = arr[i];
        } 
        else if (arr[i] < second_small && arr[i] !== small) {
            second_small = arr[i];
        }
    }

    return second_small; // Return the second smallest element
}

// Function to find the second largest element in the array
function secondLargest(arr, n) {
    // Edge case: if the array has fewer than 2 elements
    if (n < 2) {
        return -1;
    }

    let large = -Infinity;
    let second_large = -Infinity;

    // Loop through the array to find the second largest element
    for (let i = 0; i < n; i++) {
        // Update the largest and second largest values
        if (arr[i] > large) {
            second_large = large;
            large = arr[i];
        } 
        else if (arr[i] > second_large && arr[i] !== large) {
            second_large = arr[i];
        }
    }

    return second_large; // Return the second largest element
}

// Main function to handle input and output
function main() {
    const arr = [1, 2, 4, 7, 7, 5];  // Array of elements
    const n = arr.length;  // Calculate the size of the array

    // Find the second smallest and second largest elements
    const sS = secondSmallest(arr, n);
    const sL = secondLargest(arr, n);

    // Output the results
    console.log(`Second smallest is ${sS}`);
    console.log(`Second largest is ${sL}`);
}

// Call the main function
main();