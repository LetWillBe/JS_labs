`use strict`;

const arr = [1, 2, 3, 6, 8];

//Методы работы с массивом

arr.pop(); //удаляет элемент в конце массива

arr.push(10);//добавляет элемент в конец массива

//перебор всех элементов массива

//v 1 (for)
for (let i = 0, i < arr.length; i++) {
	console.log(arr[i]);
}

//v 2 (for-of)
//можно использовать break и continue, в отличии от forEach
for (let value of arr) {
	console.log(value);
}

console.log(arr.length);// выдает длину массива(последний индекс+1)


//v3  Метод forEach
//позвояет гибко перебрать все элементы которые находятся внутри массива
arr.forEach(function(item, i, arr)// item - элемент который мы перебираем(любое имя), i  номер по порядку, arr - ссылка на тото мссив, который перебирается
{
	console.log(`${i}: ${item} внутри массива ${arr}`);
});

//остальные методы перебора
arr.map();
arr.every/some();
arr.filter();
arr.reduce();

//Метод split
//преобразует строку в массив, в () указывается разделитель
const str = prompt(``, ``);
const product = str.split(`, `);

//Метод join
//преобразует массив в строку
console.log(product.join(`; `));


//Метод sort
//сортирует эелементы внутри массива
product.sort();//Если не передать функцию сравнения - сортирует как строки

function compareNum(a, b) {
	return a - b;
};//сравнение чисел, основаное на алгоритме быстрой сортировки
//http://algolist.ru/sort/quick_sort.php
arr.sort(compareNum);//числа в массиве отсортируются по порядку  как числа

//Псевдомассив
//это объект структура которого совпадает со структурой массива
//отличается от массива тем что для него нет никаких методов
//т.е.е он просто хранит данные по проядку
