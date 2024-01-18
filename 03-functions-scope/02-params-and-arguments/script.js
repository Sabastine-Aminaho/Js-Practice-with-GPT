function registerUser(user = 'Bot') {
    return user + ' is registered';
}

console.log(registerUser());

// Rest Params
function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total
}

console.log(sum(1, 2, 3, 4, 5, 6, 14, 56));
 
// Object as params
function loginUser(user) {
    return `the user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'John',
};

console.log(loginUser(user));
console.log(
    loginUser({
        id: 2,
        name: 'Sara',
    })
);

// Arrays as params
    function getRandomNum(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);

        const item = arr[randomIndex];

        console.log(item);
    }

getRandomNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  // the above function will give me a random number between 1 and 10;


