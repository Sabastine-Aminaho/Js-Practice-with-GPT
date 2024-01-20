const age =6;

// Using an if statement
if (age >= 18) {
    console.log('You can vote!');
}
else {
    console.log('You can not vote!');
}

//  let me show you how to make the above simpler to write using a ternary operator

// Using a ternary operator

age >= 18 ? console.log('You can vote!') : console.log('You can not vote!')

//  in the above, the if is ? and the else is :


// Assigning a conditional value to a variable using the ternary operator
const canVote = age >= 18 ? true : false;
// it does ot have  to be a boolean you pass in
const canVote2 = age >= 18 ? 'YOU CAN VOTE' : 'YOU CANNOT VOTE';

console.log(canVote);
console.log(canVote2);


// Multiple statements
const auth = true;
name = 'Johnson';
// let redirect;

// if (auth) {
//     alert(`Mr ${name}, Welcome to your dashboard`);
//     redirect = '/dashboard';
// } else {
//     alert(`Invalid Login Details`);
//     redirect = '/login';
// }


// we can do the above using the ternary operator below
// const redirect = auth ? (alert(`Mr ${name}, Welcome to your dashboard`), '/dashboard' ): (alert(`Invalid Login Details`), '/login');

// console.log(redirect);

// if in my conditional statement, there is only if, then wee can use the and operator &

auth ? console.log('Welcome to the dashboard') : null;
// the above is same as 
auth && console.log('Welcome to the dashboard'); // without the null value as the else
