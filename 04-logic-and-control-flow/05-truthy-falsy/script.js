// FALSY VALUES
// - false
// - 0
//  - '' or "" (EMPTY STRINGS)
//  - null
//  - undefined
//  - NaN

let x;
x = false;
x = 0;
x = '';
x = undefined;
x = null;
x = - NaN; 

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
} 

console.log(Boolean(x));


// TRUTHY VALUES
// Everything else that is not falsy
// - true
// - '0' is truthy because it is a string
//  - ' ' (space is a string)
//  - [] empty array
//  - {} empty object
//  - function
//  - 'false' is truthy because its a string


let y;
y = 'false';
y = "0";
y = ' ';
y = [];
y = {};
y = true; 

if (y) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
} 

console.log(Boolean(y));








//  622C782