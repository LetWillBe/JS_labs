//Операторы в JS
"use strict";

// + - сложение, складывать можно числа и строки
//конкатенация - это операция сложения числа или строки с дугой строкой

console.log('arr' + "object");
console.log(4 + "object");

console.log(4 + +"5");//+"5" (унарный плюс)превращает строчную 5 в числовое значение

//инкремент и декремент
let incr = 10;
let decr = 10;
incr++;//инкермент- увеличение на 1
decr--;// декремент - уменьшение на 1, постфиксная запись
// при постфиксной записи вернётся старое значение а изменение будет выполнено следующим шагом
++incr;
--decr;//префиксная запись
//при префиксной записи сначала выполнится изменение переменной а потом вернёт её значение

//% - возвращает остаток от деления двух чисел
console.log(5%2);// результат - 1

// = - оператор присванивания
// == - сравнение по значению
console.log(2*4 == 8);//true
console.log(2*4 == '8');//true
// === - сравнение по типу данных(строгое сравнение)
console.log(2*4 === '8');//false
console.log(2*4 === 8);//true

// && - логическое И
// || логическое ИЛИ
const isChecked = true, isClose = true;
console.log(isChecked && isClose);//true

const isChecked = true, isClose = false;
console.log(isChecked && isClose);//false

const isChecked = false, isClose = false;
console.log(isChecked && isClose);//false

const isChecked = true, isClose = false;
console.log(isChecked || isClose);//true

const isChecked = false, isClose = false;
console.log(isChecked || isClose);//false

const isChecked = true, isClose = true;
console.log(isChecked || isClose);//true

// ! - отрицание,(логическое НЕ)
const isChecked = false, isClose = false;
console.log(isChecked || !isClose);//true

// сначала выполняются действия в скобках, затем умножение/деление, и потом уже сложение-вычитание Сравнение выполняется самым последним
console.log(2 + 2 * 2 === 8);//false
console.log((2 + 2) * 2 === 8);//true
console.log(2 + 2 * 2 != 8);//true
// != означает "не равен"
// !== не равен по типу (строгое сравнение)
