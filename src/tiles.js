/* eslint-disable no-console */
/* eslint-disable max-statements */
const fs = require('fs');

const lib = require('./createhtml.js');
const createHTML = lib.createHTMLMain;
const ONE = 1;
const TWO = 2;

const topElement = function (stack) {
  return stack[stack.length - ONE];
};

const tiles = function (block, firstChoice, secondChoice, dataFile) {
  // console.log(block, firstChoice, secondChoice, dataFile);
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  const topOfFirst = topElement(data[firstChoice - ONE]);
  const topOfSecond = topElement(data[secondChoice - ONE]);
  
  if (topOfFirst !== topOfSecond) {
    console.log('Pattern not matched');
    return;
  }

  data[firstChoice - ONE].pop();
  data[secondChoice - ONE].pop();
  fs.writeFileSync(dataFile, JSON.stringify(data), 'utf8');
  createHTML(dataFile);
};

// console.log(...process.argv.slice(TWO));
tiles(...process.argv.slice(TWO));
