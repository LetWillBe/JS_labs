"use strict";
const p = document.querySelectorAll('p');
console.log(p);

//? добавление в DOM-дерево строчки script с загрузкой скрипта test.js
const script = document.createElement('script');
script.src = "test.js";
script.async = false; //* скрипт не будет загружаться в фоном режиме
document.body.append(script);