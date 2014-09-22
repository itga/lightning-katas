'use strict';
var _ = require('lodash');

module.exports = function () {
    return _.reduce(_.toArray(arguments), function(summary, number){
        return _.isNumber(number) ? summary + number : 0;
    }, 0);
};