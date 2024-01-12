// My first Assignment

//Take the variable myString and capitalize the first letter of the word using the string methods. Put the result in the variable myNewString.
// Solution 1
/* const myString = 'developer';

let x = myString.charAt(0).toUpperCase();

const myNewString = x + myString.substring(1);

console.log(myNewString) */


//  Solution 2
/* const myString = 'developer';

let myNewString;

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString); */

// Solution 3
const myString = 'developer';

let myNewString;

myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString);



