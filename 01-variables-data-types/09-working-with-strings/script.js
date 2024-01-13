let x;

const name = 'Faith Kikachukwu Aminaho';
const age = 28;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// we can do the above using template literals
//Template Literals
x = `hello my name is ${name} and I am ${age} years old`;

// Strings Properties and Methods
const s = new String('Hello World');

x = typeof s;

x = s.length

//Access value by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase(); // string to uppercase
x = s.toLowerCase(); // string to lowercase

x = s.charAt(0); 

x = s.indexOf('e');

x = s.substring(2, 5);

x = s.substring(7);

x = s.slice(-11, -6);

x = '         Hello World';

x = s.trim(); // used to remove white space or blanks

x = s.replace('World', name)

x = s.includes('Hell'); // include result is always true or false

x = s.valueOf();

x = s.split('') //this will split a string into an array

x = s.split(' ') //this will split a string into an array

console.log(x);