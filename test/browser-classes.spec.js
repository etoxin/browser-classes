var assert = require('assert');
import BrowserClasses from '../browser-classes.js';

describe('BrowserClasses.isString()', function () {
    it('expects isString to return true when passed a string', function () {
        assert.equal(BrowserClasses.isString('My String'), true);
    });

    it('expects isString to return false when passed a number', function () {
        assert.equal(BrowserClasses.isString(12345), false);
    });

    it('expects isString to return false when passed a function', function () {
        assert.equal(BrowserClasses.isString(function () {return true}), false);
    });

    it('expects isString to return false when passed a object', function () {
        assert.equal(BrowserClasses.isString({test: true}), false);
    });

    it('expects isString to return false when passed a boolean', function () {
        assert.equal(BrowserClasses.isString(true), false);
    });

});
