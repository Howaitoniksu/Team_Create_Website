const series = document.querySelectorAll('.serie'); // Выбор всех элементов с классом 'serie' и сохранение их в переменную 'series'
series.forEach(item => { // Для каждого элемента в 'series'
    item.addEventListener('mouseover', function() { // Добавить обработчик события 'mouseover' на элемент
        item.style.color = 'blue'; // Изменить цвет текста элемента на синий при наведении мыши
    });
    item.addEventListener('mouseout', function() { // Добавить обработчик события 'mouseout' на элемент
        item.style.color = 'black'; // Изменить цвет текста элемента на черный при уходе мыши с элемента
    });
});
