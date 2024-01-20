// ||= assign the right side only when the left side is a falsy value
// let us take an example
let a = null;

if (!a) {
    a = 10;
}
//  the above if statement is same thing as
a = a || 10; 
// which is same as
a ||= 10; 

console.log(a);


// && =assign the right side only when the left side is a truthy value
// let us take an example
let b = 10;

if (b) {
    b = 20;
}  
//  the above if statement is same thing as
b = b && 20; 
// which is same as
b &&= 20; 

console.log(b);


// ??= assign the right side only when the left side is a null or undefined
// let us take an example
let c = null;

if (c === null || c === undefined) {
    c = 20;
}  
//  the above if statement is same thing as
// c = c ?? 20; 
// which is same as
// c ??= 20; 
 
console.log(c);

