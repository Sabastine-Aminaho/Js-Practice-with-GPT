let d;

d = new Date(); // this Date is always an object though it can be turned into s string like the example below

d = d.toString();

d = new Date(1997, 1, 16, 14, 54, 27); 


d = new Date('1997-02-06T12:30:00'); // Another format


d = new Date('05/02/2023 12:30:00'); // Another format

document.getElementById('demo').innerHTML = `${d.getFullYear()}:${d.getDate()}`;


// Timestamps

let t;

t = Date.now();

t = new Date();

t = t.getTime();
t = t.valueOf();

t = new Date(1705142940580);

t = Math.floor(Date.now() / 1000); // dividing by 1000  changes it from milli-second to seconds

 

// console.log(d, typeof d);
console.log(t, typeof t);