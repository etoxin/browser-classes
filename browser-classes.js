/**
 * Browser Classes
 * @class
 * @see https://github.com/etoxin/browser-classes
 */
export default class BrowserClasses {
  /**
   * BrowserClasses constructor.
   *
   * @memberof BrowserClasses
   */
  constructor() {
    BrowserClasses.ready(() =>
      BrowserClasses.setClassOnBody(BrowserClasses.detectBrowser())
    );
  }

  /**
   * Is String
   *
   * @memberof BrowserClasses
   * @since 1.0.0
   * @param {string} x
   * @returns {boolean}
   */
  static isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
  }

  /**
   * Adds a class on `document.body`.
   *
   * @memberof BrowserClasses
   * @since 1.0.0
   * @param {string} browser
   */
  static setClassOnBody(browser) {
    BrowserClasses.isString(browser) &&
    document.body.classList.add(`browser-${browser}`);
  }

  /**
   * Detects the Browser and returns the name
   *
   * @memberof BrowserClasses
   * @since 1.0.0
   * @param {string} uaOverride
   * @returns {string|boolean} String of browser, false when none.
   */
  static detectBrowser(uaOverride) {
    const ua = uaOverride || window.navigator.userAgent;
    switch (true) {
      case /MSIE /.test(ua):
        // IE 10 or older => return version number
        const msie = ua.indexOf("MSIE ");
        return (
          "ie-" + parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10)
        );
      case /Trident/.test(ua):
        // IE 11 => return version number
        let rv = ua.indexOf("rv:");
        return "ie-" + parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
      case /Edge/.test(ua):
        const edge = ua.indexOf("Edge/");
        return (
          "edge-" + parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10)
        );
      case /Firefox/.test(ua):
        // Firefox => return version number
        const firefox = ua.indexOf("Firefox/");
        return (
          "firefox-" +
          parseInt(ua.substring(firefox + 8, ua.indexOf(".", firefox)), 10)
        );
      case /Chrome/.test(ua):
        // Chrome => return version number
        const chrome = ua.indexOf("Chrome/");
        return (
          "chrome-" +
          parseInt(ua.substring(chrome + 7, ua.indexOf(".", chrome)), 10)
        );
      case /Safari/.test(ua):
        // Safari => return version number
        return (
          "safari-" + parseInt(ua.substring(ua.indexOf("Version/") + 8).split(" Safari")[0])
        );
    }

    // other browsers
    return false;
  }

  /**
   * Document Ready Function
   *
   * @since 1.0.0
   * @memberof BrowserClasses
   * @param {function} fn
   */
  static ready(fn) {
    if (
      document.attachEvent
        ? document.readyState === "complete"
        : document.readyState !== "loading"
    ) {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }
}
