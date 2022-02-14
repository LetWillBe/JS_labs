'use strict';

const box = document.getElementById("box"),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

//*<div class="box" id="box" style="width: 500px; background-color: blue;"></div> 
//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

//* <button style="border-radius: 100%;">2</button> 
btns[1].style.borderRadius = '100%';

//* <div class="circle" style="background-color: red;"></div>
//circles[0].style.backgroundColor = 'red';

//* <div class="box" id="box" style="width: 250px; background-color: green;"></div> 
//box.style.cssText = 'background-color: green; width: 250px';

//!Сделать у всех средец золотой фон
//* <div class="heart" style="background-color: gold;"></div> 
for (let i = 0; i < hearts.length; i++) {
    //hearts[i].style.backgroundColor = "gold";
};

//!Второй способ поменять фон у всех сердец
//* <div class="heart" style="background-color: blue;"></div>
hearts.forEach(item => {
    //item.style.backgroundColor = 'blue';
});

//* Создать <div></div> 
//const div = document.createElement('div');

//* Вставка текста
//const text = document.createTextNode('Вставил текст');

//* Добавить к div класс black
//div.classList.add('black');

//* Добавить div в конец body 
//document.body.append(div); //современный способ
//document.body.appendChild(div); //старый способ

//* Добавить div в конец элемента с классом .wrapper 
//document.querySelector('.wrapper').append(div);

//*второй способ
//let wrapper = document.querySelector('.wrapper');
//wrapper.append(div);

//*Вставить в начале wrapper элемент div
// wrapper.prepend(div);

//*перед hearts[0] вставить div
// hearts[0].before(div);

//*после hearts[0] вставить div
// hearts[0].after(div);

//! до того как появились prepend, before/after 
//*div вставляется в начало псевдомассива hearts, т.е. перед hearts[0]
// wrapper.insertBefore(div, hearts[0]);

//*удалить circles[0]
// circles[0].remove();
// wrapper.removeChild(hearts[1]);//старый метод


//*заменить один элемент другим
/*вместо hearts[0] поставить circles[0]*/
// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);//старый метод

//* в блок div вставить текст 
//div.innerHTML = "<h1>Hello!</h1>";

//*воспримет не как заголовок, а как обычный текст
// div.textContent = "<h1>Hello!</h1>";

//* вставка HTML-элемента перед div
//div.insertAdjacentHTML('beforebegin', '<h2>Max</h2>');

//*помещает код в начало элеента div 
//div.insertAdjacentHTML('afterbegin', '<h3>Well done!</h3>');

//*помещает код в конец элемента div 
//div.insertAdjacentHTML('beforeend', '<h4>ОК!</h4>');

//* вставка HTML-элемента после div
//div.insertAdjacentHTML('afterend', '<h5>The END!</h5>');
/*
<h2>Max</h2>
<div class="black">
	<h3>Well done!</h3>
	<h1>Hello!</h1>
	<h4>ОК!</h4>
</div>
<h5>The END!</h5>
*/