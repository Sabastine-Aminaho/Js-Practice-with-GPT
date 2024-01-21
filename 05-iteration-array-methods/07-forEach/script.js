const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__)


// socials.forEach(function (item) {
//   console.log(item)


// OR

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr))


// it can be a function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);


// Let do forEach for array objects
const socialObj = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
];

socialObj.forEach((item) => console.log(item.url))