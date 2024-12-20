"use strict";

let str = "some";
let strObj = new String(str); // создаём новую строку
//* при использвоании любого метода на строке: JS делает её объетом
//* потом применяет метод и возвращает в строку обратно
console.log(typeof str); //string
console.log(typeof strObj); //object

//! Прототипно-Ориентированное Наследование

//* создаём экземпляр массива
console.dir([1, 2, 3]);
let img = "proto.png";
// _proto_: Array(0) - к нему можно применить методы для массива
//т.е. эта струтктура подходит под прототип "массив"
//и на неё можно воздействовать как на массив
//так же у массива можно найти _proto_:Object
//т.е. на массив можно применить методы для объекта
//или, другими словами, массив наследует методы от объекта
//А мы уже знаем что массив - это частный случай объекта

//* Объекты так же могут наследовать методы друг от друга(привет, React!)
const soldier = {
	hp: 500,
	armor: 100,
	sayUra: () => {
		console.log("УРАА!!!");
	},
};
const max = {
	hp: 250,
};

//* устаревшая запись(deprecated)
max.__proto__ = soldier; //объект soldier является прототипом объекта мax
// т.е. max будет иметь свои особенные свойства, а недостающие наследовать от объекта soldier

console.log(max.armor); //100
console.log(max.hp); //250
max.sayUra(); //УРАА!!!

//* вместо __proto__
const soldierNew = {
	hp: 500,
	armor: 100,
	sayUra: () => {
		console.log("УРАА!!!");
	},
};
const maxNew = {
	hp: 250,
};
//* устанавливает прототип (то есть, внутреннее свойство [[Prototype]]) указанного объекта в другой объект или null
Object.setPrototypeOf(maxNew, soldierNew);
maxNew.sayUra();

//* создаёт новый объект с указанным прототипом и свойствами.
const ivan = Object.create(soldierNew);
ivan.sayUra();

//* возвращает прототип (то есть, внутреннее свойство [[Prototype]]) указанного объекта.
Object.getPrototypeOf(ivan);
//{
//    hp: 500,
//    armor: 100,
//    sayUra: ƒ
//}
//armor: 100
//hp: 500
//sayUra: () => {
//        console.log("УРАА!!!");
//    }
//    [
//        [Prototype]
//    ]: Object

//! ООП - это о том как делать правильную архитектуру
