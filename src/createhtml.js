/* eslint-disable no-magic-numbers */
const fs = require('fs');

const createTag = function (tag, content) {
  return ['<', tag, '>\n', content, '</', tag, '>\n'].join('');
};

const defineClass = function (num) {
  const classObj = {
    '1': 'square',
    '2': 'circle',
    '3': 'curved-corner',
    '4': 'rombus'
  };
  return classObj[num];
};

const convertToClass = function (numbers) {
  return numbers.map(defineClass);
};

const createHead = function () {
  const link = '<link rel="stylesheet" href="styles.css">';
  const meta = '\n<meta http-equiv="refresh" content="0.5"/>';
  return createTag('head', link + meta);
};

const classifiedDiv = function (content, className) {
  return ['<div class="', className, '">\n', content, '</div>\n'].join('');
};

const createTiles = function (tilesData) {
  const convertedTile = convertToClass(tilesData);
  const tilesBlock = convertedTile.reduce(classifiedDiv, '');
  return classifiedDiv(tilesBlock, 'tiles-holder');
};

const createBody = function (data) {
  const divs = data.map(createTiles).join('');
  return createTag('body', classifiedDiv(divs, 'tiles-assembler'));
};

const createHTML = function (data) {
  const head = createHead();
  const body = createBody(data);
  const htmlBlock = createTag('html', head + body);
  fs.writeFileSync('./tiles.html', htmlBlock, 'utf8');
};

const createHtmlMain = function (dataFile) {
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  createHTML(data);
};

exports.createHTMLMain = createHtmlMain;
exports.createTag = createTag;
exports.defineClass = defineClass;
exports.convertToClass = convertToClass;
