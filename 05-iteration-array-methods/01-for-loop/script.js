//A for loop goes like this

// for ([initialExpression]; [conditionExpression]; incrementExpression) {
//   statement;
// }


// Let us create a for loop
// for (let i = 0; i <= 10; i++)  {
//   console.log('Number ' + i);
// };
// you can not use const in a loop. instead, use let


// for (let i = 0; i <= 10; i++)  {
//   if (i === 8) {
//     console.log('8 is my best number back in school');
//   }
//   else {
//     console.log('Number ' + i);
//   }
// }; // do this when you want the if condition result to replace the exact param

// NEST LOOPS
// for (let i = 0; i <= 10; i++) {
//   console.log('Number ' + i);

//   for (let j = 0; j <= 3; j++) {
//     console.log(`${i} * ${j} = ${i * j}`)
//   }
// }


// LOOP THROUGH AN ARRAY
const city = ['Benin', 'Uyo', 'Abuja', 'Ikeja', 'Port Harcourt', 'Lekki'];

for (let i = 0; i < city.length; i++) {
  if (i === 4) {
    console.log(city[i] + ' is the most beautiful')
  } else {
    console.log(city[i]);  
  }
}