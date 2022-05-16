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

const convertTile = function (number) {
  return number.map(defineClass);
};

const createHead = function () {
  const link = '<link rel="stylesheet" href="styles.css">';
  return createTag('head', link);
};

const classifiedDiv = function (content, className) {
  return ['<div class="', className, '">\n', content, '</div>\n'].join('');
};

const createTiles = function (tileData) {
  const convertedTile = convertTile(tileData);
  const tilesBlock = convertedTile.reduce(classifiedDiv, '');
  return classifiedDiv(tilesBlock, 'tiles-holder');
};

const creeateBody = function (data) {
  const divs = data.map(createTiles).join('');
  return createTag('body', classifiedDiv(divs, 'tiles-assembler'));
};

const createHTML = function (data) {
  const head = createHead();
  const body = creeateBody(data);
  const htmlBlock = createTag('html', head + body);
  fs.writeFileSync('./tiles.html', htmlBlock, 'utf8');
};

exports.createHTML = createHTML;
