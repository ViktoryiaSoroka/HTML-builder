const fs = require('fs');
const path = require('path');

const styles = path.join(__dirname, 'styles');
const writer = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));

fs.readdir(styles, {withFileTypes: true}, (err, val) => {
    if (err) throw err;
    for (let file of val)
    if (path.extname(file.name) === '.css') {
      let reader = fs.createReadStream(path.join(__dirname, 'styles', file.name), 'utf-8');
      reader.on('data', chunk => writer.write(chunk));
    }
});