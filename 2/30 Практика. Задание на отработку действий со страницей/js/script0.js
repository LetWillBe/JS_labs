/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1
const adv = document.querySelectorAll(".promo__adv img");
adv.forEach(item => {
    item.remove();
});

//2
const genre = document.querySelector(".promo__genre");
genre.textContent = "драма";

//3
const bg = document.querySelector(".promo__bg");
bg.style.cssText = "background-image: url(img/bg.jpg)";

//4
movieDB.movies.sort();

//5-1
const movieList = document.querySelector(".promo__interactive-list");
movieList.innerHTML = "";
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
 		<li class="promo__interactive-item">${i + 1} ${film}
 			<div class="delete"></div>
 		</li>
 	`;
});

//5-2
const promo = document.querySelectorAll(".promo__interactive-item");
promo.forEach((item, i) => {
    item.textContent = `${i + 1} ` + movieDB.movies[i];
});