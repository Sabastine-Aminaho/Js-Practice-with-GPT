let x;

const person = {
    name: 'John Doe',
    age: 23,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
// you can also add an array to an object
    hobbies: ['music', 'sports'],
};

x = person.name; // we use dot notation to access a property which is the most used way;
//  we can also use bracket to access the property but it has to be in a string like the example bellow;
x = person['name'];
x = person['age'];
x = person['isAdmin'];

//  let access an object inside an object we can use;
x = person.address.state; // OR
x = person['address']['city'];

//to access an array in an Object, we use the below;
x = person.hobbies[0]; // OR
x = person['hobbies'][1];

//we can update an object by passing it in directly like the below;
person.name = ' Faith Kikachukwu Aminaho';
person['isAdmin'] = false;
person.address.city = 'Igbanke';
person['address']['street'] = 'Olihia St, Idumuodin';
person['address']['state'] = 'Edo State';
person['isAdmin'] = true;
x = person.hobbies['1'];
console.log(person);

console.log(x);