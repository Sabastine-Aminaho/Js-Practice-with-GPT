let x;

// you can create an object by using object constructor
const todo = new Object();

todo.id = 1;
todo.name = ' Buy Milk';
todo.completed = false;


x = todo;

const person = {
    address: {
        coords: {
            lat: 42.398,
            lng: -75.3345,
        },
    },
};

x = person.address.coords.lat;
x = person['address']['coords']['lat'];


// Spread operator method
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 }; // this is easy to use though

// let try object assign method
const obj4 = Object.assign({}, obj1, obj2); // to use this, make sure you add an empty object before adding the objects you want to spread out as one object

const todos = [
    { id: 1, name: 'Buy me a milk' },
    { id: 2, name: 'pick of kids from school' },
    { id: 3, name: 'pickup trash' },
];

x = todos[0].name;

// if you want to get all the the keys in an object and put those into an array we can use oblect key
x = Object.keys(todo);

//to find te length, we do the keys first just like below
x = Object.keys(todo).length;

// to get the values of the array, just pass in valueOf
x = Object.values(todo);

// to check the array of the key value pairs, use the below;
x = Object.entries(todo);

x = todo.hasOwnProperty('nna');

console.log(x);   