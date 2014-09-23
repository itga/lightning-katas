'use strict';

var expect    = require('chai').expect,
    configure = require('../src/configure');

describe('configure', function () {

    it('returns a set of sensible defaults', function() {
        expect(configure()).to.deep.equal({ user: 'user', password: 'password', url: 'http://github.com' });
    });

    // exercise 1: allow the user to override some defaults,
    //             i.e. configure({ user: 'bob', password: 'secret' }) -> { user: 'bob', password: 'secret', url: 'http://github.com' }
    //
    //             hint: you can use lodash :-)
    it('returns a set of override values', function() {
        expect(configure({ user: 'bob', password: 'secret' })).to.deep.equal({ user: 'bob', password: 'secret', url: 'http://github.com' });
    });

    // exercise 2: try both _.merge and _.defaults
    it('returns a set of override values and defaults', function() {
        expect(configure({ user: 'bob', password: 'secret' })).to.deep.equal({ user: 'bob', password: 'secret', url: 'http://github.com' });
    });

    // exercise 3: can you do it without lodash?
    it('returns a set of override values and defaults', function() {
        expect(configure({ user: 'bob', password: 'secret' })).to.deep.equal({ user: 'bob', password: 'secret', url: 'http://github.com' });
    });

});