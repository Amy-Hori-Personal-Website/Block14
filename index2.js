// Create a JavaScript code that accepts a string of lowercase letters.
//Print the word followed by how many consonants and vowels it has.

// "a", "e", "i", "o", and "u" are considered vowels.

// Every other letter is considered a consonant.

//Define a string
//define vowelCount and consCount

//While i is less than length of the string as an array,
// check if index 0 is "a"
// check if index 0 is "i", "e", "o", "u"
// and add to vowelCount
// check if a " ", then do nothing
// else, add to consCount
// repeat

// Print "word" has {vowelCount} vowels and {consCount} consonants.

const word = "onomonopia";

let vowelCount = 0;
let consCount = 0;

let i = 0;

while (i <= word.length - 1) {
  //console.log(`${word[i]}`);
  //check for "a"
  if (word[i].toLowerCase() == "a") {
    vowelCount++;
    //console.log("has an a");
  } else {
    //check for "e"
    if (word[i].toLowerCase() == "e") {
      vowelCount++;
    } else {
      //check for "i"
      if (word[i].toLowerCase() == "i") {
        vowelCount++;
      } else {
        //check for "o"
        if (word[i].toLowerCase() == "o") {
          vowelCount++;
        } else {
          //check for "u"
          if (word[i].toLowerCase() == "u") {
            vowelCount++;
          } else {
            //check for not a space
            if (word[i].toLowerCase() !== " ") {
              consCount++;
            }
          }
        }
      }
    }
  }
  i++;
}

console.log(`${word} has ${vowelCount} vowels and ${consCount} consonants.`);
