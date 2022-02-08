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

//*остальные методы перебора
let image = 'Objects_Arrays.jpg';
arr.map(); //
arr.every();
arr.some();
arr.filter();
arr.reduce();

//*Метод split
//преобразует строку в массив, в () указывается разделитель
const str = prompt(``, ``);
const product = str.split(`, `);

//*Метод join
//преобразует массив в строку
console.log(product.join(`; `));

//*Метод sort
//сортирует эелементы внутри массива
product.sort(); //Если не передать функцию сравнения - сортирует как строки

//*функция сравнения чисел, основанная на алгоритме быстрой сортировки
//http://algolist.ru/sort/quick_sort.php
function compareNum(a, b) {
    return a - b;
}
arr.sort(compareNum); //числа в массиве отсортируются по порядку  как числа

//!Псевдомассив
//это объект структура которого совпадает со структурой массива
//отличается от массива тем что для него нет никаких методов
//т.е.е он просто хранит данные по проядку