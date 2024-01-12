// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age)

// Variable Naming Conventions
// - only letters, numbers, underscores and dollar signs
//  Cannot start with a number

//  Multi-word formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
    score = score + 1;
}

console.log(score)


const arr = [1, 2];

arr.push(3, 4, 5);
console.log(arr);

const person = {
    name: 'Willy'
};

person.name = 'Brad';
person.email = 'abc@mail.com';

console.table(person)

document.getElementById('demo').innerHTML = person.name


