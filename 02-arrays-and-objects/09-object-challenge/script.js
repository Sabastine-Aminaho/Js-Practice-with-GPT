// Create an array of objects called library. Add 3 objects with the property of title, author, status. title and author should be string and status should be another object with property of own, reading, and read which should all be a boolean. for all status, own to true, reading to false and read to false
const library = [
    {
        title: 'The Book',
        author: 'Here are some books in the library',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: ' The Last say',
        author: 'this is the last day for ain and you should come',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Helped',
        author: 'this person needs help please',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

//  Step 2
// you finished reading all of the books. Set the read value for all of them to true. Do not edit the initial object. set the value using dot notation
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
// Destructure the title from the first book and rename the variable to first book
const { title: firstBook } = library[0];

// Step 4
// turn the library object into a JSON string
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);


