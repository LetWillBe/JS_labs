"use strict";
//console.log(document.body); //обращаемся в элементу body
//console.log(document.head); //обращаеся к head
//console.log(document.documentElement); //обращаеся ко всему html документу

//? Все DOM-элементы в html странице являются DOM-узлами.
//? но не каждый узел является элементом
//? Узлы бывают нескольких видов.
//! 1) Узлы - элементы или просто элементы. Сюда входят все html теги такие как head, body, span и т.д.
//! 2) Текстовые узлы. Сюда входят переносы строк, пробелы или текст между тегами.
//? Пример
//* <div class="text">some text</div>
//? Блок с классом text является элементом, а текст между тегами является текстовым узлом.

//? Еще узлами являются комментарии в html файле.
//* Чтобы получить все дочерние узлы мы можем воспользоваться командой childNodes.
//console.log(document.body.childNodes); //получаем узлы которые являются детьми у body

//* Чтобы получить первый и последний узел мы используем команду firstChild и lastChild соответственно.
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);

//* Если нужно уточнить, что нам нужен именно первый и последний элемент используем команды firstElementChild и lastElementChild.
//console.log(document.body.firstElementChild);
//console.log(document.body.lastElementChild);

//* Для получения родительского узла или элемента используем команды parentNode - для узла и parentElementNode для элемента.
//console.log(document.querySelector('#current').parentNode);

//* Если нам нужно получить родителя родителя то есть подняться на ступень вверх по иерархии, то нужно просто еще раз вызвать эту команду.
//console.log(document.querySelector('#current').parentNode.parentNode);

//* Если нкжно получить именно элемент ,а не узел, используем метод parentElement
//console.log(document.querySelector('#current').parentElement);

//! data атрибутами являются те атрибуты, которые мы прописываем в html тегах в ситуативных случаях.
//? Пример
//* <div class="window" data-modal="3"></div>
//* В css коде мы пишем [data-modal="3"]{}
//console.log(document.querySelector('[data-current="3"]'));

//* Для получения соседнего узла используем команду previousSibling - для предыдущего соседа и nextSibling для следующего соседа.
//console.log(document.querySelector('[data-current="3"]').nextSibling);
//console.log(document.querySelector('[data-current="3"]').previousSibling);

//* Если нужно уточнить, что нам нужно именно элемент, то прописываем previousElementSibling и nextElementSibling.
//console.log(document.querySelector('[data-current="3"]').nextElementSibling);
//console.log(document.querySelector('[data-current="3"]').previousElementSibling);

//* т.к. у childNodes нет метода получить только элементы, приходится извращаться вручную
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue; //если узел является текстом - не выводим его в консоль(continue)
    }
    console.log(node);
}