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
    setTimeout(() => console.log('2nd setTimeout inside readFile'), 0);

    process.nextTick(() => {
        console.log('process.nextTick inside readFile');
    }
    );
    setImmediate(() => {
        console.log('setImmediate inside readFile');
    });

    console.log('File content:', data);
});

process.nextTick(() => {
    console.log('process.nextTick callback executed');
});

console.log('End of event-loop-3.js script.');  