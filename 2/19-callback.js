"use strict";


function first() {
    //Do something
    setTimeout(() => {
        console.log('First');
    }, 500); //выполнится через 500с
}

function second() {
    console.log('Second');
}

first(); //выполнится второй
second(); //выполнится первой

//Callback - это функция, которая должна быть выполнена после того, как другая завершила своё выполнение. 
//Как правило они используются для асинхронного кода, что бы быть уверенным, что функция не сработает, пока не закончит свою работу другая функция.

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    //выполнится только после того как выполнится предыдущее действие
    callback();
}

/*1 - передаём анонимную ф-цию в качестве callback*/
//learnJS(`JavaScript`, function() {
//    console.log('Я прошёл этот урок');
//});

/*2 - передаём ф-цию done в качестве callback */
function done() {
    console.log('Я прошёл этот урок');
}
learnJS(`JavaScript`, done);