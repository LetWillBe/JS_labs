/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert(`Просмотрено довольно мало фильмов`);
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert(`Вы классический зритель`);
    } else if (numberOfFilms >= 30) {
        alert(`Вы киноман`);
    } else {
        alert(`Что-то пошло не так!`);
    }
}

detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 1; i <= 3; ++i) {
        let answer1 = prompt(`Один из просмотренных фильмов (${i} из 3)`, ''),
            answer2 = prompt('На сколько оцените его?', '');
        if (answer1 == null || answer2 == null || answer1 == '' || answer2 == '' || answer1.length > 50 || answer2.length > 50) {
            --i;
            alert(`Неверное значение или длина строки больше 50 символов`);
        } else {
            personalMovieDB.movies[answer1] = answer2;
        }
    }
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; i <= 3; ++i) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();