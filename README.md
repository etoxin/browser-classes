# browser-classes

Adds browser classes to document body. For better cross browser SCSS styling.

This library adds the current browser and version to the `<body>` as a class to the site.
 
Once run your `<body>` will have the following class added.

```html
<body class="browser-firefox-65">
<body class="browser-ie-10">
```

## Installation

```
npm i --save browserclasses
```
    
## Usage

```js
import BrowserClasses from 'browserclasses';
new BrowserClasses();
```

## SCSS Usage

Use the `@at-root` method when using with SCSS

```scss
.myClass {
    color: red;
    @at-root .browser-ie-10 {
        color: blue
    }
}
```

This will target Internet Explorer 10 with `browser-ie-10` added to the body tag.

```html
<body class="browser-ie-10">
```

## Javascript usage

The below method can test for Internet Explorer 9

```js
if (document.body.classList.contains('browser-ie-9')) {
    // fix
}
```

## Browser only targeting

To target only a certain browser not by version use the following syntax.

##### CSS

```css
body[class^="browser-firefox"] {
    color: red;
}
```
    
## Browser Support

Currently this library identifies the following browsers:
- Chrome
- Internet Explorer 
- Edge
- Safari
- Firefox

## Example class names for browsers

Below arte some examples of the classes that will be generated for the browsers.

| Browser              | Class                               |
|----------------------|-------------------------------------|
| Internet Explorer 10 | `<body class="browser-ie-10">`      |
| Edge 12              | `<body class="browser-edge-12">`    |
| Google Chrome 50     | `<body class="browser-chrome-50">`  |
| Firefox 60           | `<body class="browser-firefox-60">` |
| Safari 11            | `<body class="browser-safari-1">`   |

