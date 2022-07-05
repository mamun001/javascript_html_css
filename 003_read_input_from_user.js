

//  to run this: run:  node filename.js

const readline = require('readline');

console.log(`Enter a string`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  console.log(`Received: ${input}`);
});
