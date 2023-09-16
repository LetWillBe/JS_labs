"use strict";
//!ДТ - это возможность одного типа данных превращаться в другой

//!превращение в строку

//* 1 String
console.log(typeof(String(123))); //string

//* 2 Конкатенация - сложение строки с чем-то
console.log(100 + "px"); //"100px"

//! превращение в число

//* 1
Number("1234");

//* 2 унарный плюс
console.log(typeof(+"1234")); //number

//* 3 parseInt
parseInt("100px", 10);

//! To boolean

//* 0, '', null, undefined, NaN; - всегда false

//* 1
console.log(typeof(Boolean('1234'))); //boolean

//* 2
console.log(typeof(!!'1234')); //boolean