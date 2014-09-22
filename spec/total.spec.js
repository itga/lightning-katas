'use strict';

var expect = require('chai').expect,
    total  = require('../src/total');

describe('"total" function', function () {

    it('calculates the total of numbers passed to it', function () {
        expect(total(1, 2)).to.equal(3);
    });

    // exercise 1: should return 0 by default, i.e. total() -> 0
    it('returns "0" as default', function () {
        expect(total()).to.equal(0);
    });

    // exercise 2: should also work with a single number, i.e. total(5) -> 5
    it('still works although a single number input', function () {
        expect(total(5)).to.equal(5);
    });

    // exercise 3: should work with a variable list of arguments, i.e. total (1, 2, 3) -> 6
    it('works multiple input numbers', function () {
        expect(total(1,2,3)).to.equal(6);
    });

    // exercise 4: what should happen when the argument is not a valid? use some defaults? throw an error?
    it('returns the default values(0), if it is invalid input', function () {
        [null, undefined, {}, [], true, false, '', "a"].forEach(function(invalid_example) {
            expect(total(invalid_example)).to.equal(0, invalid_example);
        });
    });

});