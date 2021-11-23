
//Callback - это функция которая должна быть выполнена только после того как другая фунция завершила своё выполнение

"use strict";

//--------------------

function learnJS(lang, callback) {
	console.log(`Я учу: ${lang}`);
	//выполнится только после того как выполнится предыдущее действие
    callback();
}

/*1*/

learnJS(`JavaScript`, function () {
    console.log('Я прошёл этот урок');
});


/*2*/

function done() {
    console.log('Я прошёл этот урок');
}

learnJS(`JavaScript`, done);