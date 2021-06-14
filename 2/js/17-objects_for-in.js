`use strict`;
//https://javascript.ru/tutorial/object/intro
//Объекты- это струтуры которые могут сохранят в себе любые типы данных
// в формате {ключ: значение}
//они могут так же быть вложены: объекты в объекты, массивы в объекты, функции в объекты

//Создание объектов
//синтаксис "конструктор объекта"
const obj = new Object();
obj.name = `Max`;
obj.age = `43`;
obj.gender = `male`;

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
console.log(options.name);//test

//удаление свойств объекта
delete options.name;

//Перебор свойств объекта for-in
//https://learn.javascript.ru/object-for-in
for (let key in options) {
	if (typeof(options[key]) === 'object') {//проверка если ключ объекта options сам явлется объектом
		for (let i in options[key]) {
			console.log(`свойство  ${i} имеет значение ${options[key][i]}`);//перебор свойств объекта options[key] находящегося внутри объекта options
		}
	} else {
		console.log(`свойство  ${key} имеет значение ${options[key]}`);
	}
}

//функции и методы внутри объекта
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object#methods
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
	if (typeof(options1[key]) === 'object') {//проверка если ключ объекта options сам явлется объектом
		for (let i in options1[key]) {
			console.log(`свойство  ${i} имеет значение ${options1[key][i]}`);//перебор свойств объекта options[key] находящегося внутри объекта options
			counter++;
		}
	} else {
		console.log(`свойство  ${key} имеет значение ${options1[key]}`);
		counter ++;
	}
}

console.log(counter);//подсчёт количества свойств с помощью переменной counter

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
console.log(Object.keys(options2));//получаем массив со всеми ключами
console.log(Object.keys(options2).lenght);//получаем длину массива(кол-во ключей)

//Создание методов внутри объектов
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
	}//созданный метод
};

options3.makeTest();

//Деструктуризация объектов
//переменные выносятся за объект в вид отдельных структур
const options4 = {
	name: `test`,
	width: 1024,
	height: 1024,
	colors: {
		border: `black`,
		background: `red`,
	}
};

const {border, background} = options4.colors;
console.log(border);//black