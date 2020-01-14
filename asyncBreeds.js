// asyncBreeds.js
const fs = require('fs');
// let fileData = '';

const breedDetailsFromFile = function(breed, test) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    console.log(typeof data)
    if (!error) test(data);
    if (error) test()
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const newFileData = function(data) {
  let fileData = data;
  console.log('Return Value: ' + fileData);
}

const bombay = breedDetailsFromFile('Bombay', newFileData);

module.exports = breedDetailsFromFile;
// we try to get the return value
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!