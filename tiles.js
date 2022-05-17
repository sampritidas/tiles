/* eslint-disable max-statements */
/* eslint-disable no-console */
const fs = require('fs');

const lib = require('./createhtml.js');
const createHTML = lib.createHTML;
const ONE = 1;
const TWO = 2;

const topElement = function (stack) {
  console.log(stack);
  return stack[stack.length - ONE];
};

const tiles = function (block, firstChoice, secondChoice) {
  const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  console.log(data);
  createHTML(data);
  const topOfFirst = topElement(data[firstChoice - ONE]);
  const topOfSecond = topElement(data[secondChoice - ONE]);
  if (topOfFirst !== topOfSecond) {
    console.log('Pattern not matched');
    return;
  }
  data[firstChoice - ONE].pop();
  data[secondChoice - ONE].pop();
  createHTML(data);
  fs.writeFileSync('data.json', JSON.stringify(data), 'utf8');
};

tiles(...process.argv.slice(TWO));
