function sayHello() {
    console.log('Hello World');
}

sayHello();

function add(num1, num2) { // these in the form of a prop are called params
    console.log(num1 + num2);
}

add(4, 6); // while these values are called arguments
//  note, anything under return wont run if the return is successful
function subtract(num1, num2) {
    return num1 - num2;

    console.log('good job tango') // this will not run
}

const result = subtract(10,  2);
console.log(result);
