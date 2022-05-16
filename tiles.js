const fs = require('fs');

const createHTML = require('./createhtml.js').createHTML;

const topElement = function (stack) {
  return stack[stack.length - 1];
};

const tiles = function (block, firstChoice, secondChoice) {
  const data = JSON.parse(fs.readFileSync('./data.txt', 'utf8'));
  const topOfFirst = topElement(data[firstChoice - 1]);
  const topOfSecond = topElement(data[secondChoice - 1]);
  if (topOfFirst !== topOfSecond) {
    console.log('Pattern not matched');
    return 1;
  }
  data[firstChoice-1].pop();
  data[secondChoice-1].pop();
  createHTML(data);
  fs.writeFileSync('data.txt', JSON.stringify(data), 'utf8');
};

tiles(...process.argv.slice(2));
