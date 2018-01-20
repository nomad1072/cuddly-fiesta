'use strict';

var _person = require('./person.js');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('app.js is running');
console.log('doddi and muddi');

console.log((0, _person.isAdult)(21));
console.log((0, _person.canDrink)(21));
console.log((0, _person2.default)(100, 80));
