const fs = require('fs');
const a = 10;

setImmediate(() => {
    console.log('setImmediate callback executed');
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

function printA(){
    console.log('Value of a:', a);
}

printA();

console.log('End of event-loop-1.js script.');
