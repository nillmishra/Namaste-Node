const fs = require('fs');
const a = 10;

setImmediate(() => {
    console.log('setImmediate callback executed');
}
);

Promise.resolve().then(() => {
    console.log('Promise resolved');
});

fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
}
);

setTimeout(() => {
    console.log('setTimeout callback executed after 0 ms');
}, 0);

process.nextTick(() => {
    console.log('process.nextTick callback executed');
});

function printA(){
    console.log('Value of a:', a);
}
printA();
console.log('End of event-loop-2.js script.');
