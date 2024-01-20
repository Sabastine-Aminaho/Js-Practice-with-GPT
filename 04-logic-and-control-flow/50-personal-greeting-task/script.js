function greet() {
  var currentHour = new Date().getHours();
  var greetingMessage = '';

  if (currentHour >= 6 && currentHour < 12) {
    greetingMessage = 'Good Morning Emperor!';
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = 'Good Afternoon Boss!';
  } else {
    greetingMessage = 'Good Evening Chief!';
  }

  // Get the element where the greeting will be displayed
  var greetingElement = document.getElementById('greeting');  
  // Clear existing content
  greetingElement.textContent = '';

  // Simulate typing effect
  function typeEffect(index) {
    if (index < greetingMessage.length) {
      // Add the next character to the content
      greetingElement.textContent += greetingMessage.charAt(index);
      // Schedule the next character after a delay (e.g., 100 milliseconds)
      setTimeout(function() {
        typeEffect(index + 1);
      }, 100);
    }
  }

  // Start the typing effect with the first character
  typeEffect(0);

  // Set up an interval to update the greeting every 10 seconds
  setInterval(function() {
    // Clear existing content before starting the typing effect again
    greetingElement.textContent = '';
    // Start the typing effect with the first character
    typeEffect(0);
  }, 6000);
}

// Call the greet function on page load
window.onload = greet;
