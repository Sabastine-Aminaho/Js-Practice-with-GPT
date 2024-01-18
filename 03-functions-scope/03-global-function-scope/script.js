// GLOBAL SCOPE
// In JavaScript, the global scope refers to the outermost scope of your code, where variables and functions are defined outside of any block, function, or conditional statement. When you declare a variable or function outside of any block of code, it becomes part of the global scope.
// alert('My window is open');
// console.log(innerWidth);

const x = 100;

console.log(x, 'in global');

function globalFunction() {
    console.log('I am a global function');
  }
  
  // Call the global function
  globalFunction(); // Output: I am a global function
  


//FUNCTION SCOPE
// In JavaScript, a function scope is created when you declare a variable inside a function. This means that the variable is accessible only within that specific function and is not visible outside of it. Variables declared within a function are said to have function scope.
function myFunction() {
    // Function scope
    let localVar = 'I am a local variable';
    console.log(localVar, x); // Output: I am a local variable
}
  
// if i declare the x in the function, the the result will not be from the global scope anymore like the example below

function myFunction() {
    // Function scope
    let x;
    x = 30; 
    let localVar = 'I am a local variable';
    console.log(localVar, x); // Output: I am a local variable
  }
  
  myFunction(); // Call the function
  // Trying to access localVar outside the function would result in an error
  // console.log(localVar); // This would cause an error
  