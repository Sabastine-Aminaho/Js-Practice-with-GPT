let x;

// I learnt the below first
const arr = [22, 57, 89, 100, 76];

// arr.push(190); // push method is used to add to the last element

// arr.pop() // pop method is used to remove the last element
    
// arr.unshift(45); // this method is used to add to the beginning

// arr.shift(); //this method is used to remove the beginning element

// arr.reverse(); //this method is used to reverse the whole set of arrays

// x = arr.includes(57); // this help you get if the value is within the array.it gives a boolean response

x = arr.indexOf(89); // this gives the index of the element in the array

x = arr.indexOf(985); // if the value passed in is not in the array, the index is going to be a negative

// x = arr.slice(1); // this shows where an array should start

x = arr.slice(1, 5); //will show from the index 0 to the number 4 index

// x = arr.splice(2, 4); // this works like slice only that you are basically plucking the rest out of the array. and this changes the initial array.

// x = arr.splice(3, 1); // this is used to cut of the index 3 element and not cutting of the next element. if i replace 1 with 2, it will cut the element with index 4;

x = arr.splice(1, 3).reverse().toString().charAt(0);

console.log(x);