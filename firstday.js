// // Function to sort the array and return the largest element
// function sortArr(arr) {
//     // Sort the array in ascending order
//     arr.sort((a, b) => a - b);
    
//     // Return the last element (largest element) after sorting
//     return arr[arr.length - 1];
// }

// // Main function to handle input and output
// function main() {
//     // Initialize arrays
//     let arr1 = [2, 5, 1, 9 , 0];
//     let arr2 = [8, 10, 5, 7, 9];
    
//     // Find and output the largest element in both arrays
//     console.log("The Largest element in the array is:", sortArr(arr1));
//     console.log("The Largest element in the array is:", sortArr(arr2));
// }

// // Call the main function
// main();









function sortArr(arr){
     arr.sort((a, b)=> a - b);

     return arr[arr.length - 1];
}

function main(){

    let arr1 = [5,2,8,3,9];
    let arr2 = [6,5,4,8,7];
    console.log("largest array is ", sortArr(arr1));
    console.log("largest array is ", sortArr(arr2));
    
    
}
main();









