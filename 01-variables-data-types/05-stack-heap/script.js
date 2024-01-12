// Primitive values are stored on the stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap

const person = {
    name: 'Nelson',
    age: 40,
};

let newName = name;
newName = 'Nakel';

let newPerson = person;
newPerson.name = 'Suleman';


console.log(name, newName);
console.log(person, newPerson);


