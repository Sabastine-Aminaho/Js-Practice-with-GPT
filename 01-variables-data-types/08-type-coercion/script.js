let x;

x = 5 + '5'; // 55 string

x = 5 + Number('5'); //10 number

x = 5 * '5'; // 25 number

x = 5 + null;

x = Number(true); // true is always equal to 1
x = Number(false); // false is equal to 0 

x = 5 + true + true;
x = 5 + false;

console.log(x, typeof x)