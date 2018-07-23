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
   * @returns {string} String of browser
   */
  static detectBrowser(uaOverride) {
    const ua = uaOverride || window.navigator.userAgent;

    const msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      // IE 10 or older => return version number
      return (
        "ie-" + parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10)
      );
    }

    const trident = ua.indexOf("Trident/");
    if (trident > 0) {
      // IE 11 => return version number
      let rv = ua.indexOf("rv:");
      return "ie-" + parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
    }

    const edge = ua.indexOf("Edge/");
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return (
        "edge-" + parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10)
      );
    }

    const firefox = ua.indexOf("Firefox/");
    if (firefox > 0) {
      // Firefox => return version number
      return (
        "firefox-" +
        parseInt(ua.substring(firefox + 8, ua.indexOf(".", firefox)), 10)
      );
    }

    const chrome = ua.indexOf("Chrome/");
    if (chrome > 0) {
      // Chrome => return version number
      return (
        "chrome-" +
        parseInt(ua.substring(chrome + 7, ua.indexOf(".", chrome)), 10)
      );
    }

    const safari = ua.indexOf("Safari/");
    if (safari > 0) {
      // Safari => return version number
      return (
        "safari-" + parseInt(ua.substring(ua.indexOf("OS ") + 3).split("_")[0])
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
