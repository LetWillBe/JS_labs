"use strict";
//! Список родных событий Javascript
//! https://oddler.ru/blog/i63
//! https: //developer.mozilla.org/ru/docs/Web/Events

//! Обработчик события- это функция которая срабатывает как только событие произошло*/

//? Три способа назначить обработчик событий

//* Первый - линейная запись в html*/
//< button onclick = "alert('Click')"id = "btn" > Нажми меня < /button>
//практически не используется
//* Второй способ - использовать свойства DOM-дерева для событий*/
const btn =
	document.querySelector(
		"button"
	); /*получаем первую кнопку которая есть на странице*/
btn.onclick = function () {
	alert("Click");
};
//? Основной недостаток этого способа - при задании нескольких обработчиков действий для одного элемента выполнится только последнее*/
btn.onclick = function () {
	alert("Второй клик");
};
//? Недостаток второй- такой обаботчик нельзя удалить после того как он отработал*/

//* Третий способ - добавляем слушатель события*/
//* https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener
btn.addEventListener("click", () => {
	alert("Первое действие");
});

btn.addEventListener("click", () => {
	alert("Второе действие.");
}); /*выполнится и первое и второе действие в порядке очереди*/

btn.addEventListener("mouseenter", () => {
	console.log("Mouse on button");
});

//? Передаём объект события event как аргумент в callback-функцию
//? для того чтобы получить данные о том элементе с которым взаимодействуем
//? называть event можно как угодно, но желательно event или e
//? event в callbak всегда должен передаваться первым аргументом
//? https://developer.mozilla.org/ru/docs/Web/API/Event
btn.addEventListener("mouseenter", (event) => {
	console.log(event);
	// можно посмотреть все свойства события
	// самые важные - type И target
	console.log(event.target);
	// получаем сам элемент и возможность изменять его свойства
	event.target.remove();
	// удаляем полученный элемент
});

//! Отключение обработчика событий
//! https://developer.mozilla.org/ru/docs/Web/API/EventTarget/removeEventListener
//? Необходимо использовать точно такую же функцию которую мы назначали с помощью addEvnentListener
//? чтобы иметь возможность удалить функцию - надо вынести её в отдельную переменную
//* наглядный пример
const delElement1 = (event) => {
	//event.target.remove(); //удаляем кнопку btn со страницы
	console.log(event.target);
};
btn.addEventListener(
	"click",
	delElement1
); /*после того как с элементом btn будет выполнено событие click выполнится функция delElement1*/
btn.removeEventListener("click", delElement1); //удаляем обработчик по событию click на элементе btn
//в результате на странице ничего не произойдёт

//* приближённый к реальному
let i = 0; /*счётчик*/
const delElement = (event) => {
	//event.target.remove();
	console.log(event.target);
	i++;
	if (i == 1) {
		btn.removeEventListener("click", delElement);
		/*отключаем обрабочтик события delElement после того как он выполнится 1 раз по событию click*/
	}
};
btn.addEventListener("click", delElement);

//!Всплытие событий
//? Когда на вложенном элементе происходит событие, обработчики сначала срабатывают на нём,
//? потом на его родителе, затем выше и так далее, вверх по цепочке предков.
const overlay = document.querySelector(".overlay");
const eventBubble = (e) => {
	console.log(e.target); //изначальный элемент на котором происходит событие
	console.log(e.currentTarget); //показывает конкретный элемент который был затронут событием
	console.log(e.type); //тип события которое произошло
};
btn.addEventListener("click", eventBubble);
overlay.addEventListener("click", eventBubble);

//!Отмена стандартного поведения браузера
//? Два способа

//* 1- вернуть в обработчике события return false в самом конце
//? устареший формат

//* 2 -использование метода preventDefault
//? помещается в самом начале обработчика событий
const link = document.querySelector("a");
link.addEventListener("click", (e) => {
	e.preventDefault(); /*отменяем стандартное поведение браузера*/
	console.log(
		e.target
	); /*вместо перехода по ссылке выводим в консоль объект события*/
});

//! Назначение обработчика событий сразу на несколько однотипных элементов
//? Основная ошибка- назначить обработчик на псевдомассив с выбранными элементами
//? Назначать надо на каждый элемен по отдельности перебрав их через for-each
const btns = document.querySelectorAll("button");
btns.forEach((item) => {
	item.addEventListener("click", eventBubble);
});

//! Опции события
//? once: Boolean указывает, что обработчик должен быть вызван не более одного раза после добавления. Если true, обработчик автоматически удаляется при вызове.
btns.forEach((item) => {
	item.addEventListener("click", eventBubble, {
		once: true,
	});
});
