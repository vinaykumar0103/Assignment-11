"use strict"

// 1. Write a JavaScript program to take an array as input from the user and calculate
// the sum of numbers in odd places and the sum of numbers at even places.
// a) Print the difference between the two sums
// b) Print the number of elements in odd places
// c) Print the number of elements in even places
// d) Print the average of all elements in the array
// e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
// Places
// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Explanation:
// Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
// Sum of Numbers at Even Places = 2 + 4 = 6
// Difference = 9 - 6 = 3
// Sample Output:
// Difference = 3
// Odd Elements = 3
// Even Elements = 2
// Average = 3
// GCD = 3

function EvenOddSum(arr, n) 
{ 
    let even = 0; 
    let odd = 0; 
    for (let i = 0; i < n; i++)
    {
      
        // Loop to find even, odd sum 
        if (i & 1 != 0) 
            odd += arr[i]; 
        else
            even += arr[i]; 
    } 
    
    console.log("Even index positions sum " + even); 
    console.log("\nOdd index positions sum " + odd); 
} 
    
let arr = [ 1, 2, 3, 4, 5, 6 ]; 
let n = arr.length; 
  
EvenOddSum(arr, n); 
   


// 2. Write a JavaScript program to take 2 arrays from the user and check if the
// number 4 exists in any of the arrays, or both of the arrays.
// Sample Input 1:
// [ 1, 2, 3, 4, 5 ]
// [ 4, 6, 1, 8, 2 ]
// Output:

// 4 in both arrays
// Sample Input 2:
// [ 1, 2, 3, 6, 5 ]
// [ 4, 6, 1, 8, 2 ]
// Output:
// 4 in array 2
// Sample Input 3:
// [ 1, 2, 3, 4, 5 ]
// [ 5, 6, 1, 8, 2 ]
// Output:
// 4 in array 1

const array1 = prompt("Enter first array (comma separated)").split(",").map(Number);
const array2 = prompt("Enter second array (comma separated)").split(",").map(Number);

let foundInArray1 = array1.includes(4);
let foundInArray2 = array2.includes(4);

if (foundInArray1 && foundInArray2) {
  console.log("4 in both arrays");
} else if (foundInArray1) {
  console.log("4 in array 1");
} else if (foundInArray2) {
  console.log("4 in array 2");
} else {
  console.log("4 not found in either array");
}


// 3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
// array.
// Note: Do not use array.flat();
// Sample Input:
// [ 1, 2, [ 3, 4, [ 5 ] ] ]
// Output:
// [ 1, 2, 3, 4, 5 ]

function flattenArray(arr) {
  let result = [];
  
  function traverse(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        traverse(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }
  
  traverse(arr);
  return result;
}


let deepArray = [ 1, 2, [ 3, 4, [ 5 ] ] ];
let flatArray = flattenArray(deepArray);
console.log(flatArray); // [ 1, 2, 3, 4, 5 ]


// 4) Write a JavaScript program to take an array as input from the user and:

// a) Store all duplicate elements in a separate array
// b) Remove the duplicate elements from the original array
// Sample Input:
// [ 1, 2, 3, 2, 3, 4, 5 ]
// Output:
// Duplicate Elements = [ 2, 3 ]
// Array without duplicate elements = [ 1, 2, 3, 4, 5 ]

const input = [1, 2, 3, 2, 3, 4, 5];

const duplicates = [];
const unique = input.filter((elem, index, self) => {
  if (self.indexOf(elem) !== index) {
    duplicates.push(elem);
    return false;
  } else {
    return true;
  }
});

console.log("Duplicate Elements = ", duplicates);
console.log("Array without duplicate elements = ", unique);



// 5. Debug the given JavaScript program and execute the correct code.

function thirdLargest(arr, arr_size) {
  
  if (arr_size < 3) {
    console.log("Invalid Input");
    return;
  }
  
  let first = arr[0];
  
  
  for (let i = 1; i < arr_size ; i++) {
    if (arr[i] > first) {
      
      first = arr[i];
    }
  }
  
  let second = Number.MIN_VALUE;
  for (let i = 0; i < arr_size ; i++) {
    if (arr[i] > second && arr[i] < first) {
      
      second = arr[i];
    }
  }
  
  let third = Number.MIN_VALUE;
  for (let i = 0; i < arr_size ; i++) {
    if (arr[i] < first && arr[i] > second) {
      
      third = arr[i];
    }
  }
  
  console.log("The third largest element is " + third);
}

let arr = [12, 13, 1, 10, 34, 16];
let n = arr.length;
thirdLargest(arr, n);
