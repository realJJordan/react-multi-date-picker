!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Button=t(e.React)}(this,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=["value","stringDate","stringDates","placeholder","handleValueChange","separator","openCalendar","className","type","children"];return function(e){var t=e.value;e.stringDate,e.stringDates;var l=e.placeholder;e.handleValueChange,e.separator;var i=e.openCalendar,u=e.className,c=void 0===u?"rmdp-button":u;e.type;var f=e.children,s=a(e,o),p=f||t||l||"click to select";return r.default.createElement("button",n({onClick:i,className:c},s),p)}}));
