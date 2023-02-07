/* Задания на урок:

//1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
//новый фильм добавляется в список. Страница не должна перезагружаться.
//Новый фильм должен добавляться в movieDB.movies.
//Для получения доступа к значению input - обращаемся к нему как input.value;
//P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

//2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

//4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
//"Добавляем любимый фильм"

//5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let ads = document.querySelectorAll(".promo__adv *");
let genre = document.querySelector(".promo__genre");
let background = document.querySelector(".promo__bg");
let filmsList = document.querySelector(".promo__interactive-list");
let form = document.querySelector("form.add");
let input = form.querySelector(".adding__input");
let btn = form.querySelector("button");
let checkbox = form.querySelector("[type='checkbox']");

let removeAds = (block) => {
    block.forEach((item) => {
        item.remove();
    });
};

let changeGenre = (elem) => {
    elem.textContent = "драма";
};

let changeBg = (bg) => {
    bg.style.backgroundImage = 'url("img/bg.jpg")';
};

let redrawFilmsList = (moviesArr, list) => {
    moviesArr.sort();
    list.innerHTML = "";
    moviesArr.forEach((item, index) => {
        list.insertAdjacentHTML('beforeend', `
	<li class="promo__interactive-item">${index + 1}. ${item}<div class="delete"></div></li>
	`);
    });
    let delFilm = filmsList.querySelectorAll(".delete");
    delFilm.forEach((item, index) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            moviesArr.splice(index, 1);
            redrawFilmsList(moviesArr, list);
        });
    });
};

let addFilms = (filmsArr, newFilm) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        if (newFilm.value) {
            if (newFilm.value.length > 21) {
                newFilm.value = `${newFilm.value.slice(0,21)}...`;
            }
            filmsArr.push(newFilm.value.toUpperCase());
            redrawFilmsList(filmsArr, filmsList);
            newFilm.value = "";
            if (checkbox.checked) {
                console.log("Добавляем любимый фильм");
            }
        }
    });
};

removeAds(ads);
changeGenre(genre);
changeBg(background);
redrawFilmsList(movieDB.movies, filmsList);
addFilms(movieDB.movies, input);

//! Сделал всё сам, кроме 3го задания
//! забыл про parentElement.remove() и синтаксис splice(index,1)