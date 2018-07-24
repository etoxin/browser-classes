let assert = require('chai').assert;
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


describe('BrowserClasses.detectBrowser()', () => {
    it('expects windows chrome 60 to return chrome-60', () => {
        assert.equal(BrowserClasses.detectBrowser('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36'), 'chrome-60');
    });

    it('expects android chrome 63 to return chrome-63', () => {
        assert.equal(BrowserClasses.detectBrowser('Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G Build/MMB29T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.83 Mobile Safari/537.36'), 'chrome-63');
    });

    it('expects macOS chrome 61 to return chrome-61', () => {
        assert.equal(BrowserClasses.detectBrowser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'), 'chrome-61');
    });

    it('expects windows internet explorer 10 to return ie-10', () => {
        assert.equal(BrowserClasses.detectBrowser('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)'), 'ie-10');
    });

    it('expects windows internet explorer 11 to return ie-11', () => {
        assert.equal(BrowserClasses.detectBrowser('Mozilla/5.0 (Windows NT 6.3; Trident/7.0; .NET4.0E; .NET4.0C; rv:11.0) like Gecko'), 'ie-11');
    });

    it('expects windows internet explorer 11 (compatibility mode / ie7 mode) to return ie-11', () => {
        assert.equal(BrowserClasses.detectBrowser('Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.3; Trident/7.0; .NET4.0E; .NET4.0C)'), 'ie-7');
    });
});