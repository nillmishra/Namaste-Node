const { calculateMultiply, calculateSum } = require('./calculate');
const data = require('./data.json');

const name = 'Nill';
console.log(`Hello, ${name}`);

console.log(`The result of adding 2 and 3 is ${calculateSum(2, 3)}`);
console.log(`The result of multiplying 2 and 3 is ${calculateMultiply(2, 3)}`);
console.log('Data from JSON file:', data);