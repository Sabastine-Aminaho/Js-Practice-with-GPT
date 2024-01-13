let x;
let d = new Date();

x = d.toString();

x = d.getTime();

x = d.valueOf();

x = d.getFullYear(); // give only the year

x = d.getMonth(); // this will get the month

x = d.getDate(); // this will get the day of the month

x = d.getDay(); // this give the day of the week

x = d.getHours(); // to get hours of the day

x = d.getMinutes(); // to get minutes

x = d.getSeconds();  // to get seconds

x = d.getMilliseconds(); // get milliseconds

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;


//Get time format for different time zones
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('en-NG').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { month: 'short' }).format(d); // shortens the name of the month
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); // spell the name of the month in full
x = Intl.DateTimeFormat('default', { month: '2-digit' }).format(d); //make the moth in 2 digits
x = Intl.DateTimeFormat('default', { month: 'narrow' }).format(d); // make the name of the month just one letter
x = Intl.DateTimeFormat('default', { month: 'numeric' }).format(d); // make it one numeric


//when trying to get the local time, you do not have to use the api Intl. instead use the below
x = d.toLocaleString('default', { month: 'short' });
x = d.toLocaleString('default', { month: 'narrow' });
x = d.toLocaleString('default', { month: '2-digit' });
x = d.toLocaleString('default', { month: 'numeric' });
x = d.toLocaleString('default', { month: 'long' });


x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
});

console.log(x);
