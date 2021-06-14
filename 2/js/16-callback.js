
//Callback

"use strict";

//--------------------

function learnJS(lang, Callback) {
    console.log(`Я учу: ${lang}`);
    Callback();//выполнится только после того как выполнится предыдущее действие
}

function done() {
    console.log('Я прошёл этот урок');
}

learnJS(`JavaScript`, done);