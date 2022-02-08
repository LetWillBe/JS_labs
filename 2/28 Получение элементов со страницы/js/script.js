'use strict';

const box = document.getElementById("box");

console.log(box);//<div class="box" id="box">

const btns = document.getElementsByTagName('button');

console.log(btns);//HTMLCollection [ <button>, <button>, <button>, <button>, <button> ] - получили псевдомассив с кнопками

let btns1 = document.getElementsByTagName("button")[1];//так мы получаем непосредественно кусок HTMLкода с кнопокй и можем задвайть ей свойства и атрибуты

console.log(btns1);//получили вторую кнопку <button>2</button>

console.log(btns[1]);//так же получили <button>2</button>

const circles = document.getElementsByClassName('circle');

console.log(circles);//HTMLCollection [ <div.circle>, <div.circle>, <div.circle> ]

const hearts = document.querySelectorAll(".heart");//получение элементов по CSS селектору

console.log(hearts);//NodeList [ <div.heart>, <div.heart>, <div.heart> ]

hearts.forEach(item => {
	console.log(item);
});
/*
<div class="heart">
<div class="heart">
<div class="heart">
*/

const oneHeart = document.querySelector('.heart');//получает первый элемент с сответствующим классом
console.log(oneHeart);//<div class="heart">