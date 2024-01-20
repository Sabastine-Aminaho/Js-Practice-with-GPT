if (true) {
  console.log('This is true');
}

if (false) {
  console.log('This is not true'); // thi will not run because it is false
}

const x = 100;
const y = 200;

if (x < y) {
  console.log(` ${x} is less than ${y} `)
}

if (x > y) {
  console.log(` ${x} is greater than ${y} `)
} else {
  console.log(`${x} is less than ${y} `)
}


let temperature = 25;

if (temperature > 30) {
  console.log('It\'s a hot day!');
} else {
  console.log('The weather is pleasant.');
}
