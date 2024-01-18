// Function Declaration
function addDollarSign(value) {  // the declaration always start with a function
    return '$' + value;
} // there is no semi-colon at the end

console.log(addDollarSign(200));

const addPlusSign = function (value) { // expression always start with a variable declaration
    return '+' + value;
}; // there is always semi-colon at the end

console.log(addPlusSign(40));

// You can use function declarations before they are defined in the code.
//  You cannot use function expressions before their variable is defined (not the function itself).
// Function Declaration
hoistedFunction(); // This works
function hoistedFunction() {
  console.log('I am hoisted!');
}

// Function Expression
// nonHoistedFunction(); // This would cause an error
var nonHoistedFunction = function() {
  console.log('I am not hoisted!');
};
