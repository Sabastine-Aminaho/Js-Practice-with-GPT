const d = new Date(1, 19, 2024, 6, 0, 6);
const hour = d.getHours();

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 16) {
  console.log('Good Afternoon');
} else if (hour < 19) {
  console.log('Good Evening');
} else {
  console.log('Good Night');
}


// Nested if
if (hour < 12) {
  console.log('Good Morning');
  if (hour === 6) {
    console.log('Wake Up')
  }
} else if (hour < 16) {
  console.log('Good Afternoon');
} else if (hour < 19) {
  console.log('Good Evening');
} else {
  console.log('Good Night');
  if (hour >= 20) {
    console.log('Zzzzzzzz')
  }
}


// Multiple Conditions

if (hour >= 8 && hour <= 16) {
  console.log('It is work time')
} else if (hour === 6 || hour === 19) {
  console.log('Brush your teeth')
} else {
  console.log('It is not work time')
}