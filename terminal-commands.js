const fs = require('fs');


module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');
    console.log(filesToString);
  });
  };

  module.exports.touch = (newFileName) => {
    fs.writeFile(newFileName, 'newFileContent', (err) => {
      if (err) {
        throw err;
      }
      else {
        console.log('File Created: ' + newFileName);
      }
      })
  };

  module.exports.mkdir = (newDirName) => {
    fs.mkdir(newDirName, (err) => {
      if (err) {
        throw err;
      }
      else {
        console.log('Directory Created');
      }
    })
  };
