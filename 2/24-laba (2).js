/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания


//let numberOfFilms;
/*отпадает надобность в объявлении этой переменной, так как мы сделали personalMovieDB.count=0*/

//функцию start делаем методом personalMovieDB

//let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            alert(`Просмотрено довольно мало фильмов`);
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert(`Вы классический зритель`);
        } else if (personalMovieDB.count >= 30) {
            alert(`Вы киноман`);
        } else {
            alert(`Что-то пошло не так!`);
        }
    },
    rememberMyFilms: () => {
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
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; ++i) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre == "" || genre == null) {
                --i;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${item}`);
        });
    },
    showMyDB: () => {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
            console.log(`PrivatDB is OFF`);
        } else {
            personalMovieDB.privat = true;
            console.log(`PrivatDB is ON`);
        }
    },
};

//personalMovieDB.start();

//personalMovieDB.detectPersonalLevel();

//personalMovieDB.rememberMyFilms();

//personalMovieDB.writeYourGenres();

//personalMovieDB.toggleVisibleMyDB();

//personalMovieDB.showMyDB();