//  FizzBuzz Challenge

// Question
// Print/log the number from 1 to 100
// For multiples of three print 'Fizz' instead of the number
// For multiples of 5 print 'Buzz' instead of the number
// For numbers which are multiples of both three and five print 'FizzBuzz'

for (let i = 1; i <= 100; i++) {
  
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);  
  }

}