// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 3));

// lets rewrite the above as an arrow function
const add = (a, b) => { // this is more like a function expression
  return a + b;
}

// we can make it even shorter like the below
const subtract = (a, b) => a - b; // this is called implicit return

//  if our function only have a single parameter like the example below, we can even make it shorter
const double = a => a * 2; // you wont need the bracket ()

// Returning an object, always cover it with ()
const createObj = () => ({
  name: 'Sab'
});

const numbers = [1, 2, 3, 4, 5];

/*numbers.forEach(function (n) {
  console.log(n);
})*/

//  Instead of using the above pattern, an arrow function can make it shorter like below;
/*numbers.forEach(n => {
  console.log(n)
})*/

// OR
// Arrow function in a callback
numbers.forEach(n => console.log(n));

// console.log(add(1, 2))
// console.log(subtract(5, 3));
// console.log(double(4));
// console.log(createObj());