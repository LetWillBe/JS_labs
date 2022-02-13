"use strict";

//* 1
let x = 5;
console.log(x++); //5, т.к. постпрефиксная запись


//* 2
[] + false - null + true; //NaN
//! сложение с пустым массивом превращает массив в пустую строку ("" + false = "false")
//если из строки вычесть другой тип данных получится NaN
//дальше прибавление true уже ничего не изменит


//* 3
let y = 1;
let x1 = y = 2;
//! эту строку надо читать справа налево
//программа это воспримет как
// y = 2
// x = y
console.log(x1); //2


//* 4
console.log([] + 1 + 2); //"12"
//аналогично задаче 2
//сложение с пустым массивом даст тсроку "1"
//при сложении строки с числом происходит преобразование данных к строчному типу
//"1"+2 = "12"


//* 5
alert("1" [0]); //1
//! происходит обращение к 0 элементу строки "1"
//а он тут всего один
// если бы было alert( "1"[1] )
//был бы результат undefined


//* 6
2 && 1 && null && 0 && undefined; //null
//! оператор И вернёт первый встреченный false, null, 0, undefined
//в данном случае первым будет null


//* 7
let a = 1,
    b = 2;
console.log(!!(a && b) === (a && b)); //false
// !! - превращают выражение в булийное значение
//результатом первого выражение будет true или false
// а результатом второго - значение переменной a или b
//т.к. && возвращет последнее true значение
//(если все преддыдущие true),
//или первое встреченное false
//поэотму эти выражение не равны


//* 8
alert(null || 2 && 3 || 4); //3
//! в таблице приоритетов && находится выше ||
//поэтому && будет обработан первым
// 2&&3 вернёт 3, т.к. см. выше
//null || 3 вернёт 3
// т.к. ИЛИ возвращает первое встреченное true
// 3 || 4 вернёт 3, т.к. 3 было первым


//* 9
let a1 = [1, 2, 3];
let b1 = [1, 2, 3];
console.log(a1 == b1); //false
//т.к. это две разные переменные со своими данными, хотя и содержат одинаковые данные
//Если бы было так
//a1 = [1, 2, 3];
//a1 = b1;
// a1 == b1;
// было бы true


//* 10
alert(+"Infinity"); //Infinity(бесконечность)
//причём Infinity будет числом
// то же самое с NaN, null, true, false, undefined вернёт NaN


//* 11
console.log("Ёжик" > "яблоко"); //false
//т.к. "Ё" по таблице символов юникода стоит ниже "я"
console.log("ёжик" > "яблоко"); //true


//* 12
0 || "" || 2 || undefined || true || falsе; //2
//т.к. первое true-значение == 2