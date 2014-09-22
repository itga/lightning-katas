'use strict';
var _ = require('lodash');

module.exports = function () {
    var numbers = arguments.length === 1 ? arguments[0] : _.flatten(arguments);

    return _.isArray(numbers) && numbers.length > 1
        ? _.map(numbers, function (number) {
                return number * 2;
            })
        : _.isNumber(numbers) && _.isFinite(numbers)
            ? numbers * 2
            : "Invalid Input";
};
