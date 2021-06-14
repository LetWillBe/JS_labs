//ТИПЫ ДАННЫХ В JS

"use strict";

//Простые типы

//числа
let number = 4.6;
console.log(4/0);//infinity(бесконечность)
console.log("string" * 9);// NaN (not at number), операция не подлежит математической логике

//строка
const persone = "Maxim",
	  persone2 = 'Max',
	  persone3 = `Malkus`;//три варианта кавычек для записи строк
const yearsOld = '15';//это будет воспринято как строка а не число

//логический тип (boolean)
const bool = true;
const age = false;

//Null, undefined
console.log(something);//ReferenceError: something is not defined что означет - Null (несуществующий объект)

let und;//мы ничего не присвоили перменной
console.log(und);// undefined (не определенная переменная)

//Объекты
//объект - это коллекция данных
//используется для хранения абсолютно любых данных
//объекты задаются в {}
//данные внтури объекта называются "свойства объекта", действия внтури объекта - "методы объекта"
const object = {};//пустой объект

const obj = {
	name: "Max",//свойство объекта
	age: 43,
	isMarried: false
};
console.log(obj.name);//Max
console.log(obj['age']);//43
//obj.age - можно вызвать свойство объекта вот так
//obj['age'] - или вот так

//Массив
//это частный случай объекта и он не является отдельным типом данных.
//Может включать в себя любые типы данных.
//массив задаётся внутри [] через ,
//[] - пустой масив 
 let arr = ['1.jpg' , "2.png" , "3.bmp"];//пример классического массива
 console.log(arr[0]);//будет вызван 1.jpg