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

const personalMovieDB = {
    count: 0,//вместо numberOfFilms
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
	personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},

	rememberMyFilms: function() {
    for (let i=0; i<2; i++){
    const a = prompt ('Один из последних просмотренных фильмов?', ''),
          b = prompt ('На сколько оцените его?', '');
    if (a != null && b != null && a !="" && b != "" && a.length < 50 && b.length < 50){
        personalMovieDB.movies[a] = b;
        console.log("DONE!");
        }
        else {
            console.log("ERROR");
            i--;
	        }
	    }
	},

	detectPersonalLevel: function() {
	    if (personalMovieDB.count < 10){
	        console.log("Просмотрено довольно мало фильмов");
	    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
	        console.log("Вы классический зритель");
	    } else if (personalMovieDB.count <= 30){
	        console.log("Вы киноман");
	    } else {
	        console.log("Произошла ошибка");
	    }
	},

	showMyDB: function(hidden) {
	    if (!hidden) {
	        console.log(personalMovieDB);
	    }
	},
//2)
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},

//3)
	writeYourGenres: function() {
	    for (let i=1; i <= 3; i++) {
	        const genres = prompt (`Ваш любимый жанр под номером ${i}`);
	        if (genres == "" || genres == null) {
	        	console.log("Неправильные данные");
	        	i--;
	        } else {
	        	personalMovieDB.genres[i - 1] = genres;
	        }
	    }
	    personalMovieDB.genres.forEach((item, i) => {
	    	console.log(`Любимый жанр ${i+1} - это ${item}`);
	    })
	},
};

// 1)
//rememberMyFilms - делаем методом personalMovieDB

//detectPersonalLevel - делаем методом personalMovieDB

//console.log(personalMovieDB);

//showMyDB - делаем методом personalMovieDB

// writeYourGenres- делаем методом personalMovieDB