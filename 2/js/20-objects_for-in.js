"use strict";
//https://javascript.ru/tutorial/object/intro
//Объекты- это струтуры которые могут сохранят в себе любые типы данных
// в формате {ключ: значение}
//они могут так же быть вложены: объекты в объекты, массивы в объекты, функции в объекты

//Создание объектов
//синтаксис "конструктор объекта"(устаревший)
const obj = new Object();
obj.name = `Max`;
obj.age = `43`;
obj.gender = `male`;
console.log(obj);

//актуальный способ создания объектов, синтаксис "литерал объекта"
const options = {
    name: `test`,
    width: 1024,
    height: 1024,
    colors: {
        border: `black`,
        background: `red`,
    }
};

//вызов свойств объекта
console.log(options.name); //test

//удаление свойств объекта
//delete options.name;

//for-in - перебор свойств объекта 
//https://learn.javascript.ru/object-for-in
for (let key in options) {
    //перебираем свойства объекта options
    console.log(`Свойство ${key} равно ${options[key]}`);
    //проверка если ключ объекта options сам явлется объектом
    if (typeof options[key] === 'object') {
        //перебор свойств объекта options[key] находящегося внутри объекта options
        for (let i in options[key]) {
            console.log(`свойство  ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        //перебираем свойства объекта options
        console.log(`свойство  ${key} имеет значение ${options[key]}`);
    }
}

//функции и методы внутри объекта
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object#methods

//подсчёт количества свойств объекта с помощью переменной counter
const options1 = {
    name: `test`,
    width: 1024,
    height: 1024,
    colors: {
        border: `black`,
        background: `red`,
    }
};

let counter = 0;

for (let key in options1) {
    if (typeof(options1[key]) === 'object') { //проверка если ключ объекта options сам явлется объектом
        for (let i in options1[key]) {
            console.log(`свойство  ${i} имеет значение ${options1[key][i]}`);
            //перебор свойств объекта options[key] находящегося внутри объекта options
            counter++;
        }
    } else {
        console.log(`свойство  ${key} имеет значение ${options1[key]}`);
        counter++;
    }
}

console.log(counter); //количество свойств

//подсчёт кол-ва свойств с поомщью Object.keys
const options2 = {
    name: `test`,
    width: 1024,
    height: 1024,
    colors: {
        border: `black`,
        background: `red`,
    }
};
console.log(Object.keys(options2)); //получаем массив со всеми ключами [ 'name', 'width', 'height', 'colors' ]
console.log(Object.keys(options2).length); //получаем длину массива(кол-во ключей) - 4

//Создание методов внутри объектов
//Метод - это действие которое может совершать объект
const options3 = {
    name: `test`,
    width: 1024,
    height: 1024,
    colors: {
        border: `black`,
        background: `red`,
    },
    makeTest: function() {
        console.log('Test');
    } //созданный метод
};

options3.makeTest();

//Деструктуризация объектов (ES6)
//переменные выносятся за объект в виде отдельных структур
const options4 = {
    name: `test`,
    width: 1024,
    height: 1024,
    colors: {
        border: `black`,
        background: `red`,
    }
};
//помещаем внутрь {} то что хотим вынести
const {
    border,
    background
} = options4.colors;
console.log(border); //black