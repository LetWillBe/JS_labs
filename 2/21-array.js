"use strict";

const arr = [1, 2, 3, 6, 8];

//!Методы работы с массивом

arr.pop(); //удаляет элемент в конце массива

arr.push(10); //добавляет элемент в конец массива


//* length выдает длину массива(последний индекс+1)
let arr1 = [1, 5, 8, 9];
console.log(arr1.length); // 4
arr1[99] = 88;
console.log(arr1.length); // 100
console.log(arr1); //[ 1, 2, 3, 6, 10, <94 empty items>, 88 ]

//!ПЕРЕБОР ЭЛЕМЕНТОВ ВНУТРИ МАССИВА

//* v1 (for)
const arr11 = [1, 2, 3, 6, 8];
for (let i = 0; i < arr11.length; i++) {
    console.log(arr11[i]);
}

//* v2 (for-of)
//можно использовать break и continue, в отличии от forEach
const arr12 = [1, 2, 3, 6, 8];
for (let value of arr12) {
    console.log(value);
}

//* v3  Метод forEach
// позволяет гибко перебрать все элементы которые находятся внутри массива
const arr2 = [1, 2, 3, 6, 8];
arr2.forEach(function(item, i, arr2)
    // item - элемент который мы перебираем(любое имя)
    // i - номер по порядку(индекс),
    // arr2 - ссылка на тот массив, который перебирается(не обязательно)
    {
        console.log(`${i}: ${item} внутри массива ${arr2}`);
    });

// Вариант записи forEach через стрелочную функцию 
const arr3 = [1, 2, 3, 6, 8];
arr3.forEach((item, i) => {
    console.log(`${i}: ${item} внутри массива ${arr3}`);
});

//* остальные методы перебора
//https://learn.javascript.ru/array-iteration
let image = 'Objects_Arrays.jpg';

//* методы трасформации массива
arr.map(); // «arr.map(callback[, thisArg])» создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr
arr.every(); //«arr.every(callback[, thisArg])» возвращает true, если вызов callback вернёт true для каждого элемента arr
arr.some(); // «arr.some(callback[, thisArg])» возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr
arr.filter(); //«arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию
arr.reduce(); // arr.reduce(callback[, initialValue])» используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата

//*Метод split
//преобразует строку в массив, в `` указывается разделитель
const str = prompt(`введите товары через `, ``);
const product = str.split(`, `); // в `` задаётся разделитель элементов массива
console.log(product);

//*Метод join
//преобразует массив в строку
console.log(product.join(`; `));

//*Метод sort
//сортирует эелементы внутри массива
product.sort(); //Если не передать функцию сравнения - сортирует как строки

//! функция сравнения чисел, основанная на алгоритме быстрой сортировки
//http://algolist.ru/sort/quick_sort.php
let arr4 = [8, 9, 56, 7, 12, 85, 63];

function compareNum(a, b) {
    return a - b;
}
arr4.sort(compareNum); //числа в массиве отсортируются по порядку  как числа
console.log(arr4); //[7, 8, 9, 12,56, 63, 85]

//! Псевдомассив
//это объект структура которого совпадает со структурой массива
//отличается от массива тем что для него нет никаких методов (forEach, filter, push, pop и т.д.)
//т.е. он просто хранит данные по порядку