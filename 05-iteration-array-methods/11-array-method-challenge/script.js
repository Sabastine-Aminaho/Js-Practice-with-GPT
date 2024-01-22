//  Challenge

// create a new array called `capitalizeWords with the words array with the first letter of each word capitalized

//  Solution

const words = ['school', 'church', 'offering', 'tithe', 'vein'];

// const capitalizeWords = words.map((word) => word[0].toUpperCase() + word.substring(1));

// OR
// const capitalizeWords = words.map((word) => {
//   return word[0].toUpperCase() + word.substring(1);
// });

// OR
const capitalizeWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});


console.log(capitalizeWords);