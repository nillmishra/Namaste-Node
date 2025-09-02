const fs = require('fs');

setImmediate(() => {
    console.log('setImmediate callback executed');
});

setTimeout(() => {
    console.log('setTimeout callback executed after 0 ms');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise resolved');
});

fs.readFile('file.txt', 'utf-8', (err, data) => {
    process.nextTick(() => {
        console.log('process.nextTick inside readFile');
    }
    );
    console.log('File content:', data);
});

process.nextTick(() => {
    process.nextTick(() => {
        console.log('Nested process.nextTick executed');
    });
    console.log('process.nextTick callback executed');
});

console.log('End of event-loop-4.js script.');
