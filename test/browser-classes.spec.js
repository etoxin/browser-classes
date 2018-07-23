var assert = require('assert');
import BrowserClasses from '../browser-classes.js';

describe('BrowserClasses.isString()', function () {
    it('expects isString to return true when passed a string', () => {
        assert.equal(BrowserClasses.isString('My String'), true);
    });

    it('expects isString to return false when passed a number', () => {
        assert.equal(BrowserClasses.isString(12345), false);
    });

    it('expects isString to return false when passed a function', () => {
        assert.equal(BrowserClasses.isString(function () {return true}), false);
    });

    it('expects isString to return false when passed a object', () => {
        assert.equal(BrowserClasses.isString({test: true}), false);
    });

    it('expects isString to return false when passed a boolean', () => {
        assert.equal(BrowserClasses.isString(true), false);
    });
});
