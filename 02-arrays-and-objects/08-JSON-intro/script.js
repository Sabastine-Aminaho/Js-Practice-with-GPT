const post = {
    id: 1,
    title: 'post one',
    body: 'this is the first post of the year 2024',
}

// Convert to JSON string
const str = JSON.stringify(post); // stringify coverts an object to JSON file

// Parse JSON
const obj = JSON.parse(str); //parse convert a JSON string to object

console.log(obj);