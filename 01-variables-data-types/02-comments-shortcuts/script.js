//This is a single line of code

console.log(100);

console.log('Hello World ');

console.log(100, 'well done', true);

const x = 200;

console.log(x);

console.error('Alert'); // this show red indicating danger

console.warn('Warning'); // this shows yellow indicating warning sign

console.table({ name: 'Willy', email: 'willy23@gmail.com', phoneNumber: '08083220000' }); // This make the data set a table form

console.group("simple"); // this group another console or item below it as a dropdown arrow
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd(); // this always end the console group

const styles = 'padding: 10px; background-color: green; color: white';

console.log('%cHello Chief!', styles)