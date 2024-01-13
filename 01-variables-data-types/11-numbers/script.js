let x;

const num = new Number(20);

x = num.toString();

x = num.toString().length; // to see the length of a number always add toString

x = num.toFixed(2); // this is to add a fixed decimal point and it turns the number to a string

x = num.toPrecision(2); //this only return the exact number as commanded

x = num.toExponential(2);

x = num.toLocaleString('ar-EG'); // This will show whow it is written in the language it is set to

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
x = Number.MAX_SAFE_INTEGER;
x = Number.MIN_SAFE_INTEGER;

console.log(x)
