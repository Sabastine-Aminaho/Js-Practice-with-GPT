// Nested scope refers to the situation where one scope is enclosed within another. In JavaScript, this commonly occurs when a function is defined inside another function. The inner function has access to its own scope as well as the scope of the outer function. This concept is known as closures.
// Here's an example to illustrate nested scope:

function first() {
  // Outer function scope
  const x = 200;

  function second() {
    // Inner function scope
    const y = 100;
    console.log(x + y); // Access x from the outer scope
  }

  second(); // Call the inner function in the outer function for it to run
}

first(); // finally i call the outer function



if (true) {
  const x = 100;

  if (x === 100) {
    const y = 300;
    console.log( x + y)
  }
}
