"use strict";

//методы и свойства строк и чисел


//СТРОКИ
const str = 'test';
console.log(str.length); // 4 -количество символов в строке str

const arr = [1, 2, 3];
console.log(arr.length); //3 -кол-во элементов внутри массива arr

console.log(str[2]); // s - третий символ в строке str

//метод изменения регистра
console.log(str.toUpperCase());
console.log('str'); // TEST
console.log(str.toLowerCase()); //переводит строку в нижиний регистр

//Поиск подстроки
let fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); //находит с какой позиции в строке fruit наичинается комбинация символов fruit

//Обрезка-вырезка строк
const logg = "Hello world";
console.log(logg.slice(6, 11)); //возвращает из текста фрагмент с 6 по 11ый символ.
//Последний(11-ый) элемент не вовзращается в виде результата.
//Т.е. надо указывать длину на 1 символ больше
console.log(logg.slice(6)); //будет вырезан кусок начиная с 6го символа и до конца
console.log(logg.slice(-5, -1)); // начало обрезки - 5ый символ справа, конец обрезки - 1ый символ справа

//substring - делает то же что и slice.
//Разница в том что первый аргумент можно задвать больше чем второй(не стоит так делать)
//и не поддерживает отрицательные значниея аргумента (интерпритирует их как 0)
console.log(logg.substring(6, 11)); //world

//substr - второй аргумент указывает не на последний символ,  на длину вырезаемого текста
console.log(logg.substr(6, 5)); //world

//ЧИСЛА
// Math - мини библиотека внутри JS для работы с числами
// Math.min - получение минимального числа
// Math.max - получение максимального числа и т.д.
const num = 12.2;
const exp = 2;
console.log(Math.pow(num, exp)); //возводит  num в степень exp
console.log(Math.round(num)); //округление до ближайшего целого (12)
console.log(Math.random()); //случайное число от 0 до 1
console.log(Math.floor()); //округление в меньшую сторону
console.log(Math.ceil()); //округление в большую сторону
console.log(Math.floor(Math.random() * 10)); //случайное число от 0 до 10(есть шанс выпадения 0)
console.log(Math.ceil(Math.random() * 10)); //случайное число от 0 до 10(шанс выпадения 0 минимален)

const test = "12.2px";
console.log(parseInt(test)); //переводит число в другую систему исчисления (12)
console.log(parseFloat(test)); //возвращает число или строку в десятичном варианте(12.2)