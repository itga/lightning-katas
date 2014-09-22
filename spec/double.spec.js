'use strict';

var expect = require('chai').expect,
    double = require('../src/double');

describe('"double" function', function () {

    it('doubles the number passed to it', function () {
        expect(double(1)).to.equal(2);
    });

    // exercise 1: should work with a list of numbers, i.e. double ([1, 2, 3]) -> [2, 4, 6]
    it('doubles an array of numbers passed to it', function () {
        expect(double([1,2,3])).to.deep.equal([2,4,6]);
    });

    // exercise 2: should work with a variable list of arguments, i.e. double (1, 2, 3) -> [2, 4, 6]
    it('doubles multiple inputs of numbers passed to it', function () {
        expect(double(1,2,3)).to.deep.equal([2,4,6]);
    });

    // exercise 3: what should happen when the argument is not a valid? use some defaults? throw an error?
    it('returns "Invalid Input" if input it not a number', function () {
        [ [], {}, true, false, null, undefined ].forEach(function (invalid_example){
            expect(double(invalid_example)).to.deep.equal("Invalid Input");
        });
    });

});