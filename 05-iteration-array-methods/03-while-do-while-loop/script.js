// you have to declare the index first. it mos be that way for a while loop
let i;

i = 0;

// while (i <= 20) {
//   console.log('Number ' + i);
//   i++;
// }

// NOTE: Please use a for loop when the amount of looping is know and use a while loop when it is unknown


// using while loop to loop over an array

// const books = ['The Forbiden Fruit ', 'The Lost Cause', 'Woman King', 'Teen Elephant'];

// while (i < books.length) {
//   console.log(books[i]);
//   i++;
// }

//  NESTING WHILE LOOPS

// while (i <= 20) {
//   console.log('Number ' + i);

//   let j = 1;
//   while (j <= 5) {
//   console.log(`${i} * ${j} = ${i * j}`);
//   j++;
// }
//   i++;
// }

//  the Do-While loop

do {
  console.log('Page ' + i);
  i++;
} while (i <= 15);