// BLOCK SCOPE
// Block scope refers to the area within a pair of curly braces {} where variables are defined using let or const in JavaScript. Unlike variables declared with var, which have function scope, variables declared with let and const have block scope. This means that they are only accessible within the block where they are defined.
const x = 200;

if (true) {
  const y = 50;
  console.log(x + y);
};

// console.log(x + y); // will show error because y has not been defined on a global scope

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); // will show error because i has not been defined on a global scope
// but when the element is declared by var, it acts differently.
// check the example below
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

// console.log(a); // will give an error
// console.log(b); // will give an error
console.log(c); // will be successful which means that var is not a block scope

// const a = 500;: This line declares a constant variable a with a value of 500. Constants declared with const have block scope, which means they are only accessible within the block in which they are defined. In this case, a can only be used within the if block.
// let b = 600;: This line declares a variable b with a value of 600. Variables declared with let also have block scope, so b is only accessible within the if block.
// var c = 700;: This line declares a variable c with a value of 700. However, unlike const and let, variables declared with var have function scope rather than block scope. In this specific case, c will be accessible not only within the if block but also outside it, in the broader function or global scope. If this code is part of a function, c would be accessible anywhere within that function.
// It's important to note that the use of var is considered somewhat outdated in modern JavaScript, especially when compared to const and let. const and let provide block-scoping, which often leads to more predictable and maintainable code. If possible, it's recommended to use const and let over var for variable declarations.


// var is a function scope. which means, if it is declared in a function, it is only accessible in that function