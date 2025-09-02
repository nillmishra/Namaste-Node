const crypto = require('crypto');


console.log('Starting blocking operations...');
var a = 10;
var b = 20;

// Blocking version

crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
console.log('First PBKDF2 operation completed');

// Non-blocking version for comparison
crypto.pbkdf2(  'password', 'salt', 100000, 512, 'sha512', () => {
    console.log('Second PBKDF2 operation completed');
}
);


function multiply(x, y) {
    return x * y;
}

var result = multiply(a, b);

console.log(`The result of multiplying ${a} and ${b} is ${result}`);
console.log('End of blocking operations script.');
