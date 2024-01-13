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



console.log(x);