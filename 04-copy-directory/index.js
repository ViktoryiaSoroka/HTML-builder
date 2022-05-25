const fs = require('fs');
const path = require('path');

const origDirect = path.join(__dirname, 'files');
const copyDirect = path.join(__dirname, 'files-copy');

async function copyDir() {
    await fs.promises.rm(copyDirect, {recursive: true, force: true});
    fs.mkdir(copyDirect, {recursive: true}, (err) => {
      if (err) throw err;
    });
    fs.readdir(origDirect, {withFileTypes: true}, (err, files) => {
      if (err) throw err;
      files.forEach(file => {
        if(file.isFile()) {
          fs.copyFile(path.join(origDirect, file.name), path.join(copyDirect, file.name), (err) => {
            if (err) throw err;
          });
        } else if(file.isDirectory()) {
          fs.mkdir(path.join(copyDirect, file.name), {recursive: true}, (err) => {
            if (err) throw err;
          });
          copyFile(path.join(origDirect, file.name), path.join(copyDirect, file.name));
        }
      });
    });
  }

copyDir();