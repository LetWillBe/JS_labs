//УСЛОВИЯ

'use strict';
//----------------
let a = '4';
if (a === 4) {
  console.log('OK!');
} else {
  console.log('ERROR');
}
//----------------
const num = 50;
if (num < 49) {
  console.log('< 49');
} else if (num > 100) {
  console.log ('Больше 100');
} else {
  console.log ('50-99');
}
//Тернарный оператор - в его работе учавствует три аргумента
//    1                2                    3
(num === 50) ? console.log('50') : console.log("ERROR");

//-----------------------
//switch выполняет только строгое сравнение (===)
const num1 = '50';
switch (num1) {
  case 49:/* Строгое сравнение num1 === 49 */
    console.log('49');
    break;/*если услови выполнилось - не переходить к проверке следующщих кейсов*/
  case 100:
    console.log('100');
    break;
  case 50:
    console.log('50');
    break;
  default:/*Если не выполнилось ни одно условие */
    console.log ('Не получилось');
    break;
}
