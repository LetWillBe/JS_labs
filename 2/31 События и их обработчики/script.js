const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault(); /*отменяем стандартное поведение браузера*/
    console.log(e.target); /*вместо перехода по ссылке выводим в консоль объект события*/
});