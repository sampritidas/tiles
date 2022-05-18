/* eslint-disable max-len */
const { createTag, defineClass, convertToClass} = require('../src/createhtml.js');
const assert = require('assert');

describe ('createTag', () => {
  it('should give tag with content', () => {
    const exp = '<div>\nnice</div>\n';
    return assert.strictEqual(createTag('div', 'nice'), exp);
  });
});

describe ('defineClass', () => {
  it('Should return circle if given number is 2', function () {
    return assert.strictEqual(defineClass(2), 'circle');
  });
  it('Should return rombus if given number is 4', function () {
    return assert.strictEqual(defineClass(4), 'rombus');
  });
});

describe('convertTile', () => {
  it('Should return array of classes', function () {
    return assert.equal(JSON.stringify(convertToClass([2, 4])), '["circle","rombus"]');
  });
});
