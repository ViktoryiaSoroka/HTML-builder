const fs = require('fs');
const path = require('path');

function copyDir() {
fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true}, (err) => {
    if (err) throw err;
});
fs.readdir(path.join(__dirname, 'files-copy'), {withFileTypes: true}, (err, files) => {
    if (err) throw err;
    for (let file of files) {
fs.unlink(path.join(path.join((__dirname, 'files-copy'), file.name), (err) => {
    if (err) throw err;
})
)}
fs.readdir(path.join(__dirname, 'files'), {withFileTypes: true}, (err, files) => {
    if (err) throw err;
    for (let file of files) {
        fs.copyFile(path.join(path.join(__dirname, 'files'), file.name), path.join(path.join(__dirname, 'files-copy'), file.name), (err) => {
            if (err) throw err;
        })
    }
})
}
);
};

copyDir();