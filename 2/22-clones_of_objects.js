'use strict';

//* Как работают примитивные переменные
let a = 5,
    b = a;

b = b + 5;

console.log(b); //10
console.log(a); //5

//* Как работают сложные переменные(объекты)
const obj = {
    a: 5,
    b: 1,
};

const copyObj = obj; //передаётся ссылка на obj

copyObj.a = 10;

console.log(copyObj); //{a: 10, b: 1}
console.log(obj); //{a: 10, b: 1}


//! 1ый способ создания копии объектов
//* Функция копирования объектов
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

//* применение функции копирования объектов
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

const newNumbers = copy(numbers); //поверхностная копия
//копиями будут являться те свойства которые лежат на первом уровне

newNumbers.a = 10;
console.log(newNumbers); //{a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbers); //{a: 2, b: 5, c: { x: 7, y: 4 } }

newNumbers.c.x = 10;
//свойство x объекта с не является копией
//изменения коснутся так же объекта numbers

console.log(newNumbers); //{a: 10, b: 5, c: { x: 10, y: 4 } }
console.log(numbers); //{a: 2, b: 5, c: { x: 10, y: 4 } }


//! 2-ой способ создания копии объектов
//* Object.assign - добавляет один объект к другому
const add = {
    d: 17,
    e: 20,
};

console.log(Object.assign(numbers, add));
//в numbers помещаем объект add
// результат {a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 }

const clone = Object.assign({}, add);
// в пустой объект добавляем объект add
//получаем его копию. PROFIT!


//! 3-ий способ создания копии объектов
//* Slice - получение копии массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //создание копии массива


//! 4-ый способ создания копии объектов
//* Spread - оператор разворота (...)(появился в ES9)
//разворачивает структуру и представляет её в виде набора данных
const video = ['yotube', 'vimeo', 'vk'],
    blogs = ['LiveJournal', 'blogger', 'wordpress'],
    internet = [...video, ...blogs, 'instagramm', 'tik-tok'];
console.log(internet);
//[ "yotube", "vimeo", "vk", "LiveJournal", "blogger", "wordpress", "instagramm", "tik-tok" ]

//Передаём массив num  как аргумент в функцию log
//с помощию spread раскладываем его на набор данных
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);
//2
//5
//7

//Создание копии массива с помощью spread
const array = ['a', 'b'];
const newArray1 = [...array];
newArray1[0] = 'X';
console.log(array); //[ "a", "b" ]
console.log(newArray1); //[ "X", "b" ]

//Создание копии объекта с помощью spread
const qwe = {
    a: 123,
    b: 456,
    c: 789,
};
const newQWE = {
    ...qwe
};
newQWE.b = 999;
console.log(qwe); //{ a: 123, b: 456, c: 789 }
console.log(newQWE); //{ a: 123, b: 999, c: 789 }