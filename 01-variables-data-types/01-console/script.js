
console.log(100);

console.log('Hello World ');

console.log(100, 'welldone', true);

const x = 200;

console.log(x);

console.error('Alert'); 

console.warn('Warning'); 

console.table({ name: 'Willy', email: 'willy23@gmail.com', phoneNumber: '08083220000' }); 

console.group("simple");
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd(); 

const styles = 'padding: 10px; background-color: green; color: white';

console.log('%cHello Chief!', styles)