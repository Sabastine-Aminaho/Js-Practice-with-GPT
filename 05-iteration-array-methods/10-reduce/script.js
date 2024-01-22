//  THE reducer works best for e commerce cart

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); //means we are starting from 0, i.e. the accumulator is 0 for initial value

// OR
const sum2 = numbers.reduce((acc, curr) => acc + curr, 10) // this means that we are starting at ten and the number acc will then increase

// console.log(sum2)



// Using a for loop  function
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur
  }
  return acc;
}

// console.log(sum3());
 


// let  simulate or demmo a real cart example

const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 230 }
];

const sumPrice = cart.reduce((acc, product) => acc + product.price, 0);

//  OR

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

const totalPrice = 'Total Price = ' + total;

console.log(totalPrice, sumPrice);


 