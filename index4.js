// Create a JavaScript code that prints each number from 1 to 100 on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

//let numA be 1, and numMax is 100
//take numA and divide by 3
// if remainder is 0, then
// divide by 5
// if remainder is 0, then print fizz buzz,
// else print fizz
// else, divide by 5
// if remainder is 0 print buzz
// add 1 to numA, repeat

let numA = 1;
let numMax = 100;

while (numA < +numMax) {
  if (numA % 3 == 0 && numA % 5 == 0) {
    console.log("FizzBuzz");
  } else {
    if (numA % 3 == 0) {
      console.log("Fizz");
    } else {
      if (numA % 5 == 0) {
        console.log("Buzz");
      } else {
        console.log(numA);
      }
    }
  }
  numA++;
}
