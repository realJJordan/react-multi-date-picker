"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("react"));function t(){return(t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var n=["value","stringDate","stringDates","placeholder","handleValueChange","separator","openCalendar","className","type","children"];exports.default=function(e){var l=e.value;e.stringDate,e.stringDates;var o=e.placeholder;e.handleValueChange,e.separator;var u=e.openCalendar,c=e.className,s=void 0===c?"rmdp-button":c;e.type;var i=e.children,p=a(e,n),f=i||l||o||"click to select";return r.default.createElement("button",t({onClick:u,className:s},p),f)};
