'use strict';

module.exports = function (fizzbuzz) {
    return fizzbuzz % 3 == 0 && fizzbuzz % 5 == 0 ?
               'FizzBuzz'
                : fizzbuzz % 3 == 0
                    ? 'Fizz'
                    : fizzbuzz % 5 == 0
                        ? 'Buzz'
                        : 'Not a FizzBuzz'
};