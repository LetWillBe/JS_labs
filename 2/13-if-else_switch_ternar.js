//УСЛОВИЯ

'use strict';
//----------------
let a = '4';
if (a === 4) {
    console.log('OK!');
} else {
    console.log('ERROR');
}


const num0 = 50;
if (num0 < 49) {
    console.log('< 49');
} else if (num0 > 100) {
    console.log('Больше 100');
} else {
    console.log('50-99');
}

//Тернарный оператор

const num1 = 50;
//в его работе учавствует три аргумента
//1-условие      2-действие если условие выполнено
(num1 === 50) ? console.log('OK!'): console.log("ERROR");
//                                 3- действие если услоыие не выполнено

//switch выполняет только строгое сравнение (===)
const num2 = '50';
switch (num2) {
    case 49:
        /* Строгое сравнение num1 === 49 */
        console.log('49');
        break; /*если услови выполнилось - не переходить к проверке следующщих кейсов*/
    case 100:
        console.log('100');
        break;
    case 50:
        console.log('50');
        break;
    default:
        /*Если не выполнилось ни одно условие */
        console.log('Не получилось');
        break;
}