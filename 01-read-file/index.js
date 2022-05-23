const fs = require('fs');
const path = require('path');
const readStream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');

readStream.on('data', function(chunck) {
    console.log(chunck);
})

readStream.on('error', function(err) {
    console.log(err);
})
