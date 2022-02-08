//Общение с пользователем
"use strict";

alert("Hello!"); //модальное окно

const result = confirm("Вы согласны?"); //confirm - модальное окно в вариантами ответа ОК и Отмена
console.log(result); //результаты ответа на confirm записываются в result (true/false)

const answer = prompt("Сколько вам лет?", ""); //prompt - модальное окно с полем ввода варианта ответа
console.log(answer); //результат сохраняется в виде строки
//при нажатии "Отмена" значение будет null

//создаём массив с ответами пользователя

const answers = [];

answers[0] = prompt("Ваше имя", "");
answers[1] = prompt("Ваша фамилия", "");
answers[2] = prompt("Ваш возраст", "");

document.write(answers);

//Команды alert confirm prompt работают только в браузере, в консоли они не определяются