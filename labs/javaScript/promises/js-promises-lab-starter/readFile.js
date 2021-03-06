//Using strict mode
'use strict';

//fs allows node to parse a file and get it's text values
const fs = require('fs');

//process.argv is an array of what we have written in the command line
//process.argv[2] is the file we want to be read.
let inFile = process.argv[2];

const readFilePromise = new Promise((resolve, reject) => {
  fs.readFile(inFile, {encoding: 'utf8'}, (err, content) => {
    if (err) {
      reject(err);
    }
    resolve(content);
  });
});

readFilePromise
  .then(data => data.split('\n'))
  .then(lines => {
    lines.pop()
    lines.forEach(function(line) {
      console.log('Hello, ' + line + '!');
    });
  })
  .catch(err => {
    console.log("There was an error!");
    console.log(err);
  });