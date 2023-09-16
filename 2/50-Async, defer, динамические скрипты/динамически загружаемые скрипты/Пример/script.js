"use strict";
const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src) {
    //? добавление в DOM-дерево строчки script с загрузкой скрипта test.js
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('test.js');
loadScript('some.js');

//* script.async = false; обеспечивает загрузку test и some по очереди друг за другом
//* без этого параметра они будут загружаться асинхронно