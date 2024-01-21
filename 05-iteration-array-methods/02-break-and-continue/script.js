// BREAK
for (let i = 0; i <= 30; i++) {
  if (i === 20 ) {
    console.log('Breaking...');
    break;
  }

  console.log(i);
}

// CONTINUE
for (let i = 0; i <= 30; i++) {
  if (i === 20 ) {
    console.log('Skipping 20...');
    continue;              // this works like just adding the console.log statement below to an else statement
  }

  console.log(i);
}