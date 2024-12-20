"use strict";

//!ФУНКЦИИ
// function имяФункции(аргументы функции){код выполняемый функцией}
// вызвать функцию можно до её появления в коде

let num0 = 123; //глобальная перменная, её можно использовать внутри функции

function showFirstMessage(text) {
	console.log(text);
	let num = 789; //локальная перменна, видна и существует только внутри функции
	// num0 = 200;//меняем значение глобальной перменной
	let num0 = 456; //значение глобальной перменной не изенится, num0 = 222только внутри функции
	console.log(num0); //результат - 222
}
showFirstMessage("Hello, Max!");

console.log(num0); // результат - 2

//! замыкание – это функция + внешние переменные.
//При вызове функции, куда бы её ни передали в коде – она будет искать переменные сначала у себя,в локальных переменных, а затем, если не найдёт, будет искать на уровень выше вплоть до глобальных
let num1 = 2;

function showFirstMessage(text) {
	let num1 = 3;
	console.log(text);
	console.log(num1); // 3
}
showFirstMessage("Hello, Max!");
console.log(num1); // 2

//Как только функция встречает return - она прекращает своё действие
function calc(a, b) {
	return a + b;
	console.log(a, b); //строка не выполнится никогда
}
console.log(calc(4, 3)); //7
console.log(calc(5, 6)); //11
console.log(calc(14, 43)); //57
//Возвращение значения наружу
function ret() {
	let num = 50;
	return num; //значение локальной переменной с помощью return передаётся из локальной области в глобальную
}
const anotherNum = ret();
console.log(anotherNum); //50

//function expression -создаётся только тогда, когда доходит поток кода. Можно вызвать только после объявления
// let имяПеременой = function(аргументы ф-ции){код}
const logger = function () {
	console.log("Hello!");
};
logger();

//Стрелочные функции(добавлены в ES6)
//не имеет контекста вызова
// имяПеременной = (аргументы ф-ции) => {код};
const calc1 = (a, b) => {
	return a + b;
};
