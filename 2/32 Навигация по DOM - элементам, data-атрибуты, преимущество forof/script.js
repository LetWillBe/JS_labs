"use strict";

//Все элементы в html странице являются DOM узлами.
//Узлы бывают нескольких видов.
//1) Узлы - элементы или просто элементы. Сюда входят все html теги такие как head, body, span и т.д.
//2) Текстовые узлы. Сюда входят переносы строк, пробелы или текст между тегами.
//Пример - <div class="text">some text</div> - Блок с классом text является элементом, а текст между тегами является текстовым узлом.
//Еще узлами являются комментарии в html файле.
//Чтобы получить все дочерние узлы мы можем воспользоваться командой childNodes.
//Пример - document.body.childNodes;
//Чтобы получить первый и последний узел мы используем команду firstChild и lastChild соответственно.
//Пример - document.body.firstChild; document.body.lastChild;
//Если нужно уточнить, что нам нужен именно первый и последний элемент используем команды firstElementChild и lastElementChild.
//Для получения родительского узла или элемента используем команды parentNode - для узла и parentElementNode для элемента.
//Пример - document.querySelector('.someclass').parentNode; и document.querySelector('.someclass').parentElementNode;
//Если нам нужно получить родителя родителя тоесть подняться на ступень вверх по иерархии, то нужно просто еще раз вызвать эту команду.
//Пример - document.querySelector('.someclass').parentNode.parentNode;
//Для получения соседнего узла используем команду previousSibling - для предыдущего соседа и nextSibling для следующего соседа.
//Пример - document.getElementById("circle").previousSibling; document.getElementById("circle").nextSibling;
//Если нужно уточнить, что нам нужно именно элемент, то прописываем previousElementSibling и nextElementSibling.
//data атрибутами являются те атрибуты, которые мы прописываем в html тегах в ситуативных случаях.
//Пишется так - data-sometext = ''
//Пример - <div class="window" data-modal="2"></div>
//В css коде мы пишем [data-modal="2"]{}



