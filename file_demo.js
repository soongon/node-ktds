const fs = require('fs');

console.log('start..');

fs.readFile('hello.js', 'utf-8', (err, data) => {
    console.log(data);
});

console.log('end of code..');
