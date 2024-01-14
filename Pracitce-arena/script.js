const city = ['london', 'aba', 'england'];
const family = ['Maynard', 'Nicholas', ' Faith'];

// city[3] = 'aberdeen';

// city[city.length] = 'scotland';
let x;
// x = city.push(family)

x = [...city, ...family];

console.log(x);