"use strict";
//Интерполяция
const category = "toys";

console.log('https://url.com/' + category + '/' + '5'); //обычный вариант записи
console.log(`https://url.com/${category}/5`); // Интерполяция, работает только при использовании ``(косые кавычки на Ё)

//Пример
const user = "Максим";
alert(`Привет, ${user}!`);