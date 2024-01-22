const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 8, 10];  

// const evenNum = numbers.filter(number =>  number % 2 === 0);

// const oddNum = numbers.filter(number => number % 2 >  0);

// console.log(evenNum, oddNum)

// the above is the filter method. let use forEach

// const evenNum = [];
// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNum.push(number)
//   }
// });

// console.log(evenNum)


// in the below, lets get only retail companies
const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

// const getRetail = companies.filter(item => item.category === 'Retail' );


//  then to filter for companies that  start in 1981 or 1992 and also a retail company is below
const getRetailStart = companies.filter(item => item.category === 'Retail' && (item.start === 1981 || item.start === 1992) );


// Let GET companies that lasted 10 years or more
const longCompanies = companies.filter(item => item.end - item.start >= 10);

console.log(longCompanies)


