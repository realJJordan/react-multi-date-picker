"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-element-popper"),r=require("react-date-object");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e),o=n(t),d=n(r);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],d=!0,i=!1;try{for(r=r.call(e);!(d=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);d=!0);}catch(e){i=!0,a=e}finally{try{d||null==r.return||r.return()}finally{if(i)throw a}}return o}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=m(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,d=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return d=e.done,e},e:function(e){i=!0,o=e},f:function(){try{d||null==r.return||r.return()}finally{if(i)throw o}}}}function b(e){return Array.isArray(e)}function g(t){var r=t.state.date,n=r.calendar,o=r.locale,i=t.customWeekDays,l=t.weekStartDayIndex,c=t.displayWeekNumbers,u=t.weekNumber,s=e.useMemo((function(){var e=i;return b(e)&&e.length>=7?(e.length=7,e=e.map((function(e){return b(e)&e.length>1?e=e[1]:b(e)&&(e=e[0]),e}))):e=new d.default({year:1,calendar:n,locale:o}).weekDays.map((function(e){return e.shortName})),e}),[n,o,i]);return s=f(s).slice(l).concat(f(s).splice(0,l)),a.default.createElement("div",{className:"rmdp-week"},c&&a.default.createElement("div",{className:"rmdp-week-day"},u),s.map((function(e,t){return a.default.createElement("div",{key:t,className:"rmdp-week-day"},e)})))}function v(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!e||!t)return!1;if(e.year===t.year){if(n)return!0;if(e.monthIndex===t.monthIndex)return!!r||e.day===t.day}}function x(e,t,r){var n=r.multiple,a=r.range,o=r.selectedDate,i=r.onlyMonthPicker,l=r.onlyYearPicker,c=r.format,u=r.focused,s=r.weekPicker;e.setFormat(c);var p=new d.default(e);return[o=n?function(){var r=o.filter((function(t){return!v(e,t,i,l)}));r.length===o.length?r.push(p):p=r.find((function(e){return v(e,u)}));t&&r.sort((function(e,t){return e-t}));return r}():a?function(){if(s)return[new d.default(p).toFirstOfWeek(),new d.default(p).toLastOfWeek()];if(2===o.length||0===o.length)return[p];if(1===o.length)return[o[0],p].sort((function(e,t){return e-t}))}():p,p]}function w(e,t,r){var n=t[0],a=t[1],o=[];return 1===t.length?v(e,n,r)&&o.push("rmdp-range"):2===t.length&&(e.toDays()>=n.toDays()&&e.toDays()<=a.toDays()&&o.push("rmdp-range"),v(e,n,r)&&o.push("start"),v(e,a,r)&&o.push("end")),o.join(" ")}function k(t){var r=t.state,n=t.onChange,o=t.showOtherDays,i=void 0!==o&&o,s=t.mapDays,f=t.onlyShowInRangeDates,m=t.customWeekDays,h=t.sort,y=t.numberOfMonths,b=t.isRTL,k=t.weekStartDayIndex,D=t.handleFocusedDate,O=t.hideWeekDays,C=t.fullYear,P=p(t.monthAndYears,1)[0],E=t.displayWeekNumbers,N=t.weekNumber,S=void 0===N?"":N,M=e.useRef({}),I=r.today,Y=r.minDate,j=r.maxDate,L=r.range,R=r.date,A=r.selectedDate,F=r.onlyMonthPicker,W=r.onlyYearPicker,z=!F&&!W;M.current.date=R;var T=e.useMemo((function(){return z?function(e,t,r,n){if(!e)return[];for(var a=[],o=0;o<r;o++){var i=(e=new d.default(e).toFirstOfMonth()).monthIndex,l=[];e.toFirstOfWeek().add(n,"day"),e.monthIndex===i&&e.day>1&&e.subtract(7,"days");for(var c=0;c<6;c++){for(var u=[],s=0;s<7;s++)u.push({date:new d.default(e),day:e.format("D"),current:e.monthIndex===i}),e.day+=1;if(l.push(u),c>2&&e.monthIndex!==i&&!t)break}a.push(l)}return a}(M.current.date,i,y,k):[]}),[R.monthIndex,R.year,R.calendar,R.locale,z,i,y,k]);return z&&a.default.createElement("div",{className:"rmdp-day-picker ".concat(C?"rmdp-full-year":""),style:{display:C?"grid":"flex"}},T.map((function(e,t){return a.default.createElement("div",{key:t,style:c({},b?"marginLeft":"marginRight",t+(C?0:1)<y?"10px":"")},C&&a.default.createElement("div",{className:"rmdp-month-name"},P[t]),!O&&a.default.createElement(g,{state:r,customWeekDays:m,weekStartDayIndex:k,displayWeekNumbers:E,weekNumber:S}),e.map((function(e,o){return a.default.createElement("div",{key:o,className:"rmdp-week"},E&&a.default.createElement("div",{className:"rmdp-day rmdp-disabled"},a.default.createElement("span",null,e[0].date.format("WW"))),e.map((function(e,o){var c=function(e){if(!e.current&&!i)return{};var t={};return s.forEach((function(n){var a,o=n({date:e.date,today:I,currentMonth:r.date.month,selectedDate:r.selectedDate,isSameDate:v});(null===(a=o)||void 0===a?void 0:a.constructor)!==Object&&(o={}),(o.disabled||o.hidden)&&(e.disabled=!0),o.hidden&&(e.hidden=!0),t=l(l({},t),o)})),delete t.disabled,delete t.hidden,t}(e={date:e.date,day:e.day,current:e.current}),m=V(e)&&!e.disabled,b="".concat(m?"sd":""),g=c.children;m&&(b="".concat(b," ").concat(c.className||"")),delete c.className,delete c.children;var k=function(e,t){var r=["rmdp-day"],n=e.date,a=e.hidden,o=e.current;if(!V(e)||a)r.push("rmdp-day-hidden");else{(Y&&n<Y||j&&n>j||e.disabled)&&(r.push("rmdp-disabled"),e.disabled||(e.disabled=!0)),o||r.push("rmdp-deactive");var d=t>1&&o||1===t;e.disabled&&f||(v(n,I)&&r.push("rmdp-today"),i=n,[].concat(A).some((function(e){return v(e,i)}))&&d&&!L&&r.push("rmdp-selected")),L&&!e.disabled&&d&&r.push(w(n,A))}var i;return r.join(" ")}(e,y);return(e.hidden||e.disabled)&&(b=b.replace("sd","")),a.default.createElement("div",{key:o,className:k,onClick:function(){V(e)&&!e.disabled&&function(e,t,a){var o,i,c,u=e.date,s=e.current,f=r.selectedDate,m=r.focused,y=r.date,b=y,g=b.hour,v=b.minute,w=b.second;u.set({hour:(null===(o=f)||void 0===o?void 0:o.hour)||g,minute:(null===(i=f)||void 0===i?void 0:i.minute)||v,second:(null===(c=f)||void 0===c?void 0:c.second)||w}),1!==a||s?a>1&&!s&&(0===t&&u<y&&(y=new d.default(y).toFirstOfMonth()),t>0&&u.monthIndex>y.monthIndex+t&&t+1===a&&(y=new d.default(y).toFirstOfMonth().add(1,"month"))):y=new d.default(y).toFirstOfMonth();var k=p(x(u,h,r),2);f=k[0],m=k[1],n(f,l(l({},r),{},{date:y,focused:m,selectedDate:f})),D(m,u)}(e,t,y)}},a.default.createElement("span",u({className:b},c),V(e)&&!e.hidden?null!=g?g:e.day:""))})))})))})));function V(e){return!!e.current||i}}function D(e){var t=e.direction,r=e.onClick,n=e.disabled;return a.default.createElement("span",{className:"rmdp-arrow-container ".concat(t," ").concat(n?"disabled":""),onClick:r},a.default.createElement("i",{className:"rmdp-arrow"}))}function O(t){var r=t.state,n=t.setState,o=t.disableYearPicker,d=t.disableMonthPicker,i=t.buttons,c=t.renderButton,u=t.handleMonthChange,s=t.disabled,f=t.hideMonth,m=t.hideYear,h=t.isRTL,y=t.fullYear,b=p(t.monthAndYears,2),g=b[0],v=b[1],x={},w=r.date,k=r.onlyMonthPicker,O=r.onlyYearPicker,C=r.mustShowYearPicker,P=r.minDate,E=r.maxDate,N=r.year,S=r.today,M=P&&w.year<=P.year&&P.monthIndex>w.monthIndex-1,I=E&&w.year>=E.year&&E.monthIndex<w.monthIndex+1,Y=S.year+7;if(Y-=12*Math.floor((Y-N)/12),(f||y)&&m&&!i)return null;if((f&&m||O&&m||i&&m)&&(x.minHeight="36px"),(k||y)&&(P&&P.year>=w.year&&(M=!0),E&&E.year<=w.year&&(I=!0)),C||O){var j=Y-11;M=P&&P.year>j,I=E&&E.year<Y}return s&&(M=!0,I=!0),a.default.createElement("div",{className:"rmdp-header"},a.default.createElement("div",{style:{position:"relative",display:"flex"}},i&&L("left"),y?a.default.createElement("div",{className:"rmdp-header-values",style:x},!m&&w.format("YYYY")):g.map((function(e,t){return a.default.createElement("div",{key:t,className:"rmdp-header-values",style:x},!f&&a.default.createElement("span",{style:{cursor:s||d||k?"default":"pointer"},onClick:function(){return!d&&A("mustShowMonthPicker")}},e,!m&&(h?"،":",")),!m&&a.default.createElement("span",{style:{cursor:s||o||O?"default":"pointer"},onClick:function(){return!o&&A("mustShowYearPicker")}},v[t]))})),i&&L("right")));function L(t){var r=function(){return R("right"===t?1:-1)},n="left"===t&&M||"right"===t&&I;return c instanceof Function?c(t,r,n):e.isValidElement(c)?e.cloneElement(c,{direction:t,handleClick:r,disabled:n}):a.default.createElement(D,{direction:"rmdp-".concat(t),onClick:r,disabled:n})}function R(e){s||e<0&&M||e>0&&I||(y?w.year+=e:C||O?(N+=12*e,e<0&&P&&N<P.year&&(N=P.year),e>0&&E&&N>E.year&&(N=E.year)):(w.toFirstOfMonth(),k?w.year+=e:(w.month+=e,u(w))),n(l(l({},r),{},{date:w,year:N})))}function A(e){if(!s){var t={mustShowMonthPicker:!1,mustShowYearPicker:!1};t[e]=!r[e],n(l(l({},r),t))}}}function C(e){return b(e)||(e=[]),JSON.stringify(e)}function P(t){var r=t.state,n=t.onChange,o=t.customMonths,i=t.sort,c=t.handleMonthChange,u=t.handleFocusedDate,s=r.date,f=r.today,m=r.minDate,h=r.maxDate,y=r.calendar,g=r.locale,k=r.onlyMonthPicker,D=r.onlyYearPicker,O=r.range,P=r.onlyShowInRangeDates,E=(r.mustShowMonthPicker||k)&&!D;o=o&&C(o);var N=e.useMemo((function(){var e=o&&JSON.parse(o),t=[],n=0,a=new d.default({calendar:y,locale:g,format:r.date._format,year:r.date.year,month:1,day:1});b(e)&&e.length>=12?(e.length=12,e=e.map((function(e){return b(e)?e[0]:e}))):e=a.locale.months.map((function(e){return p(e,1)[0]}));for(var i=0;i<4;i++){for(var l=[],c=0;c<3;c++)l.push({date:new d.default(a),name:e[n]}),n++,a.add(1,"month");t.push(l)}return t}),[y,g,o,r.date.year,r.date._format]);return a.default.createElement("div",{className:"".concat(k?"only ":"","rmdp-month-picker"),style:{display:E?"block":"none"}},N.map((function(e,t){return a.default.createElement("div",{key:t,className:"rmdp-ym"},e.map((function(e,t){var r=e.date,n=e.name;return a.default.createElement("div",{key:t,className:M(r),onClick:function(){return S(r)}},a.default.createElement("span",{className:k?"sd":""},n))})))})));function S(e){var t=r.selectedDate,a=r.focused,o=e.year,d=e.monthIndex;if(!(m&&o<=m.year&&d<m.monthIndex||h&&o>=h.year&&d>h.monthIndex)){if(s.setMonth(d+1),k){var f=p(x(e,i,r),2);t=f[0],a=f[1]}else c(s);n(k?t:void 0,l(l({},r),{},{date:s,focused:a,selectedDate:t,mustShowMonthPicker:!1})),k&&u(a,e)}}function M(e){var t=["rmdp-day"],n=e.year,a=e.monthIndex,o=r.selectedDate;if((m&&(n<m.year||n===m.year&&a<m.monthIndex)||h&&(n>h.year||n===h.year&&a>h.monthIndex))&&t.push("rmdp-disabled"),!t.includes("rmdp-disabled")||!P)return v(f,e,!0)&&t.push("rmdp-today"),k?O?t.push(w(e,o,!0)):[].concat(o).some((function(t){return v(t,e,!0)}))&&t.push("rmdp-selected"):s.monthIndex===a&&t.push("rmdp-selected"),t.join(" ")}}function E(e,t){return e.replace(/[0-9]/g,(function(e){return t[e]}))}function N(t){var r=t.state,n=t.onChange,o=t.sort,i=t.handleFocusedDate,c=t.onYearChange,u=r.date,s=r.today,f=r.minDate,m=r.maxDate,h=r.onlyYearPicker,y=r.range,b=r.onlyShowInRangeDates,g=r.year,v=r.mustShowYearPicker||h,w=u.digits,k=s.year-4;k-=12*Math.ceil((k-g)/12);var D=e.useMemo((function(){for(var e=[],t=k,r=0;r<4;r++){for(var n=[],a=0;a<3;a++)n.push(t),t++;e.push(n)}return e}),[k]);return a.default.createElement("div",{className:"".concat(h?"only ":"","rmdp-year-picker"),style:{display:v?"block":"none"}},D.map((function(e,t){return a.default.createElement("div",{key:t,className:"rmdp-ym"},e.map((function(e,t){return a.default.createElement("div",{key:t,className:O(e),onClick:function(){return function(e){if(C(e))return;var t=new d.default(r.date).setYear(e),a=r.selectedDate,u=r.focused;if(h){var s=p(x(t,o,r),2);a=s[0],u=s[1]}else f&&t.monthIndex<f.monthIndex?t=t.setMonth(f.monthIndex+1):m&&t.monthIndex>m.monthIndex&&(t=t.setMonth(m.monthIndex+1)),null==c||c(t);n(h?a:void 0,l(l({},r),{},{date:t,focused:u,selectedDate:a,mustShowYearPicker:!1})),h&&i(u,t)}(e)}},a.default.createElement("span",{className:h?"sd":""},E(e.toString(),w)))})))})));function O(e){var t=["rmdp-day"],n=r.date,a=r.selectedDate;if(C(e)&&t.push("rmdp-disabled"),!t.includes("rmdp-disabled")||!b){if(s.year===e&&t.push("rmdp-today"),h)if(y){var o=a[0],d=a[1];1===a.length?e===o.year&&t.push("rmdp-range"):2===a.length&&(e>=o.year&&e<=d.year&&t.push("rmdp-range"),e===o.year&&t.push("start"),e===d.year&&t.push("end"))}else[].concat(a).some((function(t){return t&&t.year===e}))&&t.push("rmdp-selected");else e===n.year&&t.push("rmdp-selected");return t.join(" ")}}function C(e){return f&&e<f.year||m&&e>m.year}}function S(e,t,r){return r||(e?"MM/YYYY":t?"YYYY":"YYYY/MM/DD")}function M(e,t){return e instanceof d.default?e.setCalendar(t):e=new d.default({date:e,calendar:t}),e}function I(e){"_self"in a.default.createElement("div")&&console.warn(e.join("\n"))}var Y=new d.default,j=Y.calendar,L=Y.locale;function R(e,t){return e&&e.constructor!==Object&&(I(A("calendar")),e=void 0),t&&t.constructor!==Object&&(I(A("locale")),t=void 0),[e||j,t||L]}function A(e){return["".concat(e," must be an object"),"https://shahabyazdi.github.io/react-multi-date-picker/calendars/"]}function F(e){return e&&e.name?e.name.split("_")[1]:""}function W(e){return["fa","ar"].includes(F(e))}function z(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}z(".rmdp-wrapper{background-color:#fff;border-radius:5px;direction:ltr;text-align:center;width:max-content}.rmdp-shadow{box-shadow:0 0 5px #8798ad}.rmdp-border{border:1px solid #cfd8e2}.rmdp-calendar{height:max-content;padding:4px}.rmdp-border-top{border-top:1px solid #cfd8e2}.rmdp-border-bottom{border-bottom:1px solid #cfd8e2}.rmdp-border-left{border-left:1px solid #cfd8e2}.rmdp-border-right{border-right:1px solid #cfd8e2}.rmdp-week,.rmdp-ym{display:flex;justify-content:space-between}.rmdp-ym{height:25%}.rmdp-day,.rmdp-week-day{color:#000;cursor:pointer;height:34px;position:relative;width:34px}.rmdp-week-day{color:#0074d9;cursor:default;font-size:13px;font-weight:500}.rmdp-day span,.rmdp-week-day{display:flex;flex-direction:column;justify-content:center}.rmdp-day span{border-radius:50%;bottom:3px;font-size:14px;left:3px;position:absolute;right:3px;top:3px}.rmdp-day.rmdp-today span{background-color:#7fdbff;color:#fff}.rmdp-day.rmdp-selected span:not(.highlight){background-color:#0074d9;box-shadow:0 0 3px #8798ad;color:#fff}.rmdp-day.rmdp-deactive,.rmdp-day.rmdp-disabled{color:#8798ad}.rmdp-day.rmdp-deactive.rmdp-selected span{background-color:#4ca6f5;box-shadow:0 0 3px #bac5d3}.rmdp-ym .rmdp-day{flex:1;margin:auto}.rmdp-ym .rmdp-day span{border-radius:12px;padding:2px 0}.rmdp-range{background-color:#0074d9;box-shadow:0 0 3px #8798ad;color:#fff}.rmdp-range.start{border-bottom-left-radius:50%;border-top-left-radius:50%}.rmdp-range.end{border-bottom-right-radius:50%;border-top-right-radius:50%}.rmdp-ym .rmdp-range.start{border-bottom-left-radius:15px;border-top-left-radius:15px}.rmdp-ym .rmdp-range.end{border-bottom-right-radius:15px;border-top-right-radius:15px}.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover{background-color:#7ea6f0;color:#fff}.rmdp-day-picker{padding:5px}.rmdp-header{font-size:14px;height:38px;line-height:37px;margin-top:5px}.rmdp-month-picker,.rmdp-year-picker{background-color:#fff;border-radius:0 0 5px 5px;bottom:2px;left:2px;position:absolute;right:2px;top:2px}.only.rmdp-month-picker,.only.rmdp-year-picker{height:240px;position:static;width:250px}.rmdp-header-values{color:#000;margin:auto}.rmdp-header-values span{padding:0 0 0 5px}.rmdp-arrow{border:solid #0074d9;border-width:0 2px 2px 0;display:inline-block;height:3px;margin-top:5px;padding:2px;width:3px}.rmdp-right i{margin-right:3px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.rmdp-left i{margin-left:3px;transform:rotate(135deg);-webkit-transform:rotate(135deg)}.rmdp-left,.rmdp-right{position:absolute;top:54%;transform:translateY(-50%)}.rmdp-left{left:0}.rmdp-right{right:0}.rmdp-arrow-container{border-radius:50%;cursor:pointer;display:flex;height:20px;justify-content:center;margin:0 5px;width:20px}.rmdp-arrow-container:hover{background-color:#0074d9;box-shadow:0 0 3px #8798ad}.rmdp-arrow-container:hover .rmdp-arrow{border:solid #fff;border-width:0 2px 2px 0}.rmdp-arrow-container.disabled{cursor:default}.rmdp-arrow-container.disabled:hover{background-color:inherit;box-shadow:inherit}.rmdp-arrow-container.disabled .rmdp-arrow,.rmdp-arrow-container.disabled:hover .rmdp-arrow{border:solid gray;border-width:0 2px 2px 0}.rmdp-rtl{direction:rtl}.rmdp-rtl .rmdp-left i{margin-left:0;margin-right:3px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.rmdp-rtl .rmdp-right i{margin-left:3px;margin-right:0;transform:rotate(135deg);-webkit-transform:rotate(135deg)}.rmdp-rtl .rmdp-right{left:0;right:auto}.rmdp-rtl .rmdp-left{left:auto;right:0}.rmdp-rtl .rmdp-range.start{border-bottom-left-radius:unset;border-bottom-right-radius:50%;border-top-left-radius:unset;border-top-right-radius:50%}.rmdp-rtl .rmdp-range.end{border-bottom-left-radius:50%;border-bottom-right-radius:unset;border-top-left-radius:50%;border-top-right-radius:unset}.rmdp-rtl .rmdp-range.start.end{border-radius:50%}.rmdp-rtl .rmdp-ym .rmdp-range.start{border-bottom-right-radius:15px;border-top-right-radius:15px}.rmdp-rtl .rmdp-ym .rmdp-range.end{border-bottom-left-radius:15px;border-top-left-radius:15px}.rmdp-day-hidden,.rmdp-day.rmdp-disabled{cursor:default}.rmdp-selected .highlight{box-shadow:0 0 3px #8798ad}.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) .highlight-red:hover{background-color:#ff6687}.rmdp-day:not(.rmdp-deactive) .highlight-red{color:#cc0303}.rmdp-day.rmdp-deactive .highlight-red{color:#e08e8e}.rmdp-day.rmdp-selected .highlight-red{background-color:#ea0034;color:#fff}.rmdp-day.rmdp-deactive.rmdp-selected .highlight-red{background-color:#e4b0ba;color:#fff}.rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) .highlight-green:hover{background-color:#4db6ac}.rmdp-day:not(.rmdp-deactive) .highlight-green{color:#00796b}.rmdp-day.rmdp-deactive .highlight-green{color:#7ab3ac}.rmdp-day.rmdp-selected .highlight-green{background-color:#009688;color:#fff}.rmdp-day.rmdp-deactive.rmdp-selected .highlight-green{background-color:#749c98;color:#fff}.rmdp-day-hidden,.rmdp-day-hidden:hover span{background-color:unset;color:transparent}.rmdp-month-name{cursor:default;font-size:14px;margin:3px 0}.rmdp-full-year{grid-template-columns:1fr 1fr 1fr}@media (max-height:450px),(max-width:450px){.rmdp-day,.rmdp-week-day{height:28px;width:28px}.rmdp-day span{font-size:12px;padding-left:.5px}.only.rmdp-month-picker,.only.rmdp-year-picker{height:200px;width:205px}.rmdp-header{height:32px;line-height:32px}.rmdp-header,.rmdp-month-name{font-size:12px}.rmdp-full-year{grid-template-columns:1fr 1fr}}");var T=["datePickerProps","DatePicker"];function V(t,r){var n,o=t.value,i=t.calendar,c=t.locale,f=t.format,m=t.onlyMonthPicker,h=t.onlyYearPicker,y=t.range,g=void 0!==y&&y,v=t.multiple,x=void 0!==v&&v,w=t.className,D=t.weekDays,M=t.months,I=t.children,Y=t.onChange,j=t.showOtherDays,L=t.minDate,A=t.maxDate,F=t.mapDays,z=t.disableMonthPicker,V=t.disableYearPicker,q=t.formattingIgnoreList,K=t.onReady,_=t.onlyShowInRangeDates,U=void 0===_||_,H=t.zIndex,$=void 0===H?100:H,G=t.plugins,Q=void 0===G?[]:G,X=t.sort,Z=t.numberOfMonths,ee=void 0===Z?1:Z,te=t.currentDate,re=t.digits,ne=t.buttons,ae=void 0===ne||ne,oe=t.renderButton,de=t.weekStartDayIndex,ie=void 0===de?0:de,le=t.disableDayPicker,ce=t.onPropsChange,ue=t.onMonthChange,se=t.onYearChange,pe=t.onFocusedDateChange,fe=t.readOnly,me=t.disabled,he=t.hideMonth,ye=t.hideYear,be=t.hideWeekDays,ge=t.shadow,ve=void 0===ge||ge,xe=t.fullYear,we=t.displayWeekNumbers,ke=t.weekNumber,De=t.weekPicker;!te||te instanceof d.default||(console.warn("currentDate must be instance of DateObject"),te=void 0),("number"!=typeof ie||ie<0||ie>6)&&(ie=0),("number"!=typeof ee||ee<1||m||h)&&(ee=1),(x||g||b(o))&&(g||x||(x=!0),x&&g&&(x=!1)),De&&(g=!0,x=!1),xe&&(ee=12,m=!1,h=!1),h&&!he&&(he=!0);var Oe=R(i,c),Ce=p(Oe,2);i=Ce[0],c=Ce[1],f=S(m,h,f),q=C(q),F=[].concat(F).filter(Boolean),Q=[].concat.apply([],Q);var Pe=e.useState({}),Ee=p(Pe,2),Ne=Ee[0],Se=Ee[1],Me={},Ie=e.useRef({mustCallOnReady:!0,currentDate:te});e.useEffect((function(){Se((function(e){var t=Ie.current.currentDate,r=e.date,n=e.selectedDate,a=e.initialValue,u=e.focused,s=e.mustSortDates;function p(e){if(e)return e.calendar.name!==i.name&&e.setCalendar(i),e.locale.name!==c.name&&e.setLocale(c),e._format!==f&&e.setFormat(f),e.digits=re,e.ignoreList=JSON.parse(q),e}function y(e){return new d.default(t||e)}if(o)if(b(n=J(o,i,c,f)))r||(r=y(n[0]));else if(r&&1!==ee){var v=new d.default(r).toFirstOfMonth(),w=new d.default(r).add(ee-1,"months").toLastOfMonth();(n<v||n>w)&&(r=new d.default(n))}else r=y(n);else r||(r=y({calendar:i,locale:c,format:f})),a&&(n=void 0);if([].concat(n).forEach(p),p(r),x||g||b(o)){if(n||(n=[]),b(n)||(n=[n]),g&&n.length>2){var k=n[n.length-1];n=[n[0],k],u=k}x&&X&&!s?(s=!0,n.sort((function(e,t){return e-t}))):g&&n.sort((function(e,t){return e-t}))}else b(n)&&(n=n[n.length-1]);return xe&&r.toFirstOfYear(),delete Ie.current.currentDate,l(l({},e),{},{date:r,selectedDate:n,multiple:x,range:g,onlyMonthPicker:m,onlyYearPicker:h,initialValue:e.initialValue||o,value:o,focused:u,calendar:i,locale:c,format:f,mustSortDates:s,year:r.year,today:e.today||new d.default({calendar:i}),weekPicker:De})}))}),[o,i,c,f,m,h,g,x,X,ee,re,q,xe,De]),e.useEffect((function(){(L||A)&&Se((function(e){var t=e.calendar,r=e.locale,n=e.format,a=p(B(J(o,t,r,n),L,A,t),3),d=a[0],i=a[1],c=a[2];return l(l({},e),{},{inRangeDates:U?d:e.selectedDate,minDate:i,maxDate:c})}))}),[L,A,U,o]),Ne.today&&!Ie.current.isReady&&(Ie.current.isReady=!0),e.useEffect((function(){Ie.current.isReady&&Ie.current.mustCallOnReady&&K instanceof Function&&(Ie.current.mustCallOnReady=!1,K())}),[Ie.current.isReady,K]);var Ye="rmdp-top-class "+Ke(["top","bottom"]),je={top:[],bottom:[],left:[],right:[]},Le=W(null===(n=Ne.date)||void 0===n?void 0:n.locale),Re={state:Ne,setState:Se,onChange:Ve,sort:X,handleFocusedDate:Be,isRTL:Le,fullYear:xe,monthAndYears:He()},Ae=arguments[0],Fe=Ae.datePickerProps,We=Ae.DatePicker,ze=s(Ae,T);return Te(),Ne.today?a.default.createElement("div",{ref:Ue,className:"rmdp-wrapper rmdp-".concat(ve?"shadow":"border"," ").concat(w||""),style:{zIndex:$}},je.top,a.default.createElement("div",{style:{display:"flex"},className:Ye},je.left,!le&&a.default.createElement("div",{className:"rmdp-calendar ".concat(Le?"rmdp-rtl":""," ").concat(Ke(["left","right"]))},a.default.createElement(O,u({},Re,{disableYearPicker:V,disableMonthPicker:z,buttons:ae,renderButton:oe,handleMonthChange:Je,disabled:me,hideMonth:he,hideYear:ye})),a.default.createElement("div",{style:{position:"relative"}},a.default.createElement(k,u({},Re,{showOtherDays:j,mapDays:F,onlyShowInRangeDates:U,customWeekDays:D,numberOfMonths:ee,weekStartDayIndex:ie,hideWeekDays:be,displayWeekNumbers:we,weekNumber:ke})),!xe&&a.default.createElement(a.default.Fragment,null,!z&&a.default.createElement(P,u({},Re,{customMonths:M,handleMonthChange:Je})),!V&&a.default.createElement(N,u({},Re,{onYearChange:se}))))),je.right),je.bottom,I):null;function Te(){if(Ie.current.isReady&&b(Q)){var t={state:Ne,setState:Se,registerListener:_e,calendarProps:ze,datePickerProps:Fe,handleChange:Ve,Calendar:Ie.current.Calendar,DatePicker:We,handlePropsChange:qe,handleFocusedDate:function(e){return Be(e)}},r=function(e){return le?"bottom":e.props.position||"right"};Q.forEach((function(n,a){if("string"!=typeof n.type){var o={},d=r(n);if(je[d]&&!n.props.disabled){for(var i=0;i<Q.length;i++)if("string"!=typeof Q[i].type&&!Q[i].props.disabled){if(4===Object.keys(o).length)break;var c=r(Q[i]);["top","bottom"].includes(d)?(c===d&&i>a&&(o.bottom=!0),c===d&&i<a&&(o.top=!0)):(Ye.includes("border-top")&&(o.top=!0),Ye.includes("border-bottom")&&(o.bottom=!0),c===d&&i>a&&(o.right=!0),c===d&&i<a&&(o.left=!0))}je[d].push(e.cloneElement(n,l({key:a,position:d,nodes:o},t)))}}else"mapDays"===n.type&&F.push(n.fn(t))}))}}function Ve(e,t){if(!me){if(e||null===e){if(fe)return;Me.change&&Me.change.forEach((function(t){return t(e)}))}t&&Se(t),(e||null===e)&&(null==Y||Y(e)),qe({value:e})}}function qe(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!fe&&!me){var r=l(l(l(l({},ze),Fe),t),{},{value:null!==(e=t.value)&&void 0!==e?e:Ne.selectedDate});delete r.onPropsChange,null==ce||ce(r)}}function Be(e,t){fe||me||null==pe||pe(e,t)}function Je(e){null==ue||ue(e)}function Ke(e){return le||!b(Q)?"":Array.from(new Set(Q.map((function(t){if(!t.props)return"";var r=t.props.position||"right";return e.includes(r)&&!t.props.disabled?"rmdp-border-"+r:""})))).join(" ")}function _e(e,t){Me[e]||(Me[e]=[]),Me[e].push(t)}function Ue(e){if(e&&(e.date=Ne.date,e.set=function(e,t){me||Se(l(l({},Ne),{},{date:new d.default(Ne.date.set(e,t))}))}),Ie.current.Calendar=e,r instanceof Function)return r(e);r&&(r.current=e)}function He(){var e=Ne.date;if(!e)return[];for(var t=[],r=[],n=e.digits,a=0;a<ee;a++){var o=void 0,d=e.year,i=e.monthIndex+a;if(i>11&&(i-=12,d++),b(M)&&M.length>=12){var l=M[i];o=b(l)?l[0]:l}else o=e.months[i].name;d=E(d.toString(),n),t.push(o),r.push(d)}return[t,r]}}var q=e.forwardRef(V);function B(e,t,r,n){return t&&(t=M(t,n).set({hour:0,minute:0,second:0,millisecond:0})),r&&(r=M(r,n).set({hour:23,minute:59,second:59,millisecond:999})),b(e)&&(e=e.filter((function(e){return!(t&&e<t)&&!(r&&e>r)}))),[e,t,r]}function J(e,t,r,n){var a=[].concat(e).map((function(e){return e?e instanceof d.default?e:new d.default({date:e,calendar:t,locale:r,format:n}):{}})).filter((function(e){return e.isValid}));return b(e)?a:a[0]}z('.rmdp-visible{visibility:visible}.rmdp-invisible{visibility:hidden}.rmdp-input{border:1px solid #c0c4d6;border-radius:5px;height:22px;margin:1px 0;padding:2px 5px}.rmdp-input:focus{border:1px solid #a4b3c5;box-shadow:0 0 2px #a4b3c5;outline:none!important}.rmdp-button{background-color:#0074d9;border:none;border-radius:5px;color:#fff;cursor:pointer;display:inline-block;padding:7px 16px;text-align:center;text-decoration:none;transition:.3s}.rmdp-button:hover{background-color:#143ac5;transition:.4s}.rmdp-button:disabled{background-color:#8798ad}.rmdp-action-button{border-radius:unset;color:#2682d3;float:right;font-weight:700;margin:15px 10px 15px 0}.rmdp-action-button,.rmdp-action-button:hover{background-color:transparent}.rmdp-ep-arrow{overflow:hidden;will-change:transform}.rmdp-ep-arrow:after{background-color:#fff;content:"";height:12px;position:absolute;transform:rotate(45deg);width:12px}.rmdp-ep-shadow:after{box-shadow:0 0 6px #8798ad}.rmdp-ep-border:after{border:1px solid #cfd8e2}.rmdp-ep-arrow[direction=top]{border-bottom:1px solid #fff}.rmdp-ep-arrow[direction=left]{border-right:1px solid #fff}.rmdp-ep-arrow[direction=right]{border-left:1px solid #fff;margin-left:-1px}.rmdp-ep-arrow[direction=bottom]{border-top:1px solid #fff;margin-top:-1.5px}.rmdp-ep-arrow[direction=top]:after{left:4px;top:5px}.rmdp-ep-arrow[direction=bottom]:after{left:4px;top:-6px}.rmdp-ep-arrow[direction=left]:after{left:5px;top:3px}.rmdp-ep-arrow[direction=right]:after{left:-6px;top:3px}');var K=["value","calendar","locale","format","onlyMonthPicker","onlyYearPicker","onChange","range","multiple","name","id","title","placeholder","required","style","className","inputClass","disabled","render","weekDays","months","children","inputMode","scrollSensitive","hideOnScroll","minDate","maxDate","formattingIgnoreList","containerClassName","calendarPosition","editable","onOpen","onClose","arrowClassName","zIndex","arrow","fixMainPosition","onPositionChange","onPropsChange","digits","readOnly","shadow","onFocusedDateChange","type","weekPicker","mobileLabels","onOpenPickNewDate"];function _(t,r){var n=t.value,i=t.calendar,f=t.locale,m=t.format,h=t.onlyMonthPicker,g=t.onlyYearPicker,v=t.onChange,x=t.range,w=void 0!==x&&x,k=t.multiple,D=void 0!==k&&k,O=t.name,P=t.id,N=t.title,M=t.placeholder,Y=t.required,j=t.style,L=void 0===j?{}:j,A=t.className,z=void 0===A?"":A,T=t.inputClass,V=t.disabled,B=t.render,J=t.weekDays,_=t.months,U=t.children,G=t.inputMode,Q=t.scrollSensitive,X=void 0===Q||Q,Z=t.hideOnScroll,ee=t.minDate,te=t.maxDate,re=t.formattingIgnoreList,ne=t.containerClassName,ae=void 0===ne?"":ne,oe=t.calendarPosition,de=void 0===oe?"bottom-left":oe,ie=t.editable,le=void 0===ie||ie,ce=t.onOpen,ue=t.onClose,se=t.arrowClassName,pe=void 0===se?"":se,fe=t.zIndex,me=void 0===fe?100:fe,he=t.arrow,ye=void 0===he||he,be=t.fixMainPosition,ge=t.onPositionChange,ve=t.onPropsChange,xe=t.digits,we=t.readOnly,ke=t.shadow,De=void 0===ke||ke,Oe=t.onFocusedDateChange,Ce=t.type,Pe=t.weekPicker,Ee=t.mobileLabels,Ne=t.onOpenPickNewDate,Se=void 0===Ne||Ne,Me=s(t,K),Ie=e.useState(),Ye=p(Ie,2),je=Ye[0],Le=Ye[1],Re=e.useState(),Ae=p(Re,2),Fe=Ae[0],We=Ae[1],ze=e.useState(""),Te=p(ze,2),Ve=Te[0],qe=Te[1],Be=e.useState(!1),Je=p(Be,2),Ke=Je[0],_e=Je[1],Ue=e.useState(!1),He=p(Ue,2),$e=He[0],Ge=He[1],Qe=e.useRef(),Xe=e.useRef(),Ze=e.useRef(),et=e.useRef({}),tt=w||Pe?" ~ ":", ",rt=arguments[0],nt=ut(),at=e.useCallback((function(){if(!1!==(null==ue?void 0:ue())){var e=$(Xe);if(e&&e.blur(),et.current.mobile){var t=Ze.current.parentNode.parentNode;t.classList.remove("rmdp-calendar-container-mobile"),t.style.position="absolute",t.style.visibility="hidden"}_e(!1),Ge(!1)}}),[ue]);nt&&!et.current.mobile&&(et.current=l(l({},et.current),{},{mobile:!0})),!nt&&et.current.mobile&&(et.current=l(l({},et.current),{},{mobile:!1})),re=C(re),m=S(h,g,m);var ot=R(i,f),dt=p(ot,2);return i=dt[0],f=dt[1],e.useEffect((function(){function e(e){if(Ke&&!et.current.mobile){var t=[];if([Xe.current,Ze.current].forEach((function(r){!r||r.contains(e.target)||e.target.classList.contains("b-deselect")||t.push(r)})),2===t.length)return at();Ze.current&&Ze.current.contains(e.target)&&(Qe.current.removeTransition(),Qe.current.refreshPosition())}}function t(){Z&&Ke&&at()}return document.addEventListener("click",e,!1),document.addEventListener("scroll",t,!0),function(){document.removeEventListener("click",e,!1),document.removeEventListener("scroll",t,!0)}}),[at,r,Ke,Z]),e.useEffect((function(){var e=n,t=et.current,r=t.date,a=t.initialValue,o=function(){return e[e.length-1]};function c(e){if(e)return e instanceof d.default||(e=new d.default({date:e,calendar:i,locale:f,format:m})),e.calendar!==i&&e.setCalendar(i),e.set({weekDays:J,months:_,digits:xe,locale:f,format:m,ignoreList:JSON.parse(re)}),e}n||a||!r?a&&!n&&(a=void 0):e=r,w||D||b(e)?(b(e)||(e=[e]),e=e.map(c).filter((function(e){return void 0!==e})),w&&e.length>2&&(e=[e[0],o()]),qe(H(e,tt))):(b(e)&&(e=o()),e=c(e),document.activeElement!==$(Xe)&&qe(e?e.format():"")),et.current=l(l({},et.current),{},{date:e,separator:tt,initialValue:a||n}),et.current.mobile&&Qe.current.isOpen?We(e):Le(e)}),[n,i,f,m,w,D,tt,h,g,J,_,xe,re]),e.useEffect((function(){var e=et.current.selection;if(e){var t=$(Xe);t&&(t.setSelectionRange(e,e),et.current.selection=void 0,Qe.current.refreshPosition())}}),[Ve]),(D||w||b(je)||!le)&&(G="none"),a.default.createElement(o.default,u({ref:it,element:lt(),popper:Ke&&ct(),active:!nt&&$e,position:de,arrow:!nt&&ye,fixMainPosition:!X||be,zIndex:me,onChange:!nt&&ge,containerClassName:"rmdp-container ".concat(ae),arrowClassName:["rmdp-ep-arrow","rmdp-ep-".concat(De?"shadow":"border"),z,pe].join(" ")},Me));function it(e){if(e&&(e.openCalendar=function(){return setTimeout((function(){return ft()}),10)},e.closeCalendar=at,e.isOpen=Ke&&$e),Qe.current=e,r instanceof Function)return r(e);r&&(r.current=e)}function lt(){if("string"==typeof Ce&&I(["the type Prop is deprecated.","https://shahabyazdi.github.io/react-multi-date-picker/types/"]),B){var t,r=b(je)||D||w?H(je,tt):Ve;return a.default.createElement("div",{ref:Xe},e.isValidElement(B)?e.cloneElement(B,(c(t={},D||w?"stringDates":"stringDate",r),c(t,"value",r),c(t,"openCalendar",ft),c(t,"handleValueChange",yt),c(t,"locale",f),c(t,"separator",tt),t)):B instanceof Function?B(r,ft,yt,f,tt):null)}return a.default.createElement("input",{ref:Xe,type:"text",name:O,id:P,title:N,required:Y,onFocus:ft,className:T||"rmdp-input",placeholder:M,value:Ve,onChange:yt,style:L,autoComplete:"off",disabled:!!V,inputMode:G||(nt?"none":void 0),readOnly:we})}function ct(){return a.default.createElement(q,u({ref:Ze,value:Fe||je,onChange:ht,range:w,multiple:D,calendar:i,locale:f,format:m,onlyMonthPicker:h,onlyYearPicker:g,className:z+(nt?" rmdp-mobile":""),weekDays:J,months:_,digits:xe,minDate:ee,maxDate:te,formattingIgnoreList:JSON.parse(re),onPropsChange:ve,shadow:De,onReady:bt,DatePicker:Qe.current,datePickerProps:rt,onFocusedDateChange:gt,weekPicker:Pe},Me),U,nt&&st())}function ut(){return"string"==typeof z&&z.includes("rmdp-mobile")}function st(){var e=[].concat.apply([],rt.plugins||[]).some((function(e){var t=e.props;return!(void 0===t?{}:t).disabled}));return a.default.createElement("div",{className:"rmdp-action-buttons ".concat(W(f)?"rmdp-rtl":""," ").concat(e?"rmdp-border-top":"")},a.default.createElement("button",{type:"button",className:"rmdp-button rmdp-action-button",onClick:function(){Fe&&(ht(Fe,!0),We(void 0)),at()}},pt("OK")),a.default.createElement("button",{type:"button",className:"rmdp-button rmdp-action-button",onClick:function(){We(void 0),at()}},pt("CANCEL")))}function pt(e){var t;if(!f||"string"!=typeof f.name)return e;return(null==Ee?void 0:Ee[e])||(null===(t={en:{OK:"OK",CANCEL:"CANCEL"},pl:{OK:"Ok",CANCEL:"Anuluj"},fa:{OK:"تأیید",CANCEL:"لغو"},ar:{OK:"تأكيد",CANCEL:"الغاء"},hi:{OK:"पुष्टि",CANCEL:"रद्द करें"}}[F(f)])||void 0===t?void 0:t[e])||e}function ft(){if(!V&&!we&&!1!==(null==ce?void 0:ce())){if(mt()){var e=new d.default({calendar:i,locale:f,format:m,months:_,weekDays:J,digits:xe,ignoreList:JSON.parse(re)});(!ee||e>ee)&&(!te||e<te)&&(ht(e),null==ve||ve(l(l({},rt),{},{value:e})),et.current.date=e)}var t=$(Xe);nt&&t&&t.blur(),t||!Ke?_e(!0):at()}}function mt(){return Se&&!n&&!et.current.date&&!w&&!D&&!nt}function ht(e,t){if(nt&&!t)return We(e);Le(e),et.current=l(l({},et.current),{},{date:e}),null==v||v(e),e&&qe(H(e,tt))}function yt(e){if(!b(je)&&le){et.current.selection=e.target.selectionStart;var t=e.target.value,r={calendar:i,locale:f,format:m,ignoreList:JSON.parse(re)};if(xe=b(xe)?xe:f.digits,!t)return qe(""),ht(null);if(xe){var n,a,o=y(xe);try{for(o.s();!(n=o.n()).done;){var c=n.value;t=t.replace(new RegExp(c,"g"),xe.indexOf(c))}}catch(e){o.e(e)}finally{o.f()}ht((a=/(?=.*Y)(?=.*M)(?=.*D)/.test(m)?new d.default(l(l({},r),{},{date:t})):new d.default(r).parse(t)).isValid?a:null),qe(E(t,xe))}}}function bt(){if(Ge(!0),nt){var e=Ze.current.parentNode.parentNode;e.className="rmdp-calendar-container-mobile",e.style.position="fixed",e.style.transform="",setTimeout((function(){e.style.visibility="visible"}),50)}}function gt(e,t){b(et.current.date)||!t||nt||at(),null==Oe||Oe(e,t)}}var U=e.forwardRef(_);function H(e,t){var r=[].concat(e).map((function(e){return null!=e&&e.isValid?e.format():""}));return r.toString=function(){return this.filter(Boolean).join(t)},r}function $(e){if(e.current)return"INPUT"===e.current.tagName?e.current:e.current.querySelector("input")}Object.defineProperty(exports,"DateObject",{enumerable:!0,get:function(){return d.default}}),exports.Calendar=q,exports.default=U,exports.getAllDatesInRange=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(!Array.isArray(e))return[];var r=e[0],n=e[e.length-1],a=[];if(!(r instanceof d.default&&n instanceof d.default&&r.isValid&&n.isValid&&!(r>n)))return[];for(r=new d.default(r),n=new d.default(n);r<=n;r.day++)a.push(t?r.toDate():new d.default(r));return a},exports.toDateObject=M;
