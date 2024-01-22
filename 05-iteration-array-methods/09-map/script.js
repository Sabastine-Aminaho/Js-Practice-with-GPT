const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((item) => item * 2);

// console.log(doubleNumbers);

// Same with forEach

const doubleNumbers2 = [];

numbers.forEach((item) => {
  doubleNumbers2.push(item * 2);
});

// console.log(doubleNumbers2);



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


// Create an array of company names

const companyNames = companies.map((item) => item.name);

// console.log(companyNames);


const companyNamesCategory = companies.map((item) => {
  return {
    name: item.name,
    category: item.category
  }
} );

// console.log(companyNamesCategory);

// Create an array of the length of each company in years
const companyYears = companies.map((item) => item.end - item.start);

// console.log(companyYears);


// Create an array of object with the name and the length of each company in years
const companyInfo = companies.map((item) => {
  return {
    name: item.name,
    length: item.end - item.start + ' Years'
  }
});

console.log(companyInfo);


