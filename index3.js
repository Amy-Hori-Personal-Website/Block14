//With a for loop, create a JavaScript code that creates a new array in reverse order.

//define array and newArray
// define use array length as index counter, -1
// as long as arrLength count is greater than 0, select last index and push(add to end) to newArray
// then reduce index counter
// use index counter again to add another number

const arrA = [1, 3, 5, 7, 9, 11];
const arrB = [];

let indCount = arrA.length - 1;
let indCountB = arrB.length;

while (indCount >= 0) {
  arrB.push(arrA[indCount]);
  indCount--;
  //console.log(`Index Count is ${indCount}, added number is ${arrA[indCount]}`);
}
console.log(arrB);
