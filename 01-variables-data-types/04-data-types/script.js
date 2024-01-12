// String
const firstName = 'Sara';

// Number
const age = 40;
const temp = 98.2;

// Boolean
const alive = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id')

// BigInt
const n = 9007199884740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
    name: 'Johnson',
}
person.email = 'abc@mail.com';

const sayHello = () => {
    console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);

