const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 2; // Increase thread pool size to 5

crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log('PBKDF2 operation completed 1');
}
);

crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log('PBKDF2 operation completed 2');
}
);

crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log('PBKDF2 operation completed 3');
}   
);

crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log('PBKDF2 operation completed 4');
}
);

crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log('PBKDF2 operation completed 5');
}
);
console.log('End of thread-pool-exp.js script.');