// CHALLENGE 1

// Create a function called  getCelsius() thats takes a temperature in Fahrenheit as an argument and return the temperature in celsius

// SOLUTION
// function getCelsius(f) {
//   const celsius = (f - 32) * 5 / 9;
//   return celsius;
// }

// OR

const getFahrenheitToCelsius = (f) => ((f - 32) * 5 / 9) ;
const getCelsiusToFahrenheit = (c) => ((c * 9 / 5) + 32);
const getCelsiusToKelvin = (c) => ((c + 273.15));
const getKelvinToCelsius = (k) => ((k - 273.15));
const getKelvinToFahrenheit = (k) => ((k - 273.15) * 9 / 5 + 32);
const getFahrenheitToKelvin = (f) => ((32 - 32) * 5/9 + 273.15);

console.log(`${getCelsiusToFahrenheit(0)}\xB0F`);
console.log(`${getFahrenheitToCelsius(32)}\xB0C`);
console.log(`${getCelsiusToKelvin(0)}\xB0K`);
console.log(`${getKelvinToCelsius(0)}\xB0C`);
console.log(`${getKelvinToFahrenheit(0)}\xB0F`);
console.log(`${getFahrenheitToKelvin(0)}\xB0K`);



// CHALLENGE 2
// Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

// SOLUTION
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max
  }
}

console.log(minMax([2, 3, 40, 5]));


// CHALLENGE 3
// Create an IIFE that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads
//  find the area of the rectangle
// SOLUTION
(function(length, width) {
  const area = length * width;
  const output = ` The area of a rectangle with the length of ${length} and width of ${width} is ${area}`;
  console.log(output);
})(10, 5);
