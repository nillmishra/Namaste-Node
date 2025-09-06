const fs = require('fs');
const crypto = require('crypto');

crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log('PBKDF2 operation completed 1');
}
);

fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
}
);

crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log('PBKDF2 operation completed 2');
}
);

console.log('End of thread-pool.js script.');