const fs = require('fs');
const path = require('path');
const {stdout, stdin} = process;

const newText = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8');

stdout.write('Hello! Write your text\n');
stdin.on('data', data => {
if (data.toString().trim() === 'exit') process.exit();
    newText.write(data.toString());       
})

process.on('exit', () => {
    stdout.write('\nBye!\n');
    process.exit();
  });

process.on('SIGINT', () => {
    process.exit()
});