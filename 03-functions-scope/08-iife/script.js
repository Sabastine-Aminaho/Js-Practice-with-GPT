(function() {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello chief');
  hello();
})();

// we can pass in parameters also

(function(name) {
  console.log('hello ' + name);
})('Mike');

