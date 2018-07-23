import BrowserClasses from '../browser-classes.js';

test('expects isString to return true when passed a string', () => {
    expect(BrowserClasses.isString('My String')).toBe(true);
});