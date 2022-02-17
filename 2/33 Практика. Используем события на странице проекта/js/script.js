/* Задания на урок:

//1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
//новый фильм добавляется в список. Страница не должна перезагружаться.
//Новый фильм должен добавляться в movieDB.movies.
//Для получения доступа к значению input - обращаемся к нему как input.value;
//P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

//2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

//3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

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

let promoRemove = document.querySelectorAll(".promo__adv *");
promoRemove.forEach((item) => {
    item.remove();
});

let changeGenre = document.querySelector(".promo__genre");
changeGenre.textContent = "драма";

let changeBackground = document.querySelector(".promo__bg");
changeBackground.style.backgroundImage = 'url("img/bg.jpg")';

let filmsList = document.querySelector(".promo__interactive-list");
let movieListUpdate = () => {
    movieDB.movies.sort();
    filmsList.innerHTML = "";
    movieDB.movies.forEach((item, index) => {
        filmsList.insertAdjacentHTML('beforeend', `
	<li class="promo__interactive-item">${index + 1}. ${item}<div class="delete"></div></li>
	`);
    });
    //? При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
    let garbage = document.querySelectorAll(".delete");
    garbage.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            btn.parentElement.remove();
            movieDB.movies.splice(index, 1);
            movieListUpdate();
        });
    });
};


movieListUpdate();

//? при клике на кнопку добавляем введённое значение в movieDB.movies
let btn = document.querySelector(".add button"); //это кнопка Подтвердить
let input = document.querySelector(".adding__input"); //поле ввода
btn.addEventListener('click', (event) => {
    event.preventDefault(); //? отменил перезагрузку страницы при клике на кнопку
    if (input.value) {
        if (input.value.length > 21) {
            input.value = input.value.slice(0, 21) + "...";
        }
        //movieDB.movies[movieDB.movies.length] = input.value.toUpperCase();
        movieDB.movies.push(input.value.toUpperCase()); //? потому что список весь заглавными буквами
        input.value = ""; //? очистка поля ввода
        movieDB.movies.sort(); //? сортируем массив заново
        //? перестраиваем список
        movieListUpdate();
        //? Чекбокс "сделать фильм любимым"
        let checkBox = document.querySelector('input[type=checkbox]');
        if (checkBox.checked) {
            console.log(`Добавляем любимый фильм`);
        }
    }
});