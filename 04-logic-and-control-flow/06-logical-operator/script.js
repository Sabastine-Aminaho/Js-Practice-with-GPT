console.log(10 < 20 && 30 > 20 && 40 > 20); //this will evaluate to true because the statement is  true
console.log(10 < 20 && 30 < 20 && 40 > 20)  //This will be false because one of them is not true.

// && is true when only all the parameters are true

console.log(10 < 20 || 10 < 20)  //This will be true because one of them is true.

// || is true even when only one of the statement is true

// && - Will return first falsy value or the last value
let b;

b = 10 && 20;
console.log(b) // result will be 20

b = 10 && 20 && 90;
console.log(b); // result is 90

b = 10 && 0 && 90;
console.log(b); // result is 0 because 0 is a falsy value

b = 10 && '' && 0 && 90;
console.log(b); // result is empty because '' is a falsy value


// EXAMPLE FOR WHEN TO USE THIS
const posts = ['Post 1', 'Post 2'];
posts.length > 0 && console.log(posts[0]); // this will help remove the undefine if the array is initially empty



// || - Will return first truthy value or the last value
let a;

a = 10 || 20;
a = 0 || 30;
a = 0 || null || '' || undefined //  since they are all falsy, they it returns the last value which in this case is undefined.

console.log(a);


//the ?? - nullish coalescing operator provides a concise way to handle default values for cases where a value might be null or undefined. close to the OR sign but different.
// The key distinction between the nullish coalescing operator (??) and the logical OR operator (||) is in how they handle "falsy" values other than null and undefined. The nullish coalescing operator only considers null and undefined as "nullish" and returns the right-hand side in those cases. In contrast, the logical OR operator considers any falsy value as a reason to choose the right-hand side.

// ?? - returns the right side operand when the left side is null or undefined

let c;

c = 10 ?? 20;
c = null ?? 39;
c = undefined ?? 40;

console.log(c);