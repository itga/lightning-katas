'use strict';
var _ = require('lodash');

module.exports = function (test) {
    return function(numbers) {
        numbers = _.flatten(arguments);
        return _.filter(numbers, test);
    };
};

module.exports.even = function(number) {
    return number % 2 == 0;
};

module.exports.odd = function(number) {
    return number % 2 != 0;
};