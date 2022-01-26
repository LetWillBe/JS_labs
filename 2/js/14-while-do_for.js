"use strict";
// ЦИКЛЫ 

//while(условие){код, тело цикла};
let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
}


// do{
//     тело цикла
// }while(условие);
let num1 = 50;
do {
    console.log(num1);
    num1++;
}
while (num1 <= 55);


//For(начало; условие; шаг){тело цикла,действия};
for (let i = 1; i < 8; i++) {
    if (i === 7) {
        break; //выход из цикла при i===7
    }
    if (i === 2) {
        continue; //позволяет пропустить итерацию в цикле
    }
    console.log(i);
}