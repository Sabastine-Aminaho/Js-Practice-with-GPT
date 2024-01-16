const firstName = 'John';
const lastName = 'Doe';
const age = 28;

// const person = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
// }

// as long as the object name is the same as the value declared, you do not have to do it like above.
//do it like below;

const person = {
    firstName,
    lastName,
    age,
}


console.log(person.age);

// DESTRUCTURING  OBJECTS
const todo = {
    id: 1,
    title: 'Take a trash',
    user: {
        name: 'mike',
    }
}

const {
    id,
    title,
    user: { name }
} = todo;

console.log(id, title, name);

// DESTRUCTURING  ARRAYS
const numbers = [22, 24, 65, 8, 9, 755, 45,];
// const [first, second, third] = numbers;

//to get the rest arrays, use what is called the rest operator
const [first, second, third, ...rest] = numbers;

console.log(first, second, third, rest);


