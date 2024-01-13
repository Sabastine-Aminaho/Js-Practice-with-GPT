let x;

// Array Literal
const numbers = [22, 32, 23, 55, 44];
const mixed = [12, 'Hello', true, null]


// Array constructor

const fruits = new Array("apple", 'grape', 'mango');

x = numbers[0];
// fruit = fruits.length

x = numbers[0] + numbers[3];

x = `My favorite fruit is aa ${fruits[2]}`;

// if you want to change a value in an array, using the below method as an example.
//pick it by using the index number
fruits[1] = 'banana';

// to add to the array, simply and the next index that is not yet occupied
// for example, we only have maximum of 2 index available. now lets add another fruit by using index 3 that is not yet available
fruits[3] = 'cucumber';
fruits[4] = 'strawberry';

// But the best way to do it is set the index to the length. see below example;
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';
fruits[fruits.length] = 'pear';


x = fruits;

console.log(x);
