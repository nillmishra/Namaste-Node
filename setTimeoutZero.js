console.log('Starting setTimeout with zero delay...');

var a = 10;
var b = 20;

setTimeout(() => {
    console.log('setTimeout with zero delay executed');
}, 0);

setTimeout(() => {
    console.log('setTimeout with 3 seconds delay executed');
}, 3000);

function multiply(x, y) {
    return x * y;
}

var result = multiply(a, b);
console.log(`The result of multiplying ${a} and ${b} is ${result}`);
console.log('End of setTimeout with zero delay script.');
