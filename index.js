// Create a JavaScript code that accepts an array of numbers and returns a new array
// with only the odd numbers from the original array.
// If there is only one odd number in the array, return an array with that single value.

//define arrA, and new arrB
//while there are numbers left in the array, which can vary in length:
//pull each index, and
//check if it is odd
//>>>using modulo
// if modulo 0, then add the number to a new arrB using push
// add 1 to index, and repeat process

const arrA = [2, 4, 6, 8, 10, 11, 12, 13];
const arrB = [];
let i = 0;

while (i <= arrA.length - 1) {
  //console.log(`${arrA[i]}`);
  if (arrA[i] % 2 !== 0) {
    arrB.push(arrA[i]);
  }
  i++;
}

console.log(arrB);
