const fs = require('fs');
const https = require('https');

console.log('Starting async operations...');

var a = 10;
var b = 20;

https.get('https://dummyjson.com/products/1', (res) => {
    console.log('HTTP GET request initiated...');

}).on('error', (e) => {
    console.error(`Error during HTTP GET request: ${e.message}`);
});

setTimeout(() => {
    console.log('Timeout completed after 5 seconds');
}, 5000);

fs.readFile("./file.txt", 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }   
    console.log('File read successfully:', data);
});

function multiply(x, y) {
    return x * y;
}

var result = multiply(a, b);
console.log(`The result of multiplying ${a} and ${b} is ${result}`);
console.log('End of async operations script.');
