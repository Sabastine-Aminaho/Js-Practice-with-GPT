// Number challenge by traversy media


//QUESTION
//Create a variable called x that is a random number between 1 and 100 along with a variable called y that is a random number between 1 and 50. Create a variable for the sum, difference, product, quotient, and remainder fo x and y.Log the variable in a string that shows the two numbers of x and y along with the operators and result.
const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

//Get the sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;


// Get the difference
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;


//Get the product
const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;

//Get the quotient
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;

//Get the remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;



console.log(x, y);
console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);


