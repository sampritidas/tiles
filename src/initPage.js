const lib = require('./createhtml.js');
const createHTML = lib.createHTMLMain;
const TWO = 2;

const runInitPage = function (dataFile) {
  createHTML(dataFile);
};

runInitPage(...process.argv.slice(TWO));
