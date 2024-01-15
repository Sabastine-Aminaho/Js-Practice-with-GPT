let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'greenberry'];

//by adding the berries into the first array means that we are nesting it. That is an array within an array
// fruits.push(berries); 

// x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits; 

x = allFruits[1];

x = fruits.concat(berries); //This add both fruits and berries as one array
// we can use spread operator (...) to achieve same thing as concat

// Spread Operator (...)

x = [...fruits, ...berries];

// if i took the dot off berries, then i am nesting the berries in the fruits
x = [...fruits, berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];

x = arr.flat(); // this will make the arrays above  to be in one array


// Static Methods On Array Object

x = Array.isArray('hello'); // this returns a boolean and help to identify is the passed object is available in the array

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);